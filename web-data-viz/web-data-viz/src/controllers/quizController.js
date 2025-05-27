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

function obterResultados(req, res) {
    quizModel.obterResultados()
        .then(resultado => {
            res.json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json({ erro: erro.sqlMessage });
        });
}

async function obterResultadoUsuario(req, res) {
    const idUsuario = req.params.idUsuario;

    try {
        const resultado = await quizModel.buscarResultadoUsuario(idUsuario);
        res.json(resultado);
    } catch (erro) {
        console.error('Erro ao buscar resultado do usuário:', erro);
        res.status(500).send('Erro ao buscar resultado do usuário');
    }
}


module.exports = {
    finalizarQuiz,
    obterResultados,
    obterResultadoUsuario
};