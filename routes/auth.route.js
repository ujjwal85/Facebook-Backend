const user=require("../model/user.model")
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const router=require('express').Router();
let userdata = null;
// passport.use(
//     new FacebookStrategy(
//       {
//           clientID        : "629016662074332",
//           clientSecret    : "85ac0bb1220a718c28833e03a1313a6a",
//           callbackURL     : "http://localhost:8000/api/auth/facebook/callback",
//           profileFields : ['id','displayName','name','email','picture.type(large)','gender']
//       //   clientID: config.facebookAuth.clientID,
//       //   clientSecret: config.facebookAuth.clientSecret,
//       //   callbackURL: config.facebookAuth.callbackURL,
//       },
//       function (accessToken, refreshToken, profile, done) {
     
//      user.findOne({ email: profile.emails[0].value }, (err, data) => {
//       if (data) {
//         // user exists
//         return done(null, data);
//       } else {
//         console.log('user created');
//         // create a user
//         user({
//           name: profile.displayName,
//           picture:profile.photos[0].value,
//           email: profile.emails[0].value,
//         }).save((err, data) => {
//           return done(null, data);
//         });
//       }
//     });
//       }
//     )
//   );


//   passport.serializeUser(function (user, done) {
//     userdata = user

//    done(null, user);
//   });
  
//   passport.deserializeUser(function (user, done) {
   
//     done(null, user);
//   });


//   router.get('/facebook', passport.authenticate('facebook', {
//     scope: ['email']
//   }));

//   router.get('/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: 'http://localhost:4200/',
//     failureRedirect: '/login/success'
//   }));

//   router.get('/login/success',(req, res)=>{
    
//       if(userdata){
//       res.send({success:true,user:userdata})
//     }else{
//       res.send({success:false})
//     }
    
//    });

//    function isAuthenticated(req,res,done){
//     if(userdata){
      
//       return done()
//     }
//     return false
//   }
  
//   router.get('/logout', isAuthenticated,(req, res) => {
//     req.session = null;
//     userdata = null
//     res.redirect('http://localhost:4200');
//   });

//    router.get('/profile',(req, res)=>{
//     res.send(req.user)
//    });


passport.use(
  new GoogleStrategy(
    {
        clientID        : "249676313854-99h7viteu7mt76qv5ombs7nblorf3ncd.apps.googleusercontent.com",
        clientSecret    : "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",
        callbackURL     : "http://localhost:8000/api/auth/google/callback",
       
    //   clientID: config.facebookAuth.clientID,
    //   clientSecret: config.facebookAuth.clientSecret,
    //   callbackURL: config.facebookAuth.callbackURL,
    },
    function (accessToken, refreshToken, profile, done) {
   
   user.findOne({ email: profile.emails[0].value }, (err, data) => {
    if (data) {
      // user exists
      return done(null, data);
    } else {
      console.log('user created');
      // create a user
      user({
        firstname: profile.name.givenName,
        lastname:profile.name.familyName,
        picture:profile.photos[0].value,
        email: profile.emails[0].value,

      }).save((err, data) => {
        return done(null, data);
      });
    }
  });
    }
  )
);


passport.serializeUser(function (user, done) {
  userdata = user

 done(null, user);
});

passport.deserializeUser(function (user, done) {
 
  done(null, user);
});


router.get('/google', passport.authenticate('google', {
  scope: ['profile','email']
}));

router.get('/google/callback',
passport.authenticate('google', {
  successRedirect: 'http://localhost:4200/check',
  failureRedirect: '/login/success'
}));

router.get('/login/success',(req, res)=>{
  
    if(userdata){
    res.send({success:true,user:userdata})
  }else{
    res.send({success:false})
  }
  
 });

 function isAuthenticated(req,res,done){
  if(userdata){
    
    return done()
  }
  return false
}

router.get('/logout', isAuthenticated,(req, res) => {
  req.session = null;
  userdata = null
  res.redirect('http://localhost:4200');
});

 router.get('/profile',(req, res)=>{
  res.send(req.user)
 });
  
   module.exports=router;