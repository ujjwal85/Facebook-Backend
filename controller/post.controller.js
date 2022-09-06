const post = require("../services/post.service");

module.exports.uploadPost = async (req, res) => {
  const data = req.body;
  const result = await post.uploadPost(data);
  res.send({ result });
};
module.exports.allPost = async (req, res) => {
  const result = await post.allPost();
  res.send({ result });
};
module.exports.like = async (req, res) => {
  const result = await post.like(req.body);
  res.send({ result });
};
module.exports.love = async (req, res) => {
    const result = await post.love(req.body);
    res.send({ result });
  };
  
