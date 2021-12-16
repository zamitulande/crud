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
          <div className='mt-20 text-3xl' >
                     <h1 className='text-emerald-500 bg-transparent border text-center border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-3xl'><Link to={'/'} >Volver a Inicio</Link></h1>
           </div>
           <div className='flex flex-row mt-60 justify-center items-center'>
          <Link to={"/guarda/nuevo"}
                className='text-emerald-500 bg-transparent border text-center border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-3xl'
                >Nuevo Guarda &#43;</Link>
          <h2>Listado de Guardas</h2>

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
      </Fragment>
        
      );
}
 
export default Guardas;