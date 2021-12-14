import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return ( 
        <nav>
            <div >
                <h1><Link to={'/'} >Volver a Inicio</Link></h1>
            </div>

            
        </nav>
     );
}
 
export default Header;