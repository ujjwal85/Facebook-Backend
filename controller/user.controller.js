const user = require("../services/user.service");

module.exports.allUsers = async (req, res) => {
  const data = req.body;
  const result = await user.allUsers(data);
  res.send({ result });
};
module.exports.singleUser = async (req, res) => {
  const data = req.params;
  const result = await user.singleUser(data);
  res.send({ result });
};
module.exports.sendRequest = async (req, res) => {
  const result = await user.sendRequest(req.body);
  res.send({ result });
};
module.exports.confirmRequest = async (req, res) => {
  const result = await user.confirmRequest(req.body);
  res.send({ result });
};

module.exports.deleteRequest = async (req, res) => {
  
    const result = await user.deleteRequest(req.body);
    res.send({ result });
  };
