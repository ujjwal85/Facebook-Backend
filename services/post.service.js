const mongoose  = require('mongoose')
const post = require('../model/post.model');
const user = require('../model/user.model');

module.exports.uploadPost = async(userData)=>{

    try {
        // console.log(userData);
        const userId= mongoose.Types.ObjectId(userData.posted_by)

       await post({caption:userData.caption,post_url:userData.post_url,posted_by:userId}).save();
        return {status:200,message:"ok"}
    } catch (error) {
        return {status:400,message:"something wents wrong"}
    }


}

module.exports.allPost = async()=>{

    try {
           const data  = await post.find();
        return {status:200,data:data}
    } catch (error) {
        return {status:400,message:"something wents wrong"}
    }


}