import Blog from "./blogArticleModel";
import connectDB from "./database";

export default async function countDocs(genre=false){
    const db = await connectDB(); 
  try {
    // Construct the query with the genre condition
    const query = { genre: genre };

    // Use countDocuments to get the number of documents matching the query
    const count = await Blog.countDocuments(query);

    // Log or return the count value
    console.log(`Number of documents in genre ${genre}: ${count}`);
    return count;
  } catch (err) {
    // Handle error
    console.error(err);
    throw err; // Re-throw the error if needed
  }
  finally {
    // Close the MongoDB connection
    db.connection.close();
  }
};