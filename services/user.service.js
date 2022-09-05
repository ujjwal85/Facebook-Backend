const mongoose  = require('mongoose')
const post = require('../model/post.model');
const user = require('../model/user.model');

module.exports.allUsers = async(userData)=>{

    try {
        // console.log(userData);
       const data  = await user.find();
        return {status:200,message:"ok", data}
    } catch (error) {
        return {status:400,message:"something wents wrong"}
    }


}

module.exports.singleUser = async(userData)=>{

    try {
        
        const userId= mongoose.Types.ObjectId(userData.id)

       const data  = await user.findById(userId);
        return {status:200,message:data}
    } catch (error) {
        return {status:400,message:"something wents wrong"}
    }


}

module.exports.sendRequest = async(userData)=>{

    try {
        
        const userId= mongoose.Types.ObjectId(userData.userid);
        const myId= mongoose.Types.ObjectId(userData.myid);
        const mySave = {id:userData.myid,pic:userData.mypic,firstname:userData.myfirstname,lastname:userData.mylastname}
        const userSave = {id:userData.userid,pic:userData.userpic,firstname:userData.userfirstname,lastname:userData.userlastname}

       const udata  = await user.findById(userId);
       udata.friends.myFriendRequests.push(mySave)
       udata.save();
       const mdata = await user.findById(myId);
       mdata.friends.mySentRequests.push(userSave)
       mdata.save();
       

         return {status:200,message:"ok"}
    } catch (error) {
        return {status:400,message:"something wents wrong"}
    }


}

module.exports.confirmRequest = async(userData)=>{

    try {
       
        const userId= mongoose.Types.ObjectId(userData.userid)
        const myId= mongoose.Types.ObjectId(userData.myid)
        const mySave = {id:userData.myid,pic:userData.mypic,firstname:userData.myfirstname,lastname:userData.mylastname}
        const userSave = {id:userData.userid,pic:userData.userpic,firstname:userData.userfirstname,lastname:userData.userlastname}

        
       const udata  = await user.findById(userId);
       udata.friends.myFriends.push(mySave);
       udata.friends.mySentRequests.pull(mySave);
       udata.save();
       const mdata  = await user.findById(myId);
       mdata.friends.myFriends.push(userSave);
       mdata.friends.myFriendRequests.pull(userSave);
       mdata.save();
        return {status:200,message:"ok"}
    } catch (error) {
        return {status:400,message:"something wents wrong"}
    }


}

module.exports.deleteRequest = async(userData)=>{

    try {
        
        const userId= mongoose.Types.ObjectId(userData.userid);
        const myId= mongoose.Types.ObjectId(userData.myid);
        const mySave = {id:userData.myid,pic:userData.mypic,firstname:userData.myfirstname,lastname:userData.mylastname}
        const userSave = {id:userData.userid,pic:userData.userpic,firstname:userData.userfirstname,lastname:userData.userlastname}

       const udata  = await user.findById(userId);
       udata.friends.myFriends.pull(mySave)
       udata.save();
       const mdata = await user.findById(myId);
       mdata.friends.myFriends.pull(userSave)
       mdata.save();
       

         return {status:200,message:"ok"}
    } catch (error) {
        return {status:400,message:"something wents wrong"}
    }


}