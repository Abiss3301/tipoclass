const conexao = require("../config/conexao.js");

const TurmaSchema = new conexao.Schema({
  materia: String,
  turma_data: Date,
  Pessoa: [
    {
      type: conexao.Schema.Types.ObjectId,
      ref: "Pessoa",
    },
  ],
});

module.exports = conexao.model("Turma", TurmaSchema);
