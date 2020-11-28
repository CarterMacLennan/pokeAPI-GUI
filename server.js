const express = require('express'),
    favicon = require("serve-favicon"),
    logger = require("morgan");
    


const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(favicon(__dirname + '/client/public/favicon.ico'));
app.use(express.static(path.join(__dirname, '/client/public')));

if (process.env.NODE_ENV === 'production') {
    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, '/client/build', "index.html"));
    });
    
    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`Server now running on port ${port}!`));
}