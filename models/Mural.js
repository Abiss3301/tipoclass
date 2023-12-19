const conexao = require('../config/conexao.js')

const MuralSchema = new conexao.Schema({
    postagem : String,
    mural_data : Date,
    Atividade :[{
        type: conexao.Schema.Types.ObjectId,
        ref: 'Atividade'
    }] 
})

module.exports = conexao.model('Mural',MuralSchema)