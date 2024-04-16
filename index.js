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
const { log } = require("console");
const fs = require("fs")
const path = require("path")
const Path = require("path")
const dirPath = path.join(__dirname, "files")
const filePath = `${dirPath}/apple.txt`;
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


/////////////////////
