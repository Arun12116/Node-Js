const dbConnect = require("./Database");

const update = async () => {
  try {
    const data = await dbConnect();
    const result = await data.updateOne(
      { title: "phone" },
      { $set: { title: "arun" } }
    );
    console.log(result);
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

update();
