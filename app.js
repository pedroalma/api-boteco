//importa o módulo express para criar uma aplicação
//web usando node 

//a função require é semelhante ao import do react, ela serve para importar módulos para o protejo  
const express = require('express');

//inicianza a aplicação express
const app = express();

//definindo a porta n a qual o servidor irá rodar 
const port = 3000;

const funcionariosRouters = require('./route/funcionariosRouters');
const produtosRoules = require('./route/produtosRouters');

app.use(express.json());
app.use('/funcionarios', funcionariosRouters); 
app.use('/produtos', produtosRoules);

app.listen(port, () => {
    console.log (`Servidor rodando na porta ${port}`);
} );

app.get('/', (req, res) => {
    //Reposta em forma de objeto JSON
       res.json({message: 'Oba! robou :)'});   
});


app.get('/pedro', (req,res) => {
    //Reposta em forma de objeto JSON
       res.json({id:'01',
        nome:'pedro',
        profissao:'dev'
    });   
});