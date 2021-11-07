const mysql=require('mysql');
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crudDataBase'

});

conexion.connect((error)=>{
    if (error){
        console.log('El error es ' + error);
        return
    };
    console.log('Conectado a MYSQL');
});

module.exports = conexion;
