const express = require('express');
const router = express.Router();
const conecta = require('../models/dbConnection');

router.get('/', (req, res) => {
    conecta.query('SELECT * FROM tbprodutos', (err, result) => {
       if(err) throw err;
       res.json(result);
    })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM tbprodutos where id_produto = ${id}`;
    conecta.query(query, (err,result) => {
        if(err) throw err ;
        res.json(result);
    })
    
});

router.post('/' , (req,res) => {
    const {id_produtos, nome, valor, quantidade} = req.body;
    const query = `INSERT INTO tbprodutos (id_produto, nome, valor, quantidade) VALUES (?,?,?,?)`;

    conecta.query(query, [id_produtos,nome , valor ,quantidade ],(err,) => {
        if(err) throw err;
        res.status(201).json({
            mensagem: 'Produto adicionado!',
            body:req.body 
        });
    });

});

router.delete('/:id', (req,res) => {
    const {id} = req.params;
    const query = 'DELETE FROM tbprodutos WHERE id_produto = ?';    

    conecta.query(query , [id], (err) =>{
        if(err) throw err;
        res.status(201).json({
            mensagem: `Produto de id: ${id}, deletado com sucesso`
        })
    });
});
router.put('/:id' , (req, res) => {
    const {id} = req.params;
    const {id_produtos, nome, valor, quantidade} = req.body;
    const query = `UPDATE tbprodutos SET id_produto = ?, nome = ? , valor = ? ,quantidade = ? WHERE id_produto = ?`;
    conecta.query(query,[id_produtos,nome,valor, quantidade ,id],(err)=>{
        if(err) throw err;
        res.status(201).json({
            mensagem: `alteracao  aplicada`,
            envio:{
                id_produtos: id_produtos,
                nome:nome,
                valor:valor,
                quantidade:quantidade
            }
        })
    })
});

module.exports = router;