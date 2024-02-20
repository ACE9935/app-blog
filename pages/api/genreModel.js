import mongoose, { Schema, model } from 'mongoose';

const genreSchema = new mongoose.Schema({
  genre: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
});

const Bgenre =mongoose.models.bgenre || model('bgenre', genreSchema);

export default Bgenre