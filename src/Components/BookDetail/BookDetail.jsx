import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoreReadList,getStoreReadList } from '../../utility/addToDb';
const BookDetail = () => {
    const {bookId}=useParams();
    console.log(bookId);
    const data=useLoaderData();
    const book=data.find(el=>(el.bookId===parseInt(bookId)))
    console.log(book);

    const handleMarkAsRead=(id)=>{
        addToStoreReadList(id)
    }


    return (
<div className='m-auto w-[100%]'>
<div className="card bg-base-100 w-[80%] m-auto shadow-sm ">
  <figure>
    <img
      src={book.image} className='w-[250px] h-[250px]'
      />
  </figure>
  <div className="card-body">
   <h2 className="text-2xl font-bold text-center">{book.bookName}</h2>
   <h2 className='text-center'>By: {book.author}</h2>
   <h2 className='text-center'>Rating: {book.rating}</h2>
   <h2 className='text-center'>Review: {book.review}</h2>
   <h2 className='text-center'>Total Pages: {book.totalPages}</h2>
   <h1 className='text-center'>Year Of Publishing: {book.yearOfPublishing}</h1>
    <div className="card-actions w-[100%] flex justify-center">
      <button className="btn btn-primary" onClick={()=>handleMarkAsRead(book.bookId)}>Read</button>
      <button className='btn btn-primary'>Wish List</button>
    </div>
  </div>
</div>
</div>
    );
};

export default BookDetail;