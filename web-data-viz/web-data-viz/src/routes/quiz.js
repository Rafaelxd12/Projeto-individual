var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quizController');

// Rota POST para finalizar o quiz
router.post('/finalizar', quizController.finalizarQuiz);

// Rota get para colotar os dados do quiz
router.get('/resultados', quizController.obterResultados);
router.get('/resultado-usuario/:idUsuario', quizController.obterResultadoUsuario);

module.exports = router;