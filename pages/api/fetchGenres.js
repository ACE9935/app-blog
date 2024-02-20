import mongoose from 'mongoose';
import connectDB from './database';
import Bgenre from './genreModel';


export default async function fetchGenres(genre=false) {
  // Connect to MongoDB Atlas using the connectToMongoDB function
  const db = await connectDB(); 

  try {
    const genres = await Bgenre.find(genre?{genre}:{},{_id:0}).lean();

    // Return the fetched articles
    return genres
  } catch (error) {
    console.error('Error fetching blog articles:', error);
    // Return an empty array or handle the error as needed
    return null
  } finally {
    // Close the MongoDB connection
    db.connection.close();
  }
}
