import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.set('strictQuery', true);

const db = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('Connected to Mongo');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
