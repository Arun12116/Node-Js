/////////////////////////////////first api using node without data base /////////////////////////////////////

// const http = require("http");
// const userData=require("./FirstApi/userData")
// http.createServer((req, resp) => {
//     resp.writeHead(200, { 'content-Type': 'application\json' });
//     resp.write(JSON.stringify(userData));
//     resp.end();


// }).listen(5000)


//////////////////////////////////////CRUD With file system////////////////////////////////////////////////////

//create file
// const { log } = require("console");
// const fs = require("fs")
// const path = require("path")
// const Path = require("path")
// const dirPath = path.join(__dirname, "files")
// const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,"this is a simple text file")
//read file
// fs.readFile(filePath,"utf-8",(error,items)=>{

// console.log(items);


// })
//update file items
// fs.appendFile(filePath, "and file name is apple.txt", (error) => {

//     if (!error) {
//         console.log("file is upaded");

//     }

// })

//rename file
// fs.rename(filePath,`${dirPath}/fruit.txt`,(error)=>{

// if(!error){
// console.log("rename file succesfully");

// }

// })

//delete
// fs.unlinkSync(`${dirPath}/fruit.txt`)

// const express = require("express");

// const path = require("path");

// const app = express();

// const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath));
// app.listen(4000);

// Importing express module
const { log } = require("console");
const express = require("express");

// Importing path module
const path = require("path");

// Creating an Express application instance
const app = express();

// Defining the path to the public directory
const publicPath = path.join(__dirname, "public");
console.log("public",publicPath);

// Serving static files from the public directory
app.use(express.static(publicPath));

// Start listening on port 4000
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});


