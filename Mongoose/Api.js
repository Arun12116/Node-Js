const express = require("express");

require("./config");

const Products = require("./Product");

const app = express();
app.use(express.json());
app.post("/create", async (req, resp) => {
  let data = new Products(req.body);
  const result = await data.save();
  console.log(req.body);
  resp.send(result);
});

//get api
app.get("/getProduct", async (req, resp) => {
  let data = await Products.find();

  resp.send(data);

  console.log(data);
});

app.delete("/deleteProduct/:_id", async (req, resp) => {
  const data = await Products.deleteOne(req.params);
  console.log(req.params);
  resp.send(data);
});

app.put("/updateData/:_id", async (req, resp) => {
  const data = await Products.updateOne(req.params, { $set: req.body });
  resp.send(data);
});

app.listen(5000, () => {
  console.log("your port is running on 5000");
});
