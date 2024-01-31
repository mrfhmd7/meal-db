import React from 'react';

const Meal = ({ meal }) => {
     console.log(meal);
     return (
          <div className='border-2 rounded-md border-solid border-green-400 shadow-lg mt-6'>
               <div className='flex place-content-center'>
                    <img src={meal.strCategoryThumb} alt="" />
               </div>
               <h1 className='text-xl font-bold'>{meal.strCategory}</h1>
               <button className='bg-emerald-500 hover:bg-emerald-900 h-10 w-20 rounded-md mt-4 mb-2 text-slate-100 font-semibold text-lg'>See all</button>
          </div>
     );
};

export default Meal;