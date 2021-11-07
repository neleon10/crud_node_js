const { json } = require('express');
const express = require('express');
const app = express();
const port = 3000;

//view engine 
app.set('view engine','ejs');

//aca le digo que tome los datos como JSON creo.
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//rutas
app.use('/',require('./router'));

//port
app.listen(port,()=>{ 
    console.log('Escuchando');
    });