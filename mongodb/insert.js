const dbConnectt=require("./Database")

const insertdata=async ()=>{

const dbData=await dbConnectt();
const insertItems= await dbData.insertOne({
    title:"phone" ,
    price:"2000",
    color:"red"
})

if(insertItems.acknowledged)
console.log("data inserted");


}
insertdata();