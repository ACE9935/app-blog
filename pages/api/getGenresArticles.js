import mongoose from 'mongoose';
import Blog from "./blogArticleModel";
import connectDB from "./database";

const genresCardsNum = parseInt(process.env.NUM_GENRES_CARDS);

export default async function getGenresArticles(genre, cursor) {
  const db = await connectDB();

  // Define the page size
  const cursorShifted = (cursor * genresCardsNum)-genresCardsNum;

  try {
    const documents = await Blog.find({ genre: genre.replace(/-/g, ' ') }, { _id: 0, createdAt: 0 })
      .sort({ createdAt: -1 })
      .skip(cursorShifted)
      .limit(genresCardsNum)
      .lean()
      .exec();

    return documents;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    db.connection.close();
  }
}
