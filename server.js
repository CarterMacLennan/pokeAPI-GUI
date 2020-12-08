const path = require('path'),
    express = require('express'),
    favicon = require("serve-favicon"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    bcrypt = require("bcrypt"), 
    saltRounds = 10;

const db = process.env.DB_URI || "mongodb://localhost:27017/pokeGUI";
const port = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded());
app.use(express.json());

mongoose.connect( db, {useNewUrlParser: true ,useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MongoDB...");
    }
});

const userSchema = new mongoose.Schema ({
    email: String,
    password: String,
});

const User = new mongoose.model("User", userSchema);

app.post("/api/register", async (req,res) => {
    console.log([req.body.username, req.body.password]);

    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        const newUser = new User({
            email: req.body.username,
            password: hash
        });
        newUser.save( error => {
            if (error){
                console.log(error);
                res.send(error);
            }
            else {
                console.log("true");
                res.send(true);
            }
        });
    });
});

app.post("/api/login", (req, res) => {
    User.findOne({email: req.body.username}, (err, user) => {
        if (err) {
            console.log(err);
        }
        else if (user){
            bcrypt.compare(req.body.password, user.password, (error, result) => {
                if (result) {
                    console.log("Valid!");
                    res.send("Valid!");
                }
                else {
                    console.log("Invalid Password");
                    res.send("Invalid Password");
                }
            });
        }
        else {
            console.log("Invalid UserName");
            res.send("Invalid UserName");
        }
    })
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
