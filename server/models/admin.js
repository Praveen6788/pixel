const mongoose =require("mongoose")

const adminscema= new mongoose.Schema({
    adminName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
},
{
    collection:"Admin"
}


)


module.exports =mongoose.model("Admin",adminscema)