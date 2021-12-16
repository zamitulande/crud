import React from 'react'
import { useNavigate} from 'react-router-dom';
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
                 <div className='mt-20 text-3xl' >
                     <h1 className='text-emerald-500 bg-transparent tex-center border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-3xl'><Link to={'/'} >Volver a Inicio</Link></h1>
                </div>
        <tr>
            <td>{cedula}</td>
            <td>{nombre}</td>
            <td>{eps}</td>
            <td>{fondo}</td>
            <td>{fecha}</td>
            <td>
                <button                     
                    type="button"
                    onClick={()=>redireccionarEdicion(guarda)}
                    >Editar</button>
                <button
                    type="button"                    
                    onClick={()=>confirmarEliminarGuarda(id)}
                    >Eliminar</button>
            </td>
        </tr>
        </>
      );
}
 
export default Guarda;