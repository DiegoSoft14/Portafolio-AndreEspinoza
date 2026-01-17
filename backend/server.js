// server.js o app.js
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Configuración de CORS
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  // Agrega aquí otros orígenes si es necesario
];

app.use(cors({
  origin: function (origin, callback) {
    // Permite solicitudes sin origen (como apps móviles o curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `El origen ${origin} no está permitido`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(express.json());

// Configurar transporte de nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true para 465, false para otros puertos
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false // Para desarrollo local
  }
});

// Verificar conexión SMTP
transporter.verify(function(error, success) {
  if (error) {
    console.log('❌ Error en configuración SMTP:', error);
  } else {
    console.log('✅ Servidor SMTP listo para enviar correos');
  }
});

// Ruta de contacto
app.post('/api/contact/send', async (req, res) => {
  try {
    const { name, lastName, email, phone, message } = req.body;

    // Validar campos requeridos
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Nombre, email y mensaje son requeridos'
      });
    }

    // Configurar contenido del correo
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_FROM, // Se envía a ti mismo
      replyTo: email, // Para que puedas responder directamente al remitente
      subject: `Nuevo mensaje de ${name} ${lastName || ''} desde tu Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; background-color: #f4f4f4;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
              📧 Nuevo mensaje desde tu Portfolio
            </h2>
            
            <div style="margin-top: 20px;">
              <p><strong>👤 Nombre:</strong> ${name} ${lastName || ''}</p>
              <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
              ${phone ? `<p><strong>📞 Teléfono:</strong> ${phone}</p>` : ''}
              
              <div style="margin-top: 25px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #4CAF50;">
                <strong>💬 Mensaje:</strong>
                <p style="margin-top: 10px; color: #555; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
              
              <p style="margin-top: 30px; color: #666; font-size: 14px; text-align: center;">
                Este mensaje fue enviado desde el formulario de contacto de tu portfolio
              </p>
            </div>
          </div>
        </div>
      `,
      text: `Nuevo mensaje de ${name} ${lastName || ''} (${email})
${phone ? `Teléfono: ${phone}\n` : ''}
Mensaje:
${message}

---
Enviado desde el formulario de contacto del portfolio`
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);

    // Responder al cliente
    res.status(200).json({
      success: true,
      message: 'Mensaje enviado exitosamente'
    });

  } catch (error) {
    console.error('❌ Error enviando correo:', error);
    res.status(500).json({
      success: false,
      error: error.message || 'Error al enviar el mensaje'
    });
  }
});

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Servidor funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`🌍 Modo: ${process.env.NODE_ENV || 'development'}`);
  console.log(`✅ Health check: http://localhost:${PORT}/api/health`);
  console.log(`📧 API Contacto: http://localhost:${PORT}/api/contact/send`);
  console.log(`🔗 Orígenes permitidos: ${allowedOrigins.join(', ')}\n`);
});