const router= require('express').Router();
router.use('/auth',require('./auth.route'));
router.use('/post',require('./post.route'));
router.use('/user',require('./user.route'));

module.exports=router;