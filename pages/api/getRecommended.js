import mongoose from 'mongoose';
import connectDB from './database';
import Blog from './blogArticleModel';


export default async function fetchBlogArticles(genre=false) {
  // Connect to MongoDB Atlas using the connectToMongoDB function
  const db = await connectDB(); 

  try {
    let articles;
    if(genre) articles = await Blog.find({recommended:1,genre:genre},{_id:0, createdAt: 0 })
    .sort({ createdAt: -1 })
    .limit(5).lean();
    else articles = await Blog.find({recommended:1},{_id:0, createdAt: 0 }).limit(5).lean();
    
    // Log the fetched articles
    console.log('Fetched Blog Articles Succesfully');

    // Return the fetched articles
    return  {data:articles}
  } catch (error) {
    console.error('Error fetching blog articles:', error);
    // Return an empty array or handle the error as needed
    return null
  } finally {
    // Close the MongoDB connection
    db.connection.close();
  }
}
