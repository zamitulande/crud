import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from  'react-redux';
import { editarGuardaAction } from '../actions/guardaAction';
import { useNavigate } from 'react-router';

const EditarGuarda = () => {

    const history= useNavigate();

    const dispatch = useDispatch();

    // nuevo state de guardas
    const [guarda, setGuarda] = useState({
        cedula:'',
        nombre:'',
        eps:'',
        fondo:'',
        fecha:''
    })

    //guarda a editar
    const guardaeditar=useSelector(state => state.guardas.guardaEditar);

    // llenar el state automaticamente
    useEffect(() => {
        setGuarda(guardaeditar);
      
    }, [guardaeditar]);

    //leer los datos del formulario
    const onChangeFormulario=e=>{
        setGuarda({
            ...guarda,
            [e.target.name] : e.target.value
        })
    }

     //aplicar desttructuring
     const {cedula, nombre, eps, fondo, fecha}= guarda;

     const submitEditarGuarda= e =>{
         e.preventDefault();

         dispatch (editarGuardaAction(guarda)) ;
         history('/guarda');
     }
    
    return ( 
        <div>
        <div>
            <div>
                <div>
                    <h2>
                        Editar Informacion del Guarda
                    </h2>
                    <form
                        onSubmit={submitEditarGuarda}
                    >
                    <div>
                            <label>Cedula</label>
                            <input
                                type="text"                               
                                placeholder="Cedula del Guarda"
                                name="cedula"
                                value={cedula}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div>
                            <label>Nombre </label>
                            <input
                                type="text"                                
                                placeholder="Nombre del  Guarda"
                                name="nombre"
                                value={nombre}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div>
                            <label>EPS</label>
                            <input
                                type="text"                                
                                placeholder="EPS del Guarda"
                                name="eps"
                                value={eps}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div>
                            <label>Fondo Pension</label>
                            <input
                                type="text"                              
                                placeholder="Fondo Pensio del Guarda"
                                name="fondo"
                                value={fondo}
                                onChange={onChangeFormulario}
                            />
                        </div>
                        <div>
                            <label>Fecha de Ingreso</label>
                            <input
                                type="date"                                
                                placeholder="Fondo Pension del Guarda"
                                name="fecha"
                                value={fecha}
                                onChange={onChangeFormulario}
                            />
                        </div>
                    
                        <button
                            type="submit"
                            >
                                Guardar Cambios
                          </button>
                    </form>
                </div>
                <nav>
            <div >
                <h1><Link to={'/guarda'} >Cancelar</Link></h1>
            </div>

            
        </nav>
                         
            </div>
        </div>
    </div>
     );
}
 
export default EditarGuarda;