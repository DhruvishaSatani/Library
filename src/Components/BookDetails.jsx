
import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from './loader/Loader';
import coverImg from "../assets/cover_not_found.jpg";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/search.json?title=";

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();
        console.log(data);

        if(data){
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };
          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getBookDetails();
  }, [id]);

  if(loading) return <Loading />;

  return (
    <section className='py-[6rem]'>
      <div className=''>
      <button type='button' className='flex justify-center back-btn' onClick={() => Navigate("/book/:~id")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back</span>
        </button>

        <div className='book-details-content gap-[4rem] grid'>
          <div className='book-details-img hidden max-h-[600px]'>
            <img src = {book?.cover_img} alt = "cover img"  className='w-full h-full object-cover my-0 mx-auto'/>
          </div>
          <div className='book-details-info overflow-y-scroll max-h-[600px] p-[1.4rem]'>
            <div className='book-details-item mb-[1.4rem] title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book-details-item  mb-[1.4rem]  opacity-80'>
              <span>{book?.description}</span>
            </div>
            <div className='book-details-item  mb-[1.4rem] '>
              <span className='fw-6'>Subject Places: </span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>
            <div className='book-details-item  mb-[1.4rem] '>
              <span className='fw-6'>Subject Times: </span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>
            <div className='book-details-item  mb-[1.4rem] '>
              <span className='fw-6'>Subjects: </span>
              <span>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookDetails
