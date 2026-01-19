from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

# Cargar variables
load_dotenv()

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["POST"],
    allow_headers=["*"],
)

# Modelo
class ContactForm(BaseModel):
    name: str
    lastName: str = ""
    email: str
    phone: str = ""
    message: str

# Enviar email
def enviar_email(form_data):
    try:
        # Configuración
        smtp_user = os.getenv("SMTP_USER")
        smtp_pass = os.getenv("SMTP_PASS")
        to_email = os.getenv("TO_EMAIL", smtp_user)
        
        # Crear email
        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = to_email
        msg['Subject'] = f"Nuevo contacto: {form_data.name}"
        
        # Contenido
        cuerpo = f"""
        Nombre: {form_data.name} {form_data.lastName}
        Email: {form_data.email}
        Teléfono: {form_data.phone}
        
        Mensaje:
        {form_data.message}
        """
        
        msg.attach(MIMEText(cuerpo, 'plain'))
        
        # Enviar
        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login(smtp_user, smtp_pass)
            server.send_message(msg)
        
        return True
    except Exception as e:
        print(f"Error email: {e}")
        return False

# Endpoint principal
@app.post("/api/contact/send")
def send_contact(form_data: ContactForm):
    print(f"Datos recibidos: {form_data.name}, {form_data.email}")
    
    # Enviar email
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

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)