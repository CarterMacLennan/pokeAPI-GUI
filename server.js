const express = require('express'),
    favicon = require("serve-favicon"),
    mongoose = require('mongoose'),
    logger = require("morgan");
    
mongoose.connect(process.env.DB_URI || require('./config').db.uri, {
    useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(favicon(__dirname + '../client/build/favicon.ico'));
app.use(express.static(path.join(__dirname, '../client/build')));

if (process.env.NODE_ENV === 'production') {
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '../client/build', "index.html"));
    });
    
    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server now running on port ${port}!`));
}