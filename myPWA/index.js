const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.send(path.join(__dirname, "myPWA/public/index.html"));
});
app.listen(8000, () => console.log("Server is running on port 8000, visit http://localhost:8000 or http://127.0.0.1:8000 to access your website."));