const conexao = require("../config/conexao.js");

const PessoaSchema = new conexao.Schema({
  endereco: String,
  genero: String,
  idade: String,
  cpf: String,
  nome: String,
  telefone: String,
  email: String,
  senha: String,
});

module.exports = conexao.model("Pessoa", PessoaSchema);
