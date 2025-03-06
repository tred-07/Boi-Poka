import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
    const param=useParams()
    console.log(param);
    return (
        <div>
{/* <div className="card bg-base-100 w-96 shadow-sm ">
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
    </div>
  </div>
</div> */}
</div>
    );
};

export default BookDetail;