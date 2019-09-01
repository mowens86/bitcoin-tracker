// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req , res) => {
    //console.log(req.body.crypto);
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", (err, res, body) => {
        console.log(body);
    });
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});