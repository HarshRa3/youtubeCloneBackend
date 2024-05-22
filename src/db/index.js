import mongoose from "mongoose"
// import express from "express";
// const app = express();

import { DB_NAME } from "../constants.js"
const connectDb=async()=>{
 try {
    const conntion=await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
    console.log('connection is successfull',conntion.connection.host);
 } catch (error) {
    console.log(error);
}   
}
export default connectDb