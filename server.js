const express=require('express');
const cors=require("cors");
const database = require("./src/models/db");


//Iniciando o servidor
const app=express();

//Permite que seja enviado dados na aplicação no formato JSON
app.use(express.json());

app.use((req,res, next) =>{
    console.log('Acessou  o Middleware!');

    //Permite que qualquer site/aplicação consiga acessar nosso endpoint
    res.header('Access-Control-Allow-Origin','*');

    //Este cabeçalho especifica o método ou os métodos permitidos para acessar o endpoint
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE');
    app.use(cors());
    next();
});

//Rota
app.use('/anata',  require('./src/routes'));

//Ouvir requisições
app.listen(3001);