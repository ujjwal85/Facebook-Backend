const post =require('../services/post.service');

module.exports.uploadPost =async (req,res)=>{
const data = req.body;
const result = await post.uploadPost(data);
res.send({result});
}
module.exports.allPost =async (req,res)=>{
    const result = await post.allPost();
    res.send({result});
    }