const express = require('express');
const { dbconnect } = require('./configs/db');
const { crudRouter } = require('./routes/crud.route');
const app = express();

// middlewares
app.use(express.json())

// homeroute
app.get('/',(req,res)=>res.send('HomeRoute'))

// router
app.use('/crud',crudRouter)


// server running
app.listen(3500,async(req,res)=>{
    try {
        dbconnect
        console.log('server running on 3500')

    } catch (error) {
        res.status(404).json({message:error.message});
    }
})