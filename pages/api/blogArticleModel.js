// blogArticleModel.js
import mongoose, { Schema, model } from 'mongoose';

const sectionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const blogArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  recommended: {
    type: Number,
  },
  genre: {
    type: String,
  },
  sections: {
    type: [sectionSchema],
    required: true,
  },
});

const Blog =mongoose.models.blog || model('blog', blogArticleSchema);

export default Blog
