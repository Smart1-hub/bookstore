import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddNewBook from './AddNewBook';
import Books from './Books';

const BookPage = () => {
  const bookList = [
    {
      booktitle: ' Lion and jwell',
      author: ' Wole soyinka',
      category: 'fiction',
      id: uuidv4(),
    },
  ];
  return (
    <div className="books">
      <Books bookList={bookList} />
      <AddNewBook />
    </div>
  );
};

export default BookPage;
