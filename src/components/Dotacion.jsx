import React from 'react';
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
//redux
import { useDispatch } from 'react-redux';
import { borrarDotacionAction, obtenerDotacionEditar } from '../actions/dotacionAction';


const Dotacion = ({dotacion}) => {

    const {nombre, camisa, pantalon, gorra, corbata, chaqueta, fecha, id} = dotacion;

    const dispatch = useDispatch();
    //habilitar history para redireccion
    const navigate= useNavigate();

    //confirmar si desea eliminar
    const confirmarEliminarDotacion = id => {

        Swal.fire({
            title: 'Estas seguro?',
            text: "Una dotacion que se elimina no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            calcelButtonText:'Cancelar'
          }).then((result) => {
            if (result.value) {

                //pasar al action
             dispatch(borrarDotacionAction(id));

             
            }
          });
    }

    //funcion que redireige de forma programda
    const redireccionarEdicion = (dotacion) =>{
        dispatch(obtenerDotacionEditar(dotacion))
        navigate(`/dotacion/editar/${id}`)
    }
    return ( 
        <tr>
            <td>{nombre}</td>
            <td>{camisa}</td>
            <td>{pantalon}</td>
            <td>{gorra}</td>
            <td>{corbata}</td>
            <td>{chaqueta}</td>
            <td>{fecha}</td>
            <td >
                <button
                    className='text-gray-800 bg-transparent text-center border border-solid border-gray-800 hover:bg-gray-800 hover:text-white active:bg-gray-800 font-bold uppercase px-4 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-l'
                    type="button"
                    onClick={()=>redireccionarEdicion(dotacion)}
                   >
                     Editar</button>
                <button
                    className='text-red-400 bg-transparent text-center border border-solid border-red-400 hover:bg-red-400 hover:text-white active:bg-gray-800 font-bold uppercase px-4 py-1 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 text-l'
                    type="button"
                    onClick={()=> confirmarEliminarDotacion(id)}
                    >Eliminar</button>
            </td>

        </tr>
     );
}
 
export default Dotacion;