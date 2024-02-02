import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorHandle from './components/ErrorHandle/ErrorHandle';
import Meals from './components/Meals/Meals.jsx';
import MealDetails from './components/MealDetails/MealDetails.jsx';
import About from './components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorHandle />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/meals',
        element: <Meals />,
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
      },
      {
        path: '/meal/:mealName',
        element: <MealDetails />,
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealName}`)
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
