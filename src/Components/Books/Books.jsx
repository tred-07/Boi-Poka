import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
const Books = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    console.log(books);
    
    return (
        <div>
            <h2>Books</h2>
            <h2>{books.length}</h2>
            <div className='flex flex-wrap gap-[50px] w-[80%] m-auto'>
                {
                    books.map(book=><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;