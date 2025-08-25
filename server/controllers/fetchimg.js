
const gallery =require("../models/image")

const fetchimg = async(req,res)=>{
    try{
        const data = await gallery.find()

    console.log(data)
    res.status(200).json({success:true,data:data})
    

    }catch(e){
        console.log(e)
        res.status(400).json({success:false,message:"error ata controller"})
    }
    
}

module.exports={fetchimg}