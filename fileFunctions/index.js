const fs = require('fs');
const path = require('path');

//Async
fs.readFile("./fileFunctions/files/starter.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

// with path
fs.readFile(path.join(path.dirname(__filename), 'files', 'starter.txt'), (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

// with path
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), (err, data) => {
    console.log(path.join(__dirname, 'files', 'starter.txt'));
    if (err) throw err;
    console.log(data.toString());
})


// 
//Asynchronous
const fnAsycWriteFile = () => {
    //write file - creating new file 
    fs.writeFile(path.join(__dirname, 'files', 'new.txt'), '\nHello Vishnu \n how is node js', err => {
        if (err) throw err;
        console.log('operation completed');

        //append file - appending new text to exsiting file 
        fs.appendFile(path.join(__dirname, 'files', 'new.txt'), '\nNew Text appended', err1 => {
            if (err1) throw err1;
            console.log('Append completed')
        })

        //renaming the file
        fs.rename(path.join(__dirname, 'files', 'new.txt'), path.join(__dirname, 'files', 'new2.txt'), err2 => {
            if (err2) throw err2;
            console.log('file renamed')
        })
    })
}


//Synchronous  way of reading
const fsPromise = require('fs').promises;
const fnSycWriteFile = async () => {
    const data = await fsPromise.readFile(path.join(__dirname, 'files', 'new.txt'));
    console.log('Sync ' + data.toString());


    const textData = fs.readFileSync(path.join(__dirname, 'files', 'new.txt'));
    console.log(textData.toString());

    //deleting file
    //await fsPromise.unlink(path.join(__dirname, 'files', 'new2.txt'));
}

//calling function
fnSycWriteFile();
fnAsycWriteFile();

//exit on uncaught errors
process.on("uncaughtException", err => {
    console.log("There is an error while reading file", err);
    process.exit(1);
})