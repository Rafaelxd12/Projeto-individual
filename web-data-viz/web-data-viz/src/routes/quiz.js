var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quizController');

// Rota POST para finalizar o quiz e salvar os dados
router.post('/finalizar', quizController.finalizarQuiz);

module.exports = router;

