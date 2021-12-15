import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';


//importar action de redux
import {crearNuevoDotacionAction} from '../actions/dotacionAction';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaAction';

const NuevaDotacion = () => {

    //state del componenente que tomara los valores de los campos y los guardara
    const [nombre, setNombre]=useState('');
    const [camisa, setCamisa]=useState('');
    const [pantalon, setPantalon]=useState('');
    const [gorra, setGorra]=useState('');
    const [zapatos, setZapatos]=useState('');
    const [corbata, setCorbata]=useState('');
    const [chaqueta, setChaqueta]=useState('');
    const [oberol, setOberol]=useState('');
    const [fecha, setFecha]=useState('');
    


    //utlizar use dispatch y te crea una funcion
    const dispatch = useDispatch();
    const history = useNavigate();

    //acceder al state del store o sacarlos del state para mostrarlo en interfaz
    const cargando = useSelector(state=> state.dotacion.loading);
    const error = useSelector(state=>state.dotacion.error);
    const alerta = useSelector(state=>state.alerta.alerta);

    //mandar a llamar el action de productoAction
    const agregarDotacion=(dotacion)=> dispatch(crearNuevoDotacionAction(dotacion));

    //cuando el usuario haga submit osea agregar
    const submitNuevaDotacion= e => {
        e.preventDefault();

        if(nombre.trim() === '' || camisa.trim() === '' || pantalon.trim() === '' || gorra.trim() === '' 
        || corbata.trim() ==='' || chaqueta.trim() ==='' || oberol.trim() ===''){

            const respuesta = {
                msg: 'Todos los campor son obligatorios',
                
            }

            dispatch (mostrarAlerta(respuesta));
            return;
        }

        //si no hay errores
        dispatch(ocultarAlertaAction());

        //crear el nuevo guarda
        agregarDotacion({
            nombre,
            camisa,
            pantalon,
            gorra,
            zapatos,
            corbata,
            chaqueta,
            oberol,
            fecha
        });

        //una vez se agregue el objeto se redirige al listado
        history('/dotaciones');
    }
    return (            
         <div className='flex flex-row min-h-screen justify-center items-center'>
         <div>
                <h2>
                            Agregar Nuevo Dotacion
                        </h2>
                        
                        {alerta ? <p>{alerta.msg}</p> :  null}
                    
                    <form
                            onSubmit={submitNuevaDotacion}
                    >
                        <div>
                            <label>Nombre</label>
                            <input
                                type="text"                                                              
                                name="nombre"
                                value={nombre}
                                onChange={e=>setNombre(e.target.value)}
                            />
                        </div>
                    <div>
                            <label>Camisa</label>
                            <input
                                type="text"                                                             
                                name="camisa"
                                value={camisa}
                                onChange={e=>setCamisa(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Pantalon </label>
                            <input
                                type="text"                                                              
                                name="pantalon"
                                value={pantalon}
                                onChange={e=>setPantalon(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Gorra</label>
                            <input
                                type="text"                                                                
                                name="gorra"
                                value={gorra}
                                onChange={e=>setGorra(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Zapatos</label>
                            <input
                                type="text"                                                              
                                name="zapatos"
                                value={zapatos}
                                onChange={e=>setZapatos(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Corbata</label>
                            <input
                                type="text"                                                               
                                name="corbata"
                                value={corbata}
                                onChange={e=>setCorbata(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Chaqueta</label>
                            <input
                                type="text"                                                            
                                name="chaqueta"
                                value={chaqueta}
                                onChange={e=>setChaqueta(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Oberol</label>
                            <input
                                type="text"                                                           
                                name="oberol"
                                value={oberol}
                                onChange={e=>setOberol(e.target.value)}
                            />
                        </div>
                        <div >
                            <label>Fecha de entrega</label>
                            <input
                                type="date"                                
                                placeholder="cantidad"
                                nombre="fecha"
                                value={fecha}
                                onChange={e=>setFecha(e.target.value)}
                           />
                           </div>
                             <button
                            type="submit"
                            >
                                Guardar
                          </button>
                        
                    </form>
                    {cargando ? <p>Cargando..</p> : null}
                    {error ? <p>Hubo un error</p> : null}
                    <nav>
                        <div >
                            <h1><Link to={'/dotacion'} >Cancelar</Link></h1>
                        </div>

            
                  </nav>
                </div>
                        
            </div>
        
             );
}
 
export default NuevaDotacion;