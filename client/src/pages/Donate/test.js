handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
        API.donateBook({
            isbn: this.state.isbn,
            title: this.state.title,
            subtitle: this.state.subtitle,
            author: this.state.author,
            desc: this.state.desc,
            book_image: this.state.book_image,
            pages: this.state.pages,
            condition: null,
            notes: null,
            user: null
        })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    }
};