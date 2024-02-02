import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Meals = () => {
     const meals = useLoaderData();
     // console.log(meals);
     return (
          <div className='grid md:grid-cols-3 gap-4 mt-6'>
               {
                    meals.categories?.map(meal => <Meal
                         key={meal.idCategory}
                         meal = {meal}
                    />)
               }
          </div>
     );
};

export default Meals;