const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middleware/auth.middleware');
const {
  listarPacientesConEvaluaciones,
  obtenerDetalleEvaluaciones,
  obtenerResumenEvaluaciones
} = require('../controllers/evaluaciones-ml.controller');

// Todas las rutas requieren autenticación
router.use(verificarToken);

/**
 * @route   GET /api/evaluaciones-ml/pacientes
 * @desc    Lista pacientes con evaluaciones ML
 * @access  Private
 */
router.get('/pacientes', listarPacientesConEvaluaciones);

/**
 * @route   GET /api/evaluaciones-ml/paciente/:id
 * @desc    Obtiene detalle de evaluaciones de un paciente
 * @access  Private
 */
router.get('/paciente/:id', obtenerDetalleEvaluaciones);

/**
 * @route   GET /api/evaluaciones-ml/resumen
 * @desc    Resumen estadístico de evaluaciones
 * @access  Private
 */
router.get('/resumen', obtenerResumenEvaluaciones);

module.exports = router;