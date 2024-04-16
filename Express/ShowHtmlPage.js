const express = require("express");
const app = express();
app.get("", (req, resp) => {
  resp.send("<h1>hello this home page</h1>");
});
app.get("/about", (req, resp) => {
  resp.send("hello this is about page");
});
app.listen(5000);
//send html data in web page

app.get("/input", (req, resp) => {
  resp.send(
    '<input type="text" placeholder="enter your email"/> <button> submit</button>'
  );
});

//pass json data in web page
app.get("/jsondata", (req, resp) => {
  resp.send([
    {
      name: "arun",
      lastName: "yadav",
      phone: "555825699",
    },
    {
      name: "arun",
      lastName: "yadav",
      phone: "555825699",
    },
    {
      name: "arun",
      lastName: "yadav",
      phone: "555825699",
    },
  ]);
});
