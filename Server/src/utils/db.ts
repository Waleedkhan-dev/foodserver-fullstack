import mongoose from 'mongoose';
const dbConnection = async (): Promise<void> => {
  try {
    const connect = await mongoose.connect(
      (process.env.MONGODB_URL as string) || ''
    );
    console.log('Mongo DB connect Sucessully');
  } catch (error) {
    console.log('Mongo DB faied to connect');
  }
};

export default dbConnection;
