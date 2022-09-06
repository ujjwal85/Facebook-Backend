const mongoose = require("mongoose");
const post = require("../model/post.model");
const user = require("../model/user.model");

module.exports.uploadPost = async (userData) => {
  try {
    // console.log(userData);
    const userId = mongoose.Types.ObjectId(userData.posted_by);

    await post({
      caption: userData.caption,
      post_url: userData.post_url,
      posted_by: userId,
    }).save();
    return { status: 200, message: "ok" };
  } catch (error) {
    return { status: 400, message: "something wents wrong" };
  }
};

module.exports.allPost = async () => {
  try {
    const data = await post.find().populate("posted_by");

    return { status: 200, data: data };
  } catch (error) {
    return { status: 400, message: "something wents wrong" };
  }
};
module.exports.like = async (userData) => {
  try {
    const postId = mongoose.Types.ObjectId(userData.post_details._id);
    const userId = mongoose.Types.ObjectId(userData.userid);
    const data = await post.findById(postId);
    if (data.like.includes(userId)) {
      data.like.pull(userId);
    } else {
      data.like.push(userId);
    }

    data.save();

    return { status: 200, data: "ok" };
  } catch (error) {
    return { status: 400, message: "something wents wrong" };
  }
};

module.exports.love = async (userData) => {
    try {
      const postId = mongoose.Types.ObjectId(userData.post_details._id);
      const userId = mongoose.Types.ObjectId(userData.userid);
      const data = await post.findById(postId);
      if (data.dislike.includes(userId)) {
        data.dislike.pull(userId);
      } else {
        data.dislike.push(userId);
      }
  
      data.save();
  
      return { status: 200, data: "ok" };
    } catch (error) {
      return { status: 400, message: "something wents wrong" };
    }
  };
  
