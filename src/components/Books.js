import React from 'react';
import AddBook from './booksComponents/AddBook';
import BookList from './booksComponents/BookList';

const Books = () => (
  <main>
    <BookList />
    <h2 className="add">ADD NEW BOOK</h2>
    <AddBook />
  </main>
);
export default Books;
