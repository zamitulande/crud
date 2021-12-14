import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from  'react-redux';
import { editarDotacionAction } from '../actions/dotacionAction';
import { useNavigate } from 'react-router';

const EditarDotacion = () => {

    const dispatch=useDispatch();
    const history = useNavigate();

    
    // nuevo state de dotacion
    const [ dotacion, setDotacion] = useState({
        nombre:'', 
        camisa:'', 
        pantalon:'', 
        gorra:'', 
        corbata:'', 
        chaqueta:'', 
        fecha:'', 
        oberol:'',
        zapatos: '',
        id: ''
    })

    // producto a editar
    const dotacioneditar = useSelector(state => state.dotacion.dotacioneditar);
    
    // llenar el state automaticamente
    useEffect( () => {
        setDotacion(dotacioneditar);
    }, [dotacioneditar]);

    // Leer los datos del formulario
    const onChangeFormulario = e => {
        setDotacion({
            ...dotacion,
            [e.target.name] : e.target.value
        })
    }


    const {nombre, camisa, pantalon, gorra, corbata, chaqueta, fecha, oberol, zapatos} = dotacion;

    const submitEditarDotacion = e => {
        e.preventDefault();

        dispatch (editarDotacionAction(dotacion));

        history('/dotaciones');
        
    }
   

    return (
        <div>
        <div>
            <div>
                <div>
                    
                    <form
                    
                        onSubmit={submitEditarDotacion}
                    >

                    <div>
                            <label>Nombre</label>
                            <input
                                type="text"                                                               
                                name="nombre"
                                value={nombre}
                                onChange={onChangeFormulario}
                                
                            />
                        </div>
                    <div>
                            <label>Camisa</label>
                            <input
                                type="text"                                                              
                                name="camisa"
                                value={camisa}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div>
                            <label>Pantalon </label>
                            <input
                                type="text"                                                               
                                name="pantalon"
                                value={pantalon}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div>
                            <label>Gorra</label>
                            <input
                                type="text"                                                            
                                name="gorra"
                                value={gorra}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div>
                            <label>Zapatos</label>
                            <input
                                type="text"                                                               
                                name="zapatos"
                                value={zapatos}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div>
                            <label>Corbata</label>
                            <input
                                type="text"                                                                
                                name="corbata"
                                value={corbata}
                               onChange={onChangeFormulario}
                            />
                        </div>
                        <div>
                            <label>Chaqueta</label>
                            <input
                                type="text"                                                                
                                name="chaqueta"
                                value={chaqueta}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div>
                            <label>Oberol</label>
                            <input
                                type="text"                                                              
                                name="oberol"
                                value={oberol}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div>
                            <label>Fecha de entrega</label>
                            <input
                                type="date"                                
                                placeholder="cantidad"
                                name="fecha"
                                value={fecha}
                               onChange={onChangeFormulario}
                                
                           />
                           </div>
                             <button
                            type="submit"
                            >
                                Guardar Edicion
                          </button>
                        
                    </form>
                    <nav>
                        <div >
                            <h1><Link to={'/dotaciones'} >Cancelar</Link></h1>
                        </div>

            
                  </nav>
                </div>
                        
            </div>
        </div>
    </div>
        
             );
}
 
export default EditarDotacion;