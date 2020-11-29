require("dotenv").config();
const path = require('path');
const express = require('express');
const favicon = require("serve-favicon");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require ("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const db = process.env.DB_URI || "mongodb://localhost:27017/pokeGUI";
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(favicon(__dirname + '/client/public/favicon.ico'));
app.use(express.static(path.join(__dirname, '/client/build')));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect( db, {useNewUrlParser: true ,useUnifiedTopology: true }, () => console.log("Connected to MongoDB..."));
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema ({
    email: String,
    password: String,
    googleId: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/pokeGUI",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);

    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  } 
));

app.listen( port, () => console.log(`Server now running`));
