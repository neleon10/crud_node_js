const express = require('express');
const router =express.Router();
const conexion = require('./database/db');
const crud = require('./controllers/crud');

//READ
router.get('/',(req,res)=>{
    let sql = 'SELECT * FROM users';
    conexion.query(sql,(error,results)=>{
        if (error){
            throw error; 
        }else{          
           res.render('index',{results:results});            
        };
    });
});




// CREATE
router.get('/create',(req,res)=>{ 
    res.render('create');
});

//solo si aprieta Guardar en CREATE.EJS
router.post('/save',crud.save);




//EDIT or UPDATE **ATENCION ACA LEEMOS LOS DATOS POR ID ***
router.get('/edit/:id',(req,res)=>{
    let id = req.params.id;
    let sql = 'SELECT * FROM users WHERE id = ?';
    conexion.query(sql,[id],(error,results)=>{
        if (error){
            throw error; 
        }else{          
           res.render('edit',{user:results[0]});                
        };
    })
})

//solo si aprieta actualizar en EDIT.EJS
router.post('/update',crud.update);


//DELETE 
router.get('/delete/:id',(req, res)=>{
    let id = req.params.id;
    let sql = 'DELETE FROM users WHERE id = ?';
    conexion.query(sql,[id],(error,results)=>{
        if (error) throw error;
            res.redirect('/');
    });
});





module.exports = router;