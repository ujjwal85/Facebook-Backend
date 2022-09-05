const router= require('express').Router();
const user= require('../controller/user.controller');

router.get("/allUsers",user.allUsers);

router.get("/singleUser/:id",user.singleUser);
router.post("/sendRequest",user.sendRequest);
router.post("/confirmRequest",user.confirmRequest);
router.post("/deleteRequest",user.deleteRequest);

module.exports= router;