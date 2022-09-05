const express = require("express");
const passport = require("passport");
const expressSession = require("express-session");
const cookieSession = require('cookie-session');
const mongoose=require('mongoose');
const cors=require('cors');
const PORT = process.env.PORT || 8000;
const app = express();


mongoose.connect('mongodb+srv://root:root@cluster0.qfxl9hl.mongodb.net/facebook?retryWrites=true&w=majority').then(() => {
    console.log("Databases connected");
})


app.use(
  cors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("hello");
});
app.set('trust proxy', 1);
app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "secret",
    maxAge: 3600000,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", require("./routes/index"));

app.listen(PORT, () => {
  console.log("server listening in port " + PORT);
});
