from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

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
        smtp_user = os.getenv("SMTP_USER")
        smtp_pass = os.getenv("SMTP_PASS")
        to_email = os.getenv("TO_EMAIL", smtp_user)
        
        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = to_email
        msg['Subject'] = f"Nuevo contacto: {form_data.name}"
        
        cuerpo = f"""
        Nombre: {form_data.name} {form_data.lastName}
        Email: {form_data.email}
        Teléfono: {form_data.phone}
        
        Mensaje:
        {form_data.message}
        """
        
        msg.attach(MIMEText(cuerpo, 'plain'))
        
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)
        
        print("✅ Email enviado exitosamente")
        return True
    except Exception as e:
        print(f"❌ Error email: {e}")
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

# NO incluyas el if __name__ == "__main__" para Render