import React from 'react';

const AddBook = () => (
  <form className="form">
    <input className="name" type="text" placeholder="Book title" />
    <input className="category" type="text" placeholder="Category" />
    <button className="addbtn" type="submit">Add Book</button>
  </form>
);

export default AddBook;
