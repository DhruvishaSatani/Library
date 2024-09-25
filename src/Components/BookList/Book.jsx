import React from "react";
import { Link } from "react-router-dom";

const Book = (book) => {
  return (
    <div className=" py-[3rem] px-[2rem] rounded-md bg-white shadow-sm transition-all flex flex-column justify-between  hover:shadow-xl cursor-pointer">
      <div className="book-item-img">
        <img
          src={book.cover_img}
          alt="cover"
          className="max-w-[180px] ml-auto mr-auto"
        />
      </div>
      <div className="book-item-info text-center mb-[2rem]">
        <Link to={`/book/${book.id}`} {...book}>
          <div className="book-item-info-item leading-6 mb-3 font-bold text-[1.8rem]">
            <span>{book.title}</span>
          </div>
        </Link>

        <div className="book-item-info-item leading-6 mb-[4px] text-[1.5rem]">
          <span className="capitalize font-bold">Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className="book-item-info-item edition-count text-[1.5rem]">
          <span className="capitalize font-bold">Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className="book-item-info-item opacity-80 font-normal text-sm fs-15">
          <span className="capitalize font-bold">First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
