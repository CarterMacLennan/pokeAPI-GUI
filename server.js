const path = require('path'),
    express = require('express'),
    favicon = require("serve-favicon"),
    mongoose = require("mongoose");

const db = process.env.DB_URI || "mongodb://localhost:27017/pokeGUI";
const port = process.env.PORT || 5000;

const app = express();
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
