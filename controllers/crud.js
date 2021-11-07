//llamo a la base de datos
const conexion = require('../database/db');


exports.save = (req,res)=>{
    let data = {user:req.body.user, rol:req.body.rol};
    let sql = 'INSERT INTO users SET ? ';
    
    //hago la query, el pedido
    conexion.query(sql,data,(error,results)=>{
        if (error) throw error;
            res.redirect('/');
        });
}; 

exports.update = (req,res)=>{
    
    let id = req.body.id;
    let user = req.body.user; 
    let rol = req.body.rol;
    let sql = 'UPDATE users SET ? WHERE id = ?';

    conexion.query(sql,[{user:user,rol:rol},id],(error,results)=>{
        if (error) throw error;
         res.redirect('/');
    });
};