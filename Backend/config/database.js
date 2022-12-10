import mongoose from "mongoose";
// import  * as dotenv from "dotenv";

// dotenv.config({path : "Backend/config/config.env"})

const connectDatabase = async()=>{
    await mongoose.connect(process.env.MONGO_URL, ()=>{
        console.log("connected to database")
    })
};

export default connectDatabase;