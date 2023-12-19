const Pessoa = require("../models/Pessoa");
const Atividade = require("../models/Atividade");
const Mural = require("../models/Mural");
const Turma = require("../models/Turma");

function abreadd(req, res) {
  res.render("/add");
}

function abreaddPessoa(req, res) {
  res.render("addPessoa.ejs");
}

function addPessoa(req, res) {
  console.log(req.body);
  let novaPessoa = new Pessoa({
    nome: req.body.nome,
    email: req.body.email,
    endereco: req.body.endereco,
    genero: req.body.genero,
    idade: req.body.idade,
    cpf: req.body.cpf,
    telefone: req.body.telefone,
    senha: req.body.senha,
  });

  novaPessoa.save().then(function (pessoa, err) {
    if (err) {
      console.error(err);
      res.send(err.message);
    } else {
      console.log(pessoa);
      res.redirect("/lstPessoa");
    }
  });
}

function lstPessoa(req, res) {
  Pessoa.find({}).then(function (pessoas, err) {
    if (err) {
      console.error(err);
      res.send(err.message);
    } else {
      res.render("lstPessoa.ejs", { Pessoa: pessoas });
    }
  });
}

function pesquisaPessoa(req, res) {
  Pessoa.find({ nome: new RegExp(req.body.pesquisar, "i") }).then(function (
    pessoas,
    err
  ) {
    if (err) {
      console.error(err);
      res.send(err.message);
    } else {
      res.render("lstPessoa", { Pessoa: pessoas });
    }
  });
}

function abreedtPessoa(req, res) {
  Pessoa.findById(req.params.id).then(function (pessoa, err) {
    if (err) {
      console.error(err);
      res.send(err.message);
    } else {
      res.render("edtPessoa", { Pessoa: pessoa });
    }
  });
}

function edtPessoa(req, res) {
  Pessoa.findByIdAndUpdate(req.params.id, {
    nome: req.body.nome,
    email: req.body.email,
    endereco: req.body.endereco,
    genero: req.body.genero,
    idade: req.body.idade,
    cpf: req.body.cpf,
    telefone: req.body.telefone,
    senha: req.body.senha,
  }).then(function (pessoa, err) {
    if (err) {
      console.error(err);
      res.send(err.message);
    } else {
      res.redirect("/lstPessoa");
    }
  });
}

function delPessoa(req, res) {
  Pessoa.findByIdAndDelete(req.params.id).then(function (pessoa, err) {
    if (err) {
      console.error(err);
      res.send(err);
    } else {
      res.redirect("/lstPessoa");
    }
  });
}

function abreaddTurma(req, res) {
  Pessoa.find({}).then(function (pessoa, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("addTurma.ejs", { Pessoa: pessoa });
    }
  });
}

function addTurma(req, res) {
  let turma = new Turma({
    materia: req.body.materia,
    turma_data: Date(),
    Pessoa: req.body.Pessoa,
  });
  turma.save().then(function (turma, err) {
    if (err) {
      console.error(err);
      res.send(err.message);
    } else {
      res.redirect("/lstTurma");
    }
  });
}

function lstTurma(req, res) {
  Turma.find({})
    .populate("Pessoa")
    .then(function (turmas, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.render("lstTurma.ejs", { Turmas: turmas });
      }
    });
}

function pesquisaTurma(req, res) {
  Pessoas.find({ nome: new RegExp(req.body.pesquisar, "i") }).then(function (
    pessoas,
    err
  ) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstPessoa.ejs", { Pessoas: pessoas });
    }
  });
}

function abreedtTurma(req, res) {
  Turma.findById(req.params.id).then(function (turma, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtTurma.ejs", { Turma: Turma });
    }
  });
}

function edtTurma(req, res) {
  Turma.findByIdAndUpdate(req.params.id, {
    materia: req.body.materia,
    turma_data: Date(),
    Pessoa: req.body.Pessoa,
  }).then(function (pessoa, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstturma");
    }
  });
}

function delTurma(req, res) {
  Turma.findByIdAndDelete(req.params.id).then(function (pessoa, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstturma");
    }
  });
}

function abreaddMural(req, res) {
  Mural.find({}).then(function (Mural, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("addMural.ejs", { Mural: Mural });
    }
  });
}

function addMural(req, res) {
  let mural = new Mural({
    postagem: req.body.postagem,
    Mural_data: Date(),
    Atividade: req.body.Atividade,
  });
  mural.save().then(function (docs, err) {
    console.log(docs);
    res.redirect("/lstMural");
  });
}

function lstMural(req, res) {
  Mural.find({}).then(function (Mural, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstMural.ejs", { Mural: Mural });
    }
  });
}

function pesquisaMural(req, res) {
  Mural.find({ nome: new RegExp(req.body.pesquisar, "i") }).then(function (
    Mural,
    err
  ) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstMural.ejs", { Mural: Mural });
    }
  });
}

function abreedtMural(req, res) {
  Atividade.findById(req.params.id).then(function (atividade, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtMural.ejs", { Atividade: Atividade });
    }
  });
}

function edtMural(req, res) {
  Mural.findByIdAndUpdate(req.params.id, {
    postagem: req.body.postagem,
    Mural_data: Date(),
    Atividade: req.body.Atividade,
  }).then(function (atividade, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstMural");
    }
  });
}

function delMural(req, res) {
  Mural.findByIdAndDelete(req.params.id).then(function (atividade, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstMural");
    }
  });
}
//

function abreaddAtividade(req, res) {
  Atividade.find({}).then(function (atividades, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("addAtividade.ejs", { Atividade: atividades });
    }
  });
}

function addAtividade(req, res) {
  let atividade = new Atividade({
    descricao: req.body.descricao,
    pendente: Date(),
    tipo_de_atividade: req.body.tipo_de_atividade,
    ativ_data: Date(),
  });
  atividade.save().then(function (docs, err) {
    console.log(docs);
    res.redirect("/lstAtividade");
  });
}

function lstAtividade(req, res) {
  Atividade.find({}).then(function (atividade, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstAtividade.ejs", { Atividade: atividade });
    }
  });
}

function pesquisaAtividade(req, res) {
  Atividade.find({ nome: new RegExp(req.body.pesquisar, "i") }).then(function (
    atividade,
    err
  ) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstAtivdade.ejs", { Atividade: Atividade });
    }
  });
}

function abreedtAtividade(req, res) {
  Atividade.findById(req.params.id).then(function (atividade, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtAtividade.ejs", { Atividade: Atividade });
    }
  });
}

function edtAtividade(req, res) {
  Atividade.findByIdAndUpdate(req.params.id, {
    descricao: req.body.descricao,
    pendente: Date(),
    tipo_de_atividade: req.body.tipo_de_atividade,
    ativ_data: Date(),
  }).then(function (atividade, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstAtividade");
    }
  });
}

function delAtividade(req, res) {
  Atividade.findByIdAndDelete(req.params.id).then(function (atividade, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstAtividade");
    }
  });
}

module.exports = {
  abreadd,
  Pessoa,
  abreaddPessoa,
  addPessoa,
  lstPessoa,
  pesquisaPessoa,
  abreedtPessoa,
  edtPessoa,
  delPessoa,
  addTurma,
  abreaddTurma,
  lstTurma,
  pesquisaTurma,
  abreedtTurma,
  edtTurma,
  delTurma,
  addMural,
  abreaddMural,
  lstMural,
  pesquisaMural,
  abreedtMural,
  edtMural,
  delMural,
  addAtividade,
  abreaddAtividade,
  lstAtividade,
  pesquisaAtividade,
  abreedtAtividade,
  edtAtividade,
  delAtividade,
};
