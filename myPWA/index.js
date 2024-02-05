//*********************************************************************************
// written by:																   
// ▄████▄   ██░ ██  ▄▄▄       ██▀███   ██▓     ██▓▓█████ 						   
// ▒██▀ ▀█  ▓██░ ██▒▒████▄    ▓██ ▒ ██▒▓██▒    ▓██▒▓█   ▀						    
// ▒▓█    ▄ ▒██▀▀██░▒██  ▀█▄  ▓██ ░▄█ ▒▒██░    ▒██▒▒███  						    
// ▒▓▓▄ ▄██▒░▓█ ░██ ░██▄▄▄▄██ ▒██▀▀█▄  ▒██░    ░██░▒▓█  ▄						    
// ▒ ▓███▀ ░░▓█▒░██▓ ▓█   ▓██▒░██▓ ▒██▒░██████▒░██░░▒████▒						   
// ░ ░▒ ▒  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒▓ ░▒▓░░ ▒░▓  ░░▓  ░░ ▒░ ░						   	
//   ░  ▒    ▒ ░▒░ ░  ▒   ▒▒ ░  ░▒ ░ ▒░░ ░ ▒  ░ ▒ ░ ░ ░  ░						   
// ░         ░  ░░ ░  ░   ▒     ░░   ░   ░ ░    ▒ ░   ░   						   
// ░ ░       ░  ░  ░      ░  ░   ░         ░  ░ ░     ░  ░						   
// ░                                                      						   
//*********************************************************************************

// NOTES: 


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('.database/datasource.db');


/* // pseudocode portion
START
    GET record
    LET outputString = "[\n"
    COUNT LOOP from 0 to record.length ()
        outputString = outputString + "{\n"
        outputString = outputString + '"nesaID":'
        outputString = outputString + record.nesaID(COUNT)
        outputString = outputString + ',\n"name":'
        outputString = outputString + record.name(COUNT)
        outputString = outputString + ',\n"age":'
        outputString = outputString + record.age(COUNT)
        outputString = outputString + "}\n"
    RETURN outputString = "]\n"`
END
*/

let myString = '[\n';
db.all("SELECT * FROM tasks", function(err, rows) {
let myCounter = 0;
rows.forEach(function (row) {
    myString = myString + '{\n"taskID": ' + row.taskID + ',\n"taskName": "' + row.taskName + '",\n"taskDateInt": "' + row.taskDateInt;
    myCounter++
    if (myCounter == rows.length) {
        myString = myString + '"\n}\n';
    } else {
        myString = myString + '"\n},\n';
    }
});

// console.log(myString);
//let myString = "123";
var fs = require('fs');
fs.writeFile("public/frontEndData.json", myString + "]", function(err) {
    if (err) {
        console.log(err);
    }
}
);
});


const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.send(path.join(__dirname, "myPWA/public/index.html"));
});
app.listen(8000, () => console.log("Server is running on port 8000, visit http://localhost:8000 or http://127.0.0.1:8000 to access your website."));