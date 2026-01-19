from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import resend  # ← AÑADE ESTE IMPORT
from datetime import datetime  # ← AÑADE ESTE IMPORT

load_dotenv()

app = FastAPI()

# Configura CORS para producción
ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://portafolio-andre-espinoza.vercel.app",
    "https://*.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ← ACEPTA TODOS
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm(BaseModel):
    name: str
    lastName: str = ""
    email: str
    phone: str = ""
    message: str

def enviar_email(form_data):
    try:
        # Configurar Resend (NO SMTP)
        resend.api_key = os.getenv("RESEND_API_KEY")
        
        if not resend.api_key:
            print("❌ RESEND_API_KEY no configurada en variables de entorno")
            return False
        
        # Enviar email con Resend
        r = resend.Emails.send({
            "from": "Portfolio de Diego <onboarding@resend.dev>",
            "to": [os.getenv("TO_EMAIL", "diegoespinoza1405@gmail.com")],
            "subject": f"📨 Nuevo contacto: {form_data.name}",
            "html": f"""
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #2563eb;">Nuevo mensaje de contacto</h2>
                
                <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: #374151;">Información del contacto:</h3>
                    
                    <p><strong>👤 Nombre completo:</strong> {form_data.name} {form_data.lastName}</p>
                    <p><strong>📧 Email:</strong> <a href="mailto:{form_data.email}">{form_data.email}</a></p>
                    <p><strong>📞 Teléfono:</strong> {form_data.phone if form_data.phone else 'No proporcionado'}</p>
                    
                    <div style="margin-top: 20px;">
                        <strong>💬 Mensaje:</strong>
                        <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
                            {form_data.message}
                        </div>
                    </div>
                </div>
                
                <p style="color: #6b7280; font-size: 14px;">
                    📅 Enviado el: {datetime.now().strftime("%d/%m/%Y %H:%M")}
                </p>
            </div>
            """,
            "text": f"""
            NUEVO MENSAJE DE CONTACTO
            
            Nombre: {form_data.name} {form_data.lastName}
            Email: {form_data.email}
            Teléfono: {form_data.phone if form_data.phone else 'No proporcionado'}
            
            Mensaje:
            {form_data.message}
            
            ---
            Enviado desde tu portfolio web
            """
        })
        
        print(f"✅ Email enviado con Resend. ID: {r['id']}")
        return True
        
    except Exception as e:
        print(f"❌ Error Resend: {e}")
        return False

@app.post("/api/contact/send")
def send_contact(form_data: ContactForm):
    print(f"Datos recibidos: {form_data.name}, {form_data.email}")
    
    if enviar_email(form_data):
        return {
            "success": True,
            "message": "¡Mensaje enviado exitosamente!"
        }
    else:
        return {
            "success": False,
            "message": "Error al enviar el email"
        }

@app.get("/")
def home():
    return {"message": "Backend funcionando"}

@app.get("/api/health")
def health():
    return {"status": "ok"}