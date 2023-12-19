const conexao = require('../config/conexao.js')

const AtividadeSchema = new conexao.Schema({
    descricao: String,
    pendente: Date,
    tipo_de_atividade: String,
    ativ_data: Date

})

module.exports = conexao.model('Atividade',AtividadeSchema)