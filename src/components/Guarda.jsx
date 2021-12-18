import React from 'react'
import { useNavigate, Link} from 'react-router-dom';
import Swal from 'sweetalert2';


//redux
import { useDispatch } from 'react-redux';
import { borrarGuardaAction, obtenerGuardaEditar } from '../actions/guardaAction';

const Guarda = ({guarda}) => {

    const {cedula, nombre, eps, fondo, fecha, id} = guarda;

    const dispatch = useDispatch();
    //habilitar history para redireccion
    const history = useNavigate();

   

    //confirmar si dese aliminar el id sellecionado
    const confirmarEliminarGuarda=id => {

            //preguntar al usuario
           Swal.fire({
                title: 'Estas seguro?',
                text: "Un guarda que se elimina no se puede recuperar!",
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar!',
                calcelButtonText:'Cancelar'
              }).then((result) => {
                if (result.value) {

                    //pasar al action
                 dispatch(borrarGuardaAction(id));

                 
                }
              });

            
    }

    //funcio que redirige de forma programada
    const redireccionarEdicion = (guarda) =>{
            dispatch(obtenerGuardaEditar(guarda));
            history(`editar/${guarda.id}`)
    }
    return (
        <>
        <tr>
            <td>{cedula}</td>
            <td>{nombre}</td>
            <td>{eps}</td>
            <td>{fondo}</td>
            <td>{fecha}</td>
            <td>
                <button   
                    className='text-gray-800 bg-transparent text-center border border-solid border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-800 font-bold uppercase px-4 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-l'      
                    type="button"
                    onClick={()=>redireccionarEdicion(guarda)}
                    >Editar</button>
                <button
                    className='text-red-400 bg-transparent text-center border border-solid border-red-400 hover:bg-red-400 hover:text-white active:bg-gray-800 font-bold uppercase px-4 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-l'    
                    type="button"                    
                    onClick={()=>confirmarEliminarGuarda(id)}
                    >Eliminar</button>
            </td>
        </tr>
        </>
      );
}
 
export default Guarda;