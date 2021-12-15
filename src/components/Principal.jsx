import React from 'react'
import { Link } from 'react-router-dom';

const Principal = () => {
    return ( 
      <div className='flex flex-row min-h-screen justify-center items-center'>      
        <div>
            <Link to={"/guarda"}>Guardas </Link> 
        </div> 
        <div>
            <Link to={"/dotaciones"}>Dotaciones</Link> 
         </div>
       </div>
       
               
        
     );
}
 
export default Principal;