import mongoose from "mongoose";

const NimsSchema = new  mongoose.Schema({
    name:String,
    
    userId:String,
    email:String,

    password:String,

})

const NimsModel = mongoose.model("Nims",NimsSchema)
export default NimsModel