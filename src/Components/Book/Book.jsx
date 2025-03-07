import React from 'react';
import { Link } from 'react-router-dom';
const Book = ({book}) => {
    return (
<div className='w-[30%]'>
<div className="card bg-base-100 w-96 shadow-sm ">
  <figure>
    <img
      src={book.image} className='w-[250px] h-[250px]'
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{book.bookName}</h2>
   <h2>By: {book.author}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
      <Link to={`/book/${book.bookId}`}>Detail</Link>
    </div>
  </div>
</div>
</div>
    );
};

export default Book;