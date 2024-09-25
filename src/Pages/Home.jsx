import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom';
import BookList from '../Components/BookList/BookList';

const Home = () => {
  return (
    <div>
        {/* <h1>HOme</h1> */}
        <Header/>
        <Outlet />
        <BookList/>
    </div>
  )
}

export default Home
