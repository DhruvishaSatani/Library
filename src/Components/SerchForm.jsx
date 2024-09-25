import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../src/Context';

const SerchForm = () => {
          const {setSearchTerm, setResultTitle} = useGlobalContext();
          const searchText = useRef('');
          const navigate = useNavigate();
        
          useEffect(() => searchText.current.focus(), []);
          const handleSubmit = (e) => {
            e.preventDefault();
            let tempSearchTerm = searchText.current.value.trim();
            if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
              setSearchTerm("the lost world");
              setResultTitle("Please Enter Something ...");
            } else {
              setSearchTerm(searchText.current.value);
            }
        
            navigate("/book");
          };
  return (
    <div className="w-full max-w-[680px]">
      <div className="container">
        <div className="serch-from-content">
          <form action="" className="serch-from"  onSubmit={handleSubmit}>
            <div className="rounded-xl px-[2.8rem] py-[1.4rem] flex justify-between bg-white">
              <input
                type="text"
                className=" text-3xl"
                placeholder="The last World..."
                ref = {searchText}
              />
               <button type = "submit" className='flex items-center' onClick={handleSubmit}>
                <FaSearch className='text-purple' size = {32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SerchForm;
