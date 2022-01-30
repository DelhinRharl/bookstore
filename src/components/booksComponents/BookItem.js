import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/Books';

const BookItem = (book) => {
  const {
    id, title, author,
  } = book;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <span>
        {title}
      </span>
      {author}
      <button type="button" onClick={removeBookFromStore}>Remove</button>
    </div>
  );
};

export default BookItem;
