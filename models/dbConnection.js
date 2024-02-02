//importando modulo do mysql
const mysql = require('mysql');

// criando conexão com o banco 

const conecta = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'dbbutecu'
});

conecta.connect((err) =>{
    if(err){
        console.log("Erro ao conectar ao banco: ", err);
        reject(err);
        return;
    }
    console.log('conectado do banco, deu bom ;)');
});

module.exports = conecta;