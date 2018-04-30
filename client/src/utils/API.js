import axios from "axios";

export default {
  // Sample API1
  getBook: function(isbn) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=isbn:" +
        isbn +
        "&key=AIzaSyBr1902s5dmz5vSbYgt67qn3x0HO7rMmzg"
    );
  },
  // Gets the book with the given id
  searchBook: function(searchString) {
    if(searchString === null){
      return axios.get("/api/books");
    } else{
      return axios.get("/api/books?title=" + searchString);
    }
    
  }
};
