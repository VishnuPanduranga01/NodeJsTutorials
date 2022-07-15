const express = require('express');
const app = express();
const path = require("path");
const cors = require('cors');

const PORT = 9080;
//x-wwww-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

//serves all the static files
app.use(express.static(path.join(__dirname, 'webapp')));

// cors orgin resource sharing
app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'webapp','views', 'index.html'))
})

// for all request
app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'webapp','views', '404.html'))
})

app.listen(PORT, () => {
    console.log("server Running on 9080")
});
