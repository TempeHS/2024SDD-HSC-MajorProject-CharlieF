const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('.database/datasource.db');


// console.log(myString);
let myString = "123";
var fs = require('fs');
fs.writeFile("public/frontEndData2.json", myString + "]", function(err) {
    if (err) {
        console.log(err);
    }
});

const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.send(path.join(__dirname, "myPWA/public/index.html"));
});
app.listen(8000, () => console.log("Server is running on port 8000, visit http://localhost:8000 or http://127.0.0.1:8000 to access your website."));