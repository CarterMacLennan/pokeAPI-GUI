const path = require('path'),
    express = require('express'),
    favicon = require("serve-favicon");
    
const app = express();

app.use(express.json());

app.use(favicon(__dirname + '/client/public/favicon.ico'));
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/client/build', "index.html"));
});

app.listen(process.env.PORT || 5000, () => console.log(`Server now running`));
