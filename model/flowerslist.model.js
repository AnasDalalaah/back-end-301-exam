const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteFlower= new Schema({
    name:String ,
    photo:String,
    instructions:String

});

const ownerSchema=new Schema({
    email:String,
    ownerFlower:[favoriteFlower]
});

const ownerModel = mongoose.model('owner',ownerSchema);

const seedOwner=()=>{
    const anas= new ownerModel({
        email:'anasfuad232@gmail.com',
        ownerFlower:[{
            photo:'https://m.media-amazon.com/images/I/71zNWbTHzxL.jpg',
            name:'rose',
            instructions:'perfect'

        }]
    })
    const roaa= new ownerModel({
        email:'roaa.abualeeqa@gmail.com',
        ownerFlower:[{
            photo:'https://m.media-amazon.com/images/I/71zNWbTHzxL.jpg',
            name:'rose',
            instructions:'perfect'

        }]
    })
    anas.save();
    roaa.save();

}

//seedOwner();
module.exports= ownerModel ;

