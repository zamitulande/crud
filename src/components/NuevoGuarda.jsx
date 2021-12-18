import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


//importar action de redux
import {crearNuevoGuardaAction} from '../actions/guardaAction';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaAction';

const NuevoGuarda = () => {

    //state del componenente que tomara los valores de los campos y los guardara
    const [cedula, setCedula]=useState('');
    const [nombre, setNombre]=useState('');
    const [eps, setEps]=useState('');
    const [fondo, setFondo]=useState('');
    const [fecha, setFecha]=useState('');
    


    //utlizar use dispatch y te crea una funcion
    const dispatch = useDispatch();
    const history = useNavigate();

    //acceder al state del store o sacarlos del state para mostrarlo en interfaz
    const cargando = useSelector(state=> state.guardas.loading);
    const error = useSelector(state=>state.guardas.error);
    const alerta = useSelector(state=>state.alerta.alerta);

    //mandar a llamar el action de productoAction
    const agregarGuarda=(guarda)=> dispatch(crearNuevoGuardaAction(guarda));

    //cuando el usuario haga submit osea agregar
    const submitNuevoGuarda= e => {
        e.preventDefault();

        //validar formulario
        if(cedula.trim() === '' || nombre.trim() === '' || eps.trim() === '' || fondo.trim() ===''){

            const respuesta = {
                msg: 'Todos los campor son obligatorios'
                
            }

            dispatch (mostrarAlerta(respuesta));
            return;
        }

        //si no hay errores
        dispatch(ocultarAlertaAction());

        //crear el nuevo guarda
        agregarGuarda({
            cedula,
            nombre,
            eps,
            fondo,
            fecha
        });

        //una vez se agregue el objeto se redirige al listado
        history('/guarda');
    }

    return ( 
        <>
              <div className='container mx-auto border-2 my-5'> 
              <div className='mt-20 text-3xl' >
                     <h1 className='text-gray-800 bg-transparent text-center border border-solid border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-800 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 text-3xl'><Link to={'/'} >Volver a Inicio</Link></h1>
                </div>
                <h2 className='text-center mt-20 text-3xl'>
                            Agregar Nuevo Guarda
                        </h2>
                <div className='flex flex-row mt-20 justify-center items-center'>
             
                    <div >
                    
                      

                        {alerta ? <p className={alerta.classes}>{alerta.msg}</p> :  null}
                        
                        <form
                            onSubmit={submitNuevoGuarda}
                        >
                            <div className='mb-5'>
                        <div>
                                <label>Cedula</label>
                                <input
                                    type="text"                                    
                                    placeholder="Cedula del Guarda"
                                    name="cedula"
                                    value={cedula}
                                    onChange={e=>setCedula(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Nombre </label>
                                <input
                                    type="text"                                   
                                    placeholder="Nombre del  Guarda"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e=>setNombre(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>EPS</label>
                                <input
                                    type="text"                                    
                                    placeholder="EPS del Guarda"
                                    name="eps"
                                    value={eps}
                                    onChange={e=>setEps(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Fondo Pension</label>
                                <input
                                    type="text"                                   
                                    placeholder="Fondo Pensio del Guarda"
                                    name="fondo"
                                    value={fondo}
                                    onChange={e=>setFondo(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Fecha de Ingreso</label>
                                <input
                                    type="date"                                   
                                    placeholder="Fondo Pension del Guarda"
                                    name="fecha"
                                    value={fecha}
                                    onChange={e=>setFecha(e.target.value)}
                                />
                            </div>
                            </div>
                            <div className='text-center mb-5'>
                            <button
                                className='text-gray-800 bg-transparent text-center border border-solid border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-800 font-bold uppercase px-4 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-l'
                                type="submit"                              >
                                    Agregar
                                </button>
                                </div>
                                                           
                        </form>                                                
                        {cargando ? <p>Cargando..</p> : null}
                        {error ? <p>Hubo un error</p> : null}
                        <nav>
                        <div >
                            <h1 
                                className='text-gray-800 bg-transparent text-center border border-solid border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-800 font-bold uppercase px-4 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-l'
                            ><Link to={'/dotaciones'} >Cancelar</Link></h1>
                        </div>

            
                  </nav>
                    </div>
                    
                </div>
             </div>
       </>  
     );
}
 
export default NuevoGuarda;