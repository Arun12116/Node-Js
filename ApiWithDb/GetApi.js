const express = require("express");
const dbConnect = require("../ApiWithDb/Database");

const app = express();
const mongoDb = require("mongodb");
app.use(express.json());

app.get("/", async (req, resp) => {
  try {
    const data = await dbConnect();
    const result = await data.find().toArray();
    resp.send(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    resp.status(500).send("Internal Server Error");
  }
});

app.post("/", async (req, resp) => {
  try {
    const data = await dbConnect();
    const result = await data.insertMany(req.body);
    console.log(result);
    resp.send(result);
  } catch (error) {
    console.error("Error inserting data:", error);
    resp.status(500).send("Internal Server Error");
  }
});

app.put("/", async (req, resp) => {
  const data = await dbConnect();
  const result = await data.updateOne(
    { title: req.body.title },
    { $set: req.body }
  );

  resp.send({ result });
});
app.delete("/:id", async (req, resp) => {
    try {
      const data = await dbConnect();
      const result = await data.deleteMany({
        _id: new mongoDb.ObjectId(req.params.id),
      });
      resp.send(result);
    } catch (error) {
      console.error("Error deleting data:", error);
      resp.status(500).send("Internal Server Error");
    }
  });



const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
