import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRemote } from '../../redux/Books';
import BookItem from './BookItem';

const BookList = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRemote());
  }, []);
  return books.map((book) => (
    <BookItem
      title={book.title}
      key={book.item_id}
      item_id={book.item_id}
      category={book.category}
    />
  ));
};
export default BookList;
