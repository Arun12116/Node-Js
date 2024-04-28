// const mongoose = require("mongoose");
// const url = "mongodb://localhost:27017/E-commerce";

///////save data in db with mongoose//////////////////
// const main = async () => {
//   await mongoose.connect(url);

//   const productSchema = new mongoose.Schema({
//     title: String,
//     price: Number,
//   });

//   const ProductsModel = mongoose.model("Product", productSchema);

//   let data = new ProductsModel({
//     title: "m 6",
//     price: "200",
//   });
//   let result = await data.save();
//   console.log(result);
// };

// main();

///////////update data in db with mongoose////////////

// mongoose.connect(url);

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   brand: String,
// });

// const saveInDb = async () => {
//   const ProductsModel = new mongoose.model("Products", productSchema);
//   const data = new ProductsModel({
//     name: "jon",
//     price: 5000,
//     brand: "zara",
//   });
//   const result = await data.save();
//   console.log(result);
// };

// const updateData = async () => {
//   const updateModal = new mongoose.model("Products", productSchema);

//   const result = await updateModal.updateOne(
//     {
//       name: "jon",
//     },
//     {
//       $set: { name: "hello" },
//     }
//   );

//   console.log(result);
// };

// updateData();

// const deleteData = async () => {
//   const modal = new mongoose.model("Products", productSchema);

//   const result = await modal.deleteOne({ name: "jon" });
//   console.log(result);
// };

// deleteData();



















