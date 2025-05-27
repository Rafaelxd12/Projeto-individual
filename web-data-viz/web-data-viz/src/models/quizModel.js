var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function registrarQuiz(idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", idUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
         INSERT INTO quiz (fkUsuario) VALUES (${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function registrarRespostas(idQuiz, respostas) {
    let valores = respostas.map(acertou => `(${idQuiz}, ${acertou})`).join(", ");
    var instrucaoSql = `
        INSERT INTO resposta_quiz (fkQuiz, acertou) VALUES ${valores};
    `;
    console.log("Executando SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterResultados() {
    let instrucao = `
        SELECT 
            SUM(CASE WHEN acertou = 1 THEN 1 ELSE 0 END) AS acertos,
            SUM(CASE WHEN acertou = 0 THEN 1 ELSE 0 END) AS erros
        FROM resposta_quiz;
    `;
    return database.executar(instrucao);
}

function buscarResultadoUsuario(idUsuario) {
    const instrucao = `
        SELECT 
            SUM(CASE WHEN rq.acertou = 1 THEN 1 ELSE 0 END) AS acertos,
            SUM(CASE WHEN rq.acertou = 0 THEN 1 ELSE 0 END) AS erros
        FROM quiz q
        JOIN resposta_quiz rq ON q.id = rq.fkQuiz
        WHERE q.fkUsuario = ${idUsuario};
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrarQuiz,
    registrarRespostas,
    obterResultados,
    buscarResultadoUsuario
};