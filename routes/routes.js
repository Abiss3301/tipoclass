const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const multer = require('multer');
const upload = multer({ dest: './public' })

//rota para abrir formulário de adicionar
router.get('/add',controller.abreadd)

//rota para receber dados do formulário e adicionar ao banco mongodb


router.get('/addPessoa', controller.abreaddPessoa)
router.post('/addPessoa',controller.addPessoa)

router.get('/addAtividade', controller.abreaddAtividade)
router.post('/addAtividade',controller.addAtividade)

router.get('/addMural', controller.abreaddMural)
router.post('/addMural',controller.addMural)

router.get('/addTurma', controller.abreaddTurma)
router.post('/addTurma',controller.addTurma)


router.get('/lstPessoa',controller.lstPessoa)
router.post('/lstPessoa',controller.pesquisaPessoa)

router.get('/lstTurma',controller.lstTurma)
router.post('/lstTurma',controller.pesquisaTurma)

router.get('/lstMural',controller.lstMural)
router.post('/lstMural',controller.pesquisaMural)

router.get('/lstAtividade',controller.lstAtividade)
router.post('/lstAtividade',controller.pesquisaAtividade)




router.get('/edtPessoa/:id', controller.abreedtPessoa)
router.post('/edtPessoa/:id', controller.edtPessoa)

router.get('/edtAtividade/:id', controller.abreedtAtividade)
router.post('/edtAtividade/:id', controller.edtAtividade)

router.get('/edtMural/:id', controller.abreedtMural)
router.post('/edtMural/:id', controller.edtMural)

router.get('/edtTurma/:id', controller.abreedtTurma)
router.post('/edtTurma/:id', controller.edtTurma)




router.get('/delPessoa/:id', controller.delPessoa)

router.get('/delAtividade/:id', controller.delAtividade)

router.get('/delMural/:id', controller.delMural)

router.get('/delTurma/:id', controller.delTurma)


module.exports = router