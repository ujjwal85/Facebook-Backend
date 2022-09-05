const mongoose=require('mongoose');
const {Schema} =require('mongoose');

const userSchema= new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    picture:String,
    friends:{
        myFriends:[{}],
        mySentRequests:[{}],
        myFriendRequests:[{}]
    }

});
module.exports=mongoose.model('user',userSchema);
