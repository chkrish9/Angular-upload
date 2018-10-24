var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var multer = require('multer');
var upload = require('./config').upload;

//Body Parser is used to parse the incomeing request.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Cors is used to allow all domain
app.use(cors());

//Get method is used to fetch the data from database.
app.get("/", (req, res, next) => {
    res.send("Hi");
});

//Post method is used to add the student in the database.
app.post("/upload", (req, res, next) => {
    upload(req, res, (error) => {
        if (error) {
            return res.status(501).json({ error: error });
        }
        res.json({ originalname: req.file.originalname, uploadName: req.file.filename });
    });
});

//Created the node server adn listing at port 3001 
app.listen("3001", () => {
    console.log("localhost:3001");
});