const express = require("express");
const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "upload");
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("userfile")

const app=express();

app.post("/upload",upload,(req,resp)=>{
resp.send("file uploaded")

})

app.listen(3000,()=>{
console.log("port listion on 3000");

})