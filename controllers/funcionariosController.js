const express = require('express');
const router = express.Router();
const conecta = require('../models/dbConnection');

router.get('/', (req, res) => {
    conecta.query('SELECT * FROM tbfuncionario', (err, result) => {
       if(err) throw err;
       res.json(result);
    })
});

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        const query = `SELECT * FROM tbfuncionario where id_funcionario = ${id}`;
        conecta.query(query, (err,result) => {
            if(err) throw err ;
            res.json(result);
        })
        
    }); 

    router.post('/' , (req,res) => {
        const {id_funcionario,nome , email ,telefone_celular,cpf, datanascimento ,endereco} = req.body;
        const query = `INSERT INTO tbprodutos (id_produto, nome, valor, quantidade) VALUES (?,?,?,?)`;
    
        conecta.query(query, [id_funcionario,nome , email ,telefone_celular,cpf, datanascimento ,endereco],(err,) => {
            if(err) throw err;
            res.status(201).json({
                mensagem: 'Produto adicionado!',
                body:req.body 
            });
        });
    
    });
module.exports = router;