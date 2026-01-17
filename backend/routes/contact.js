// routes/contact.js
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

console.log('📧 Configurando transporte de email...');

// Configurar transporte de email
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verificar conexión SMTP
transporter.verify(function(error, success) {
  if (error) {
    console.error('❌ Error en configuración SMTP:', error);
  } else {
    console.log('✅ SMTP configurado correctamente');
    console.log(`📨 Usuario: ${process.env.GMAIL_USER}`);
  }
});

// Validación de email
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Ruta principal de contacto
router.post('/send', async (req, res) => {
  console.log('📥 Solicitud POST recibida en /api/contact/send');
  
  try {
    const { name, lastName = '', email, phone = '', message } = req.body;

    console.log('📋 Datos recibidos:', { name, lastName, email, phone, message });

    // Validaciones básicas
    if (!name || !email || !message) {
      console.log('❌ Faltan campos requeridos');
      return res.status(400).json({
        success: false,
        error: 'Por favor completa los campos requeridos: nombre, email y mensaje'
      });
    }

    if (!isValidEmail(email)) {
      console.log('❌ Email inválido');
      return res.status(400).json({
        success: false,
        error: 'Por favor ingresa un email válido'
      });
    }

    // Configurar opciones del correo
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📧 Nuevo mensaje de ${name} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Nuevo mensaje desde tu Portfolio</h2>
          <p><strong>Nombre:</strong> ${name} ${lastName || ''}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
          <p><strong>Mensaje:</strong></p>
          <div style="padding: 15px; background: #f5f5f5; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
      text: `
NUEVO MENSAJE DEL PORTFOLIO
===========================

👤 Nombre: ${name} ${lastName}
📧 Email: ${email}
${phone ? `📞 Teléfono: ${phone}\n` : ''}
💬 Mensaje:
${message}

---
Enviado desde el formulario de contacto del portfolio
      `
    };

    console.log('📤 Enviando correo...');
    
    // Enviar correo
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Correo enviado exitosamente:', info.messageId);

    res.json({
      success: true,
      message: '¡Mensaje enviado exitosamente! Te contactaré pronto.'
    });

  } catch (error) {
    console.error('❌ Error al enviar correo:', error);
    
    res.status(500).json({
      success: false,
      error: 'Error al enviar el mensaje. Por favor, intenta de nuevo más tarde.'
    });
  }
});

// Ruta de prueba GET
router.get('/test', (req, res) => {
  console.log('✅ Ruta /test accedida');
  res.json({
    success: true,
    message: 'Ruta de contacto funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

// Ruta GET principal
router.get('/', (req, res) => {
  res.json({
    message: 'Ruta de contacto activa',
    endpoints: {
      send: 'POST /send - Enviar mensaje de contacto',
      test: 'GET /test - Probar conexión'
    }
  });
});

module.exports = router;