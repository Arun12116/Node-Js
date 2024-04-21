const dbConnect = require("./Database");
const deleteData = async () => {
  const data = await dbConnect();

  const result = await data.deleteMany({title:"arun"});
  console.log(result);
};

deleteData();
