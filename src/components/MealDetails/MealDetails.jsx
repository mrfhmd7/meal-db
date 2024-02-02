import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowDetails from '../ShowDetails/ShowDetails';

const MealDetails = () => {
     const categories = useLoaderData();
     console.log(categories.meals);

     return (
          <div className='grid md:grid-cols-3 gap-5 mt-10'>
               {
                    categories.meals?.map(meal => <ShowDetails
                         key={meal.idMeal}
                         meal={meal}
                    />)
               }
          </div>
     );
};

export default MealDetails;