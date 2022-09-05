const router= require('express').Router();
const post= require('../controller/post.controller');

router.post("/uploadPost",post.uploadPost);
router.get("/allPost",post.allPost);
module.exports= router;