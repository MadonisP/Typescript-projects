import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected`)
    } catch (error) {
        console.log(error)
        process.exit(1)// process.exit(1) ile process.exit(0) farkı 0 =okey demek 1 = fail demek

    }
}
module.exports = connectDB;