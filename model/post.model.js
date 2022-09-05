const mongoose=require('mongoose');
const {Schema} =require('mongoose');

const postSchema= new mongoose.Schema({
    caption:String,
    post_url:String,
    posted_by:{type:Schema.Types.ObjectId,ref:'user'},
    like:[{type:Schema.Types.ObjectId,ref:'user'}],
    dislike:[{type:Schema.Types.ObjectId,ref:'user'}],
    comment:[{}]
   

});
module.exports=mongoose.model('post',postSchema);
