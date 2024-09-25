import React from 'react';
import { useGlobalContext } from '../../Context.jsx';
import Book from "../BookList/Book.jsx";
import Loading from "../loader/Loader.jsx";
import coverImg from "../../assets/cover_not_found.jpg";

//https://covers.openlibrary.org/b/id/240727-S.jpg

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  return (
    <section className=' py-[3rem] bg-[#f8f9fa]'>
      <div className=''>
        <div className='section-title'>
          <h2 className=' text-center text-4xl font-bold '>{resultTitle}</h2>
        </div>
        <div className=' booklist-content gap-[3rem] grid'>
          {
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key = {index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList
