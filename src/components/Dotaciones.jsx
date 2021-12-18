import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Dotacion from './Dotacion';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerDotacionAction } from '../actions/dotacionAction';


const Dotaciones = () => {

    const dispatch= useDispatch();

    useEffect(() => {

        //consultar a la api
        const cargarDotacion=()=> dispatch(obtenerDotacionAction());
        cargarDotacion();
       
    }, [dispatch])

    //obtener el state que se obtubo con el codigo de los reducers y el action
    const dotaciones = useSelector(state => state.dotacion.dotacion);
    const error = useSelector(state => state.dotacion.error);
    const cargando = useSelector(state =>state.dotacion.loading);
    return (
      <Fragment>
          <div className='mt-20 text-3xl' >
                     <h1 className='text-gray-800 bg-transparent border border-solid border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-800 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-3xl text-center'><Link to={'/'} >Volver a Inicio</Link></h1>
           </div>
           <div className='flex flex-row mt-60 justify-center items-center'>
          <Link to={"/dotacion"}
                className='text-gray-800 bg-transparent border border-solid border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-800 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-l'
               >Nueva dotacion</Link>
          <h2>Dotaciones Entregadas</h2>
          {error ? <p>Hubo un Error</p> : null }
          {cargando ? <p>Cargando...</p> : null }

          <table>
                <thead>
                    <tr>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">Camisa</th>
                        <th scope="col">Pantalon</th>
                        <th scope="col">Gorra</th>
                        <th scope="col">Corbata</th>
                        <th scope="col">Chaqueta</th>
                        <th scope="col">Fecha</th>

                    </tr>
                </thead>
                <tbody>
                {dotaciones.length === 0 ? 'No hay Guardas' : (
                    dotaciones.map(dotacion=>(
                        <Dotacion
                            key={dotacion.id}
                            dotacion={dotacion}
                        
                        />
                    ))
                )}
                </tbody>
                 
          </table>
          </div>
         
      </Fragment>
        
      );
}
 
export default Dotaciones;