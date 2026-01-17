const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Validación de email
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Configurar transporter de Nodemailer
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

// Ruta para enviar correo de contacto
router.post('/send', async (req, res) => {
  try {
    const { name, lastName, email, phone, message } = req.body;

    // Validación de campos requeridos
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Nombre, email y mensaje son requeridos'
      });
    }

    // Validación de formato de email
    if (!validateEmail(email)) {
      return res.status(400).json({
        success: false,
        error: 'Formato de email inválido'
      });
    }

    // Validación de longitud de mensaje
    if (message.length < 10) {
      return res.status(400).json({
        success: false,
        error: 'El mensaje debe tener al menos 10 caracteres'
      });
    }

    // Configurar el correo
    const mailOptions = {
      from: `"Portfolio Contacto" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📧 Nuevo mensaje de contacto de ${name} ${lastName || ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Nuevo Mensaje de Contacto</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
              Información del contacto
            </h2>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Nombre:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${name} ${lastName || ''}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">
                  <a href="mailto:${email}" style="color: #667eea;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Teléfono:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">
                  ${phone || 'No proporcionado'}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Fecha:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">
                  ${new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' })}
                </td>
              </tr>
            </table>
            
            <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px; margin-top: 30px;">
              Mensaje
            </h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0;">
              <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background-color: #e8f4ff; border-radius: 8px; text-align: center;">
              <p style="color: #667eea; margin: 0;">
                📧 Este mensaje fue enviado desde el formulario de contacto de tu portfolio
              </p>
            </div>
          </div>
          
          <div style="background-color: #333; color: white; padding: 20px; text-align: center; margin-top: 30px;">
            <p style="margin: 0; font-size: 14px;">
              © ${new Date().getFullYear()} Diego Espinoza - Cybersecurity & Web Development
            </p>
          </div>
        </div>
      `,
      text: `
Nuevo mensaje de contacto de ${name} ${lastName || ''}

📋 INFORMACIÓN DEL CONTACTO:
────────────────────────────
Nombre: ${name} ${lastName || ''}
Email: ${email}
Teléfono: ${phone || 'No proporcionado'}
Fecha: ${new Date().toLocaleString('es-PE', { timeZone: 'America/Lima' })}

💬 MENSAJE:
───────────
${message}

────────────────────────────
📧 Enviado desde el formulario de contacto del portfolio
© ${new Date().getFullYear()} Diego Espinoza
      `
    };

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Correo enviado:', info.messageId);
    
    res.json({
      success: true,
      message: 'Mensaje enviado exitosamente. Te contactaré pronto.',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Error enviando correo:', error);
    
    // Manejo de errores específicos
    let errorMessage = 'Error al enviar el mensaje. Por favor, intenta de nuevo.';
    let statusCode = 500;

    if (error.code === 'EAUTH') {
      errorMessage = 'Error de autenticación del servidor de correo.';
      statusCode = 500;
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Error de conexión con el servidor de correo.';
      statusCode = 503;
    }

    res.status(statusCode).json({
      success: false,
      error: errorMessage
    });
  }
});

// Ruta de prueba para el envío de correos
router.post('/test', async (req, res) => {
  try {
    if (process.env.NODE_ENV !== 'development') {
      return res.status(403).json({
        success: false,
        error: 'Esta ruta solo está disponible en desarrollo'
      });
    }

    const testMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: '✅ Prueba de correo del Portfolio',
      text: 'Este es un correo de prueba. El sistema de correos está funcionando correctamente.',
      html: '<h1>✅ Prueba exitosa</h1><p>El sistema de correos del portfolio está funcionando correctamente.</p>'
    };

    const info = await transporter.sendMail(testMailOptions);
    
    res.json({
      success: true,
      message: 'Correo de prueba enviado exitosamente',
      messageId: info.messageId
    });
    
  } catch (error) {
    console.error('Error en prueba de correo:', error);
    res.status(500).json({
      success: false,
      error: 'Error al enviar correo de prueba'
    });
  }
});

module.exports = router;