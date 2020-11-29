const path = require('path'),
    express = require('express'),
    favicon = require("serve-favicon"),
    mongoose = require("mongoose");
    
const app = express();

app.use(express.json());

app.use(favicon(__dirname + '/client/public/favicon.ico'));
app.use(express.static(path.join(__dirname, '/client/build')));

const db = process.env.DB_URI || "mongodb://localhost:27017/pokeGUI";

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

app.listen(process.env.PORT || 5000, () => console.log(`Server now running`));
