
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

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
