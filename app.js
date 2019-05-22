const express = require("express");
// const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

const mainPage = path.join(__dirname + '/views/index.html');
 
// This loads the main index page on going to the localhost page
app.get('/', (req,res) => res.redirect("/index.html"));
app.get('/index.html', (req,res) => res.sendFile(mainPage));

app.listen(port, () => console.log(`Example app listening on port ${port}`));

