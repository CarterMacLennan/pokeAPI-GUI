const path = require('path'),
    express = require('express'),
    mongoose = require("mongoose"),
    session = require ("express-session"),
    passport = require("passport"),
    passportLocalMongoose = require("passport-local-mongoose");

const db = process.env.DB_URI || "mongodb://localhost:27017/pokeGUI";
const port = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect( db, {useNewUrlParser: true ,useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MongoDB...");
    }
});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema ({
    email: String,
    password: String,
});
userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/favourites", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("secrets");
    }
    else {
        res.redirect("/login");
    }
});

app.get("/logout", (req, res) => {
    req.logout();
});

app.post("/api/register", async (req,res) => {
    console.log("registering...");
    User.register({username: req.body.username}, req.body.password, (err, user) => {
        if (err) {
            console.log("ERROR:");
            console.log(err);
            res.send(err);
        }
        else {
            console.log("authenticating...");
            passport.authenticate("local")(req, res, () => {
                console.log("TRUE!");
                res.send(true);
            });
        }
    })
});

app.post("/api/login", (req, res) => {
    const user = new User( {
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            passport.authenticate("local")(req, res, () => {
                res.send(true);
            });
        }        
    });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}
else {
    app.use(express.static(path.join(__dirname, '/client/public')));
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/public/index.html"));
    });
}

app.listen( port, () => console.log(`Server now running`));
