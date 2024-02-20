
const mongoose = require('mongoose');
const pwd = process.env.PWD;
 
  // Replace '<your_connection_string>' with your MongoDB Atlas connection string
  const uri = "mongodb+srv://admin:"+pwd+"@cluster0.i5dwy.mongodb.net/myDB?retryWrites=true&w=majority";

  // Connect to MongoDB Atlas
  export default async function connectDB(){
    try {
      const conn = await mongoose.connect(uri, {
        
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
      return conn
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

// Export the function for use in other modules
