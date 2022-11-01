
const mongoose =require ("mongoose")
const addressSchema= mongoose.Schema({
   name:{
    type:String   },

street:{
        type: String
},
city:{
        type: String
},
state:{
        type: String
},
zip:{
    type:Number
},
country:{
        type: String
},
mobileno:{
        type: Number
},
email:{
type:String }

})
const Delevery=mongoose.model("address", addressSchema)
module.exports=Delevery;