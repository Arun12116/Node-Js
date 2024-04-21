const express = require("express");
const dbConnect = require("../ApiWithDb/Database"); // Assuming insert function is exported from Database module

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint to fetch data
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

// POST endpoint to insert data
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

// Start the server
const port = 5000; // Corrected the port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
