const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  isbn: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: false
  },
  desc: {
    type: String,
    required: false
  },
  book_image: {
    type: String,
    required: false
  },
  pages: {
    type: String,
    required: false
  },
  condition: {
    type: String,
    required: false
  },
  notes: {
    type: String,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
