import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const Home = () => {
     
     const navigation = useNavigation();

     return (
          <>
               <Header />
               <div>{navigation.state === "loading" && <Spinner/>}</div>
               <Outlet/>
          </>
     );
};

export default Home;