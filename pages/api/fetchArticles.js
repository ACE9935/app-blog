// Import the mongoose module and connectToMongoDB function
import mongoose from 'mongoose';
import connectDB from './database';
import Blog from './blogArticleModel';


export default async function fetchBlogArticles(cat=false,lm=false) {
  // Connect to MongoDB Atlas using the connectToMongoDB function
  const db = await connectDB(); 
  

  try {
    let articles 
    if(cat && lm)  articles = await Blog.find({genre:cat},{_id:0, createdAt: 0 }).limit(lm).lean();
    else articles = await Blog.find();

    // Return the fetched articles
    return articles
  } catch (error) {
    console.error('Error fetching blog articles:', error);
    // Return an empty array or handle the error as needed
    return null
  } finally {
    // Close the MongoDB connection
    db.connection.close();
  }
}
