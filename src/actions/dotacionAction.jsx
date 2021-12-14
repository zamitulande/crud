import {
    AGREGAR_DOTACION,
    AGREGAR_DOTACION_EXITO,
    AGREGAR_DOTACION_ERROR,

    COMENZAR_DESCARGA_DOTACION,
    DESCARGAR_DOTACION_EXITO,
    DESCARGAR_DOTACION_ERROR,

    OBTENER_DOTACION_ELIMINAR,
    DOTACION_ELIMINADO_EXITO,
    DOTACION_ELIMINADO_ERROR,

    COMENZAR_EDICION_DOTACION,
    OBTENER_DOTACION_EDITAR,
    DOTACION_EDITADO_EXITO
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';


            //CREAR DOTACION

//crear nueva dotacion
export function crearNuevoDotacionAction(dotacion){
    return async (dispatch)=>{
        dispatch(agregarDotacion());

        try {
            //insertar datos en la API  
            await clienteAxios.post('/dotacion', dotacion)

            //si todo sale  bien se actualiza el state
            dispatch(agregarDotacionExito(dotacion));

            //alerta de alert2
            Swal.fire(
                'Correcto',
                'La dotacion se agrego Correctamente',
                'success'
            )
        } catch (err) {
            console.log(err);
            //si hay un error se cambia el state    
            dispatch(agregarDotacionError(true));

            //alerta de error de alert2
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}
const agregarDotacion=()=>({
    type: AGREGAR_DOTACION,
    payload: true
});
//si se guarda bien la dotacion  en la base de datos
const agregarDotacionExito = dotacion => ({
    type: AGREGAR_DOTACION_EXITO,
    payload: dotacion
})

//si no se guarda bien, pasa un error
const agregarDotacionError = estado =>({
    type: AGREGAR_DOTACION_ERROR,
    payload: estado

});


   //OBTNER DOTACION EN LA API

//fincion que descarga las dotaciones de la base de datos
export function obtenerDotacionAction(){
    return async (dispatch)=>{
        dispatch(descargarDotacion());

        //hacer la consulta a al api
        try {
            const respuesta = await clienteAxios.get('/dotacion');
            dispatch(descargaDotacionExitosa(respuesta.data));
        } catch (error) {
            console.log(error);
            dispatch(descargaDotacionError());
        }
    }
}
const descargarDotacion=()=>({
    type:COMENZAR_DESCARGA_DOTACION,
    payload: true
})
const descargaDotacionExitosa = dotacion =>({
        type: DESCARGAR_DOTACION_EXITO, 
        payload: dotacion
})
const descargaDotacionError = ()=>({
    type: DESCARGAR_DOTACION_ERROR,
    payload: true
})


 //ELIMINAR DOTACION DE LA API


//selecciona y elimina una dotacion
export function borrarDotacionAction(id){
    return async (dispatch)=>{
        dispatch(obtenerDotacionEliminar(id));
        
        try {
            await clienteAxios.delete(`/dotacion/${id}`);
            dispatch(eliminarDotacionExito());
             //si se elimina, mostrar la alerta
             Swal.fire(
                'Eliminado',
                'La dotacion se elimino correctamente.',
                'success'
              )
        } catch (error) {
            console.log(error);
            dispatch(eliminarDotacionError());
        }
    }
}
const obtenerDotacionEliminar = id => ({
    type: OBTENER_DOTACION_ELIMINAR,
    payload: id
});
const eliminarDotacionExito = id => ({
    type: DOTACION_ELIMINADO_EXITO
     
});
const eliminarDotacionError = id => ({
    type : DOTACION_ELIMINADO_ERROR,
    payload: true
});


     //EDITAR DOTACION DE LA API

//colocar dotacion en edicion
export function obtenerDotacionEditar (dotacion){
    return(dispatch)=>{
        dispatch(obtenerDotacionActionEditar(dotacion))
    }
}
const obtenerDotacionActionEditar = dotacion => ({
    type: OBTENER_DOTACION_EDITAR,
    payload: dotacion
})



   //editt el registro de la dotacion en la api

   export function editarDotacionAction(dotacion) {
    return async (dispatch) => {
        dispatch( editarDotacion() );

        try {
            await clienteAxios.put(`/dotacion/${dotacion.id}`, dotacion);    
            dispatch(editarDotacionExito(dotacion));
            //si se elimina, mostrar la alerta
            Swal.fire(
                'Editado',
                'La dotacion se Edito correctamente.',
                'success'
              )
        } catch (error) {
            console.log(error);
           
        }
    }
}
const editarDotacion = () => ({
    type: COMENZAR_EDICION_DOTACION
});
const editarDotacionExito= dotacion=> ({
    type: DOTACION_EDITADO_EXITO,
    payload: dotacion
})
