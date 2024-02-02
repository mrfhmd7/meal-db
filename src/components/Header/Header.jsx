import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
     return (
          <nav className='w-full bg-teal-800 text-white font-semibold p-4 flex justify-center gap-x-32 rounded-md'>
               <ActiveLink to='/'>Home</ActiveLink>
               <ActiveLink to='/meals'>Meals</ActiveLink>
               <ActiveLink to='/about'>About</ActiveLink>
          </nav>
     );
};

export default Header;