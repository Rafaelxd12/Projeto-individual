var quizModel = require("../models/quizModel");

function finalizarQuiz(req, res) {
    var idUsuario = req.body.idUsuario;
    var respostas = req.body.respostas; 

    quizModel.registrarQuiz(idUsuario).then(resultado => {
        let idQuiz = resultado.insertId;

        quizModel.registrarRespostas(idQuiz, respostas)
            .then(() => {
                res.status(200).send("Quiz registrado com sucesso.");
            })
            .catch(erro => {
                console.error("Erro ao registrar respostas:", erro);
                res.status(500).json(erro);
            });

    }).catch(erro => {
        console.error("Erro ao registrar quiz:", erro);
        res.status(500).json(erro);
    });
}

module.exports = {
    finalizarQuiz
};