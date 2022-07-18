const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.json({
        pruebas: "jala"
    });
});

app.listen(8080, function (req, res) {
    console.log("server on port 8080");
});