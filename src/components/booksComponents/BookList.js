import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  return books.map((book) => (
    <BookItem title={book.title} key={book.id} id={book.id} author={book.author} />
  ));
};

export default BookList;
