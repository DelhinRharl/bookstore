import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addRemote } from '../../redux/Books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitStore = (e) => {
    e.preventDefault();
    if (!title || !category) return;
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
    };

    dispatch(addRemote(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <form className="form">
      <input
        className="name"
        required
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="cate"
        required
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="addbtn" type="submit" onClick={submitStore}>Add Book</button>
    </form>
  );
};

export default AddBook;
