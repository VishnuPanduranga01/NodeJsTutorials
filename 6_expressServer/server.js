const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;


app.get("/", (req, res) => {
    //res.send("hello World")
    res.sendFile(path.join(__dirname, "views", "index.html"))
    //res.sendFile("./views/index.html",{root:__dirname});
});
// regular expresion ^/$|index.html    ^/$|index(.html)? html optional
app.get("^/$|index(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))

});
app.get("/new-page.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "new-page.html"))
});

//redirect
app.get("/old-page.html", (req, res) => {
    res.redirect(301, '/new-page.html')
});

// Route handler
app.get("/hello.html", (req, res, next) => {
    console.log("Hello");
    next();
}, (req, res) => {
    res.send("Hey Man");
});

//not found file
app.get("/*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => { console.log("Local server is running") });