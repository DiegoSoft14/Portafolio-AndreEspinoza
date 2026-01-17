const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware CORS simplificado
app.use(cors({
  origin: 'http://localhost:5173', // Tu frontend de Vite
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// Middleware para parsear JSON
app.use(express.json());

// Middleware de logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Importar rutas - CORREGIDO: apunta a routes/contact.js
const contactRoutes = require('./routes/contact'); // <-- CAMBIA ESTO

// Usar rutas
app.use('/api/contact', contactRoutes);

// Ruta de prueba de salud
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Servidor funcionando correctamente',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Ruta raíz
app.get('/', (req, res) => {
  res.json({
    message: '🎯 API del Portfolio - Diego Espinoza',
    version: '1.0.0',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact/send',
      test: 'POST /api/contact/test'
    },
    documentation: 'API para manejar el formulario de contacto del portfolio'
  });
});

// Ruta 404
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    message: `La ruta ${req.originalUrl} no existe en este servidor`
  });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error('❌ Error:', err.stack);
  res.status(500).json({
    error: 'Error interno del servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Algo salió mal'
  });
});

// Configurar puerto
const PORT = process.env.PORT || 5000;

// Iniciar servidor
const server = app.listen(PORT, () => {
  console.log('\n' + '='.repeat(50));
  console.log('🚀 SERVIDOR BACKEND INICIADO');
  console.log('='.repeat(50));
  console.log(`📡 Puerto: ${PORT}`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`📧 Modo: ${process.env.NODE_ENV || 'development'}`);
  console.log(`✅ Health: http://localhost:${PORT}/api/health`);
  console.log(`🔗 Frontend: http://localhost:5173`);
  console.log('='.repeat(50) + '\n');
});

// Manejo de cierre elegante
process.on('SIGTERM', () => {
  console.log('🛑 Recibido SIGTERM. Cerrando servidor...');
  server.close(() => {
    console.log('✅ Servidor cerrado exitosamente');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🛑 Recibido SIGINT. Cerrando servidor...');
  server.close(() => {
    console.log('✅ Servidor cerrado exitosamente');
    process.exit(0);
  });
});