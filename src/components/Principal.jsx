import React from 'react'
import { Link } from 'react-router-dom';

const Principal = () => {
    return ( 
      <nav >
            <Link to={"/guarda"}>Guardas </Link>  
            <Link to={"/dotaciones"}>Dotaciones</Link> 

               
        </nav>
     );
}
 
export default Principal;