const mongoose =require ("mongoose")

const Teamschema = new mongoose.Schema(
    {   

        name:{
            type:String,
            required:true
        },

        position:{
            type:String,
            required:true
        },

        imgUrl:{
            type:String,
            required:true
        },

        

        branch:{
            type:String,
            required:true
        }

       
    },
    {
    collection:"Team"
    }
)

module.exports = mongoose.model("Team",Teamschema)