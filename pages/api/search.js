import mongoose from 'mongoose';
import connectDB from './database';
import Blog from './blogArticleModel';

const genresCardsNum = parseInt(process.env.NUM_GENRES_CARDS);

export default async function search(exp, cursor) {
  // Connect to MongoDB Atlas using the connectToMongoDB function
  const db = await connectDB(); 
  exp = exp.replace(/\+/g, '-');
  const cursorShifted = (cursor * genresCardsNum)-genresCardsNum;
  try {
    let articles;
   
    const totalResults = await Blog.find({
        $or: [
            { genre: { $regex: new RegExp(exp, 'i')  } }, // Replace 'field1' with your actual field names
            { title: { $regex: new RegExp(exp, 'i')  } },
            // Add more fields as needed
          ],
      }).count();
      console.log('Found MNum ');
  
      // Calculate total pages
      const totalPages = Math.ceil(totalResults / genresCardsNum);

    articles = await Blog.find({
        $or: [
            { genre: { $regex: new RegExp(exp, 'i')  } }, // Replace 'field1' with your actual field names
            { title: { $regex: new RegExp(exp, 'i')  } },
            // Add more fields as needed
          ],
      },{_id:0,createdAt:0})
      .sort({ createdAt: -1 })
      .skip(cursorShifted)
      .limit(genresCardsNum)
      .lean()
    
    // Log the fetched articles
    console.log('Found Matches?:',articles);

    // Return the fetched articles
    return {
        matches:articles,
        totalResults:totalResults,
        currentPage:cursor,
        totalPage:totalPages,
        query:exp
      }
  } catch (error) {
    console.error('Error Matching articles:', error);
    // Return an empty array or handle the error as needed
    return null
  } finally {
    // Close the MongoDB connection
    db.connection.close();
  }
}

