import React, {Fragment, useEffect} from 'react';
import Guarda from './Guarda';

import { Link } from 'react-router-dom';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerGuardasAction } from '../actions/guardaAction';


const Guardas = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        //consultar la api
        const cargarGuardas=()=> dispatch(obtenerGuardasAction());
        cargarGuardas();

        
    }, [dispatch]);


    //obtener el state que se obtubo con el codigo de los reducers y el action
    const guardas = useSelector(state => state.guardas.guardas);
    const error = useSelector(state => state.guardas.error);
    const cargando = useSelector(state =>state.guardas.loading);


    return (
      <Fragment>
           <div className='container mx-auto border-2 my-5'>
          <div className='mt-20 text-3xl text-center' >
                     <h1 className='text-gray-800 bg-transparent border border-solid border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-800 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none  mb-10  ease-linear transition-all duration-150 text-3xl text-center'><Link to={'/'} >Volver a Inicio</Link></h1>
                     <Link to={"/guarda/nuevo"}
                 className='text-gray-800 bg-transparent border border-solid border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-800 font-bold uppercase px-3 py-1 rounded-full outline-none focus:outline-none mr- ease-linear transition-all duration-150 text-l'
                >Agregar Nuevo Guarda &#43;</Link>   
           </div>
           <h2 className='text-center mt-20 text-3xl'>Listado de Guardas</h2>
           <div className='flex flex-row mt-20 justify-center items-center'>
          
          

          {error ? <p>Hubo un Error</p> : null }
          {cargando ? <p>Cargando...</p> : null }   

          <table>
                <thead>
                    <tr>
                        <th scope="col">Cedula</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">EPS</th>
                        <th scope="col">Fondo de pension</th>
                        <th scope="col">Fecha ingreso</th>
                    </tr>
                </thead>
                <tbody>
                {guardas.length === 0 ? 'No hay Guardas' : (
                    guardas.map(guarda=>(
                        <Guarda
                            key={guarda.id}
                            guarda={guarda}
                        
                        />
                    ))
                )}
                </tbody>
                 
          </table>
          </div>
          </div>
      </Fragment>
        
      );
}
 
export default Guardas;