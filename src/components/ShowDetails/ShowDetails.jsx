import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowDetails = ({ meal }) => {
     const { strMeal, strArea, strMealThumb } = meal;
     // console.log(meal);

     const navigate = useNavigate();

     const handleBackBtn = () => {
          navigate(-1);
     }

     return (
          <div className='border-2 border-green-600 rounded-md mb-5 shadow-lg'>
               <div className='flex place-content-center'>
                    <img className='w-5/6 p-3 h-auto' src={strMealThumb} alt="" />
               </div>
               <h1 className='text-2xl font-semibold'>{strMeal}</h1>
               <h4 className='text-xl p-1'>Location: {strArea}</h4>
               <button className='h-10 bg-sky-400 hover:bg-sky-500 font-bold p-2 w-20 rounded-md mt-3 mb-2' onClick={handleBackBtn}>Back</button>
          </div>
     );
};

export default ShowDetails;