
const axios = require('axios');

const ownerModel=require('../model/flowerslist.model');

const getFlowerslist= async (req,res)=>{
    await axios.get(`https://flowers-api-13.herokuapp.com/getFlowers`).then(response =>{
        res.send(response.data.flowerslist)
    }).catch(error=>{
        console.log(error);
    
    })
}

const creatFavorite = async (req,res) =>{
    const{
        name,
        photo,
        instructions
    }= req.body;

ownerModel.find({email:email},(erorr,data)=>{
    if (erorr){
        console.log(error);
    }
    else{
        data[0].ownerFlower.push({
            name:name,
            photo:photo,
            instructions:instructions
        })
        data[0].save();
        res.send( data[0].ownerFlower)
    }
})
}

const getFavorite = async (req,res) =>{
    const email = req.query.email
    ownerModel.find({email:email},(erorr,data) =>{
        if (erorr){
            console.log(error);
        }
        else{
            res.send(data[0].ownerFlower)

        }
    })

}

const deleteFavorite = async (req,res) =>{
    const idx = req.params.idx
    const {email}=req.query
    ownerModel.find({email:email},(erorr,data) =>{
        if (erorr){
            console.log(error);
        }
        else {
            data[0].ownerFlower.splice(idx,1)
            data[0].save()
            res.send( data[0].ownerFlower)
        }
    })
}

const updateFavorite = async (req,res) =>{
    const idx = req.params.idx
    const {
        name,
        photo,
        instructions,
        email
    }=req.body

ownerModel.findOne({email:email},(erorr,data) => {
    if (erorr){
        console.log(error);
    }
    else {
        data.ownerFlower.splice(idx,1,{
            name:name,
            photo:photo,
            instructions:instructions
        })
        data.save();
        res.send(data.ownerFlower)
    }
})
}

module.exports={getFlowerslist,creatFavorite,getFavorite,deleteFavorite,updateFavorite
}
