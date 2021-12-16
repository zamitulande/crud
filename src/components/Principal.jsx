import React from 'react'
import { Link } from 'react-router-dom';

const Principal = () => {
    return ( 
      <div>
          <div className="flex flex-wrap justify-center">
  <div className=" w-6/12 sm:w-4/12 px-1 mt-7 mb-7">
    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
  </div>
</div>
           <h1 className='text-center text-6xl -mt-62  mb-24 text-emerald-500 font-bold '>SEGURIDAD ORASEG LIMITADA</h1>    
        
            <div className='flex flex-row  justify-center items-center'> 
         
              <div className='text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-3xl'>
                   <Link to={"/guarda"}>Guardas </Link> 
              </div> 
            <div className='text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-3xl'>
            <Link to={"/dotaciones"}>Dotaciones</Link> 
          </div>
        </div>
       </div>
       
               
        
     );
}
 
export default Principal;