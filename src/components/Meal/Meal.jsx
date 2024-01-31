import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
     const {strCategory} = meal;

     console.log(strCategory);
     return (
          <div className='border-2 rounded-md border-solid border-green-400 shadow-lg mt-6'>
               <div className='flex place-content-center'>
                    <img src={meal.strCategoryThumb} alt="" />
               </div>
               <h1 className='text-xl font-bold'>{meal.strCategory}</h1>
               <Link to={`/meal/${strCategory}`}><button className='bg-emerald-500 hover:bg-emerald-900 h-10 w-20 rounded-md mt-4 mb-2 text-slate-100 font-semibold text-lg'>See all</button></Link>
          </div>
     );
};

export default Meal;