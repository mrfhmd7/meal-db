import { useRouteError } from "react-router-dom";
import React from 'react';

const ErrorHandle = () => {
     const error = useRouteError();
     console.error(error);
     return (
          <div className="flex place-content-center my-40" id="error-page">
               <div>
                    <h1 className="text-5xl font-medium">Oops!😢😢</h1>
                    <h3 className="text-2xl font-medium mt-8">Sorry, an unexpected error has occurred.</h3>
                    <p className="text-xl mt-7">
                         <i>{error.statusText || error.message}</i>
                    </p>
               </div>
          </div>
     );
};


export default ErrorHandle;