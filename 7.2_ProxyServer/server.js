const path = require('path');
const express = require('express');
const app = express();
const request = require('request');
const PORT = process.env.PORT || 5000;



//serving all files
app.use(express.static(path.join(__dirname,'webapp')));

//Proxcy
app.use('/northWind', function(req, res) {
    const url = 'https://services.odata.org'+ req.url;
    let r = null;
    if(req.method === 'POST') {
       r = request.post({uri: url, json: req.body});
    } else {
       r = request(url);
    }
  
    req.pipe(r).pipe(res);
  });

app.listen(PORT,()=>{
    console.log('Server running on PORT ' + PORT)
});