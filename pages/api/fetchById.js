// Import the mongoose module and connectToMongoDB function
import mongoose from 'mongoose';
import connectDB from './database';
import Blog from './blogArticleModel';


export default async function fetchById(id) {
  // Connect to MongoDB Atlas using the connectToMongoDB function
  const db = await connectDB(); 

  try {
    // Use the BlogArticle model to find all documents in the "blogArticles" collection
    const article = await Blog.find({title:decodeURIComponent(id.replace(/-/g, ' '))},{_id:0, createdAt: 0 }).lean();
    console.log(article);
    // Return the fetched articles
    return article
  } catch (error) {
    console.error('Error fetching blog articles:', error);
    // Return an empty array or handle the error as needed
    return null
  } finally {
    // Close the MongoDB connection
    db.connection.close();
  }
}