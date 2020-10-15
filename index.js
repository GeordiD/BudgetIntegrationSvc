var express = require("express");
var app = express();
app.use(express.urlencoded( { extended: true }));

var fs = require('fs');
var moment = require('moment');

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.post("/discover", (req, res, next) => {
    var date = moment().format("YYYY-MM-DD-HH:mm:ss");
    var loggedData = "";
    
    fs.appendFile('log.txt', date + ": " + JSON.stringify(req.body) + "\n", (err) => {
        if(err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});