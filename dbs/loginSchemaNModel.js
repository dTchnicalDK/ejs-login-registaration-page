import mongoose from "mongoose";


// defining schema for login 
const logingSchema = mongoose.Schema({
name: { type: String, required: true, unique: true, trim: true},
email: { type: String, required: true, unique: true, trim: true}, 
password:{ type: String, required: true,}
})

// creating model or collection
const loginCredential = mongoose.model('loginCredential', logingSchema)


// exporting model
export default loginCredential;