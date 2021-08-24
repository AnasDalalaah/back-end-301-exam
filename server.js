const express = require('express');

const cors = require('cors');

const axios = require('axios');

require('dotenv').config();

const app = express();
const {getFlowerslist,creatFavorite,getFavorite,deleteFavorite,updateFavorite}=require('./controller/flowerslist.controller')
app.use(cors());
const PORT = process.env.PORT 
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/flowerslist', {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/flowerslist',getFlowerslist)

app.post('/favorite',creatFavorite)
app.get('/favorite',getFavorite)
app.delete('/favorite/:idx',deleteFavorite)
app.put('/favorite/:idx',updateFavorite)



app.get('/',function(req,res){
    res.send('Hellow Everone')
})
app.listen(PORT,()=>{
console.log(`True Terminal ${PORT}`)
})
