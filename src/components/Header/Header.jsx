import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <nav className='w-full bg-teal-800 text-white font-semibold p-4 flex justify-center gap-x-32 rounded-md'>
               <Link to='/'>Home</Link>
               <Link to='/meals'>Meals</Link>
               <Link to='/about'>About</Link>

          </nav>
     );
};

export default Header;