const fs = require('fs')
const path = require('path');
const { isGeneratorFunction } = require('util/types');
//createReadStream
const rs = fs.createReadStream(path.join(__dirname, "files", "new.txt"), "utf8");

const ws = fs.createWriteStream(path.join(__dirname, "files", "stream.txt"))

rs.on('data', dataChunk => {
    ws.write(dataChunk);
})

rs.pipe(ws);


delete directory

if(fs.existsSync(path.join(__dirname, "new"))){
    fs.rmdir(path.join(__dirname, "new"),err1=>{
        console.log("Directory deleted");
    })
}

//make directory 

if (!fs.existsSync(path.join(__dirname, "new"))) {

    fs.mkdir(path.join(__dirname, "new"), err => {
        if(err) throw err;
        console.log("Directory created");
    })
}

