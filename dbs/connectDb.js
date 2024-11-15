import mongoose from "mongoose";

// defining function to connect database
function connectMongoDb (uri){
    mongoose.connect(uri).then(()=>{
        console.log('mongodb connected with database logindb')
    }).catch((error)=>{
        console.log(error)
    })
}

export default connectMongoDb;