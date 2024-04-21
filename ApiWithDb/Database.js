const { MongoClient } = require("mongodb");
const database = "E-commerce";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function getdata() {
  let result = await client.connect();
  let db = result.db(database);
  return db.collection("Product");
}

module.exports = getdata;
