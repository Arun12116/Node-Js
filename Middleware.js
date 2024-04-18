//application level middleware example

// const express = require("express");
// const app = express();

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("please enter your age");
//   } else if (req.query.age < 18) {
//     resp.send("you can not access this home page");
//   } else {
//     next();
//   }0
// };

// app.use(reqFilter);
// app.get("/", (req, resp) => {
//   resp.send("welcome to home page");
// });

// app.listen(4000, () => {
//   console.log("port run on 4000");
// });

///////////////////////Router-level Middleware/////////////////////////////

const express = require("express");

const app = express();
const filterRoutes = (req, resp, next) => {
  if (!req.query.age) {
    console.log("please enter your age");
  } else if (req.query.age < 18) {
    resp.send("you can not access to the home page");
  } else {
    next();
  }
};

app.get("/", (req, resp) => {
  resp.send("welcome page ");
});

app.get("/about", filterRoutes, (req, resp) => {
  resp.send("welcome  to about page ");
});

app.listen(4000, () => {
  console.log("app run in port 4000");
});
