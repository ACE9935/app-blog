import Blog from "./blogArticleModel";
import connectDB from "./database";


export default async function updateCreatedAtField(){
    const db = await connectDB(); 
    try {
      // Fetch all documents
      const documents = await Blog.find({});
  
      // Loop through each document
      for (const doc of documents) {
        // Add a new 'createdAt' field with the current timestamp to each document
        doc.createdAt = new Date();
  
        // Save the document to update it in the collection
        await doc.save();
        console.log('Document updated successfully.');
      }
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error);
    }
    finally {
        // Close the MongoDB connection
        db.connection.close();
      }
  };
  
  // Call the function to update the 'createdAt' field
