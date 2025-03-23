import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI)
        console.log("Database Connected")
    } catch (error){
        console.log("Error connect to MongoDB: ", error)
        process.exit(1)
    }
}