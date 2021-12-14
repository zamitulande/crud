import{
    AGREGAR_DOTACION,
    AGREGAR_DOTACION_EXITO,
    AGREGAR_DOTACION_ERROR,
    COMENZAR_DESCARGA_DOTACION,
    DESCARGAR_DOTACION_ERROR,
    DESCARGAR_DOTACION_EXITO,
    OBTENER_DOTACION_ELIMINAR,
    DOTACION_ELIMINADO_EXITO,
    DOTACION_ELIMINADO_ERROR,
    OBTENER_DOTACION_EDITAR,
    DOTACION_EDITADO_EXITO,
    DOTACION_EDITADO_ERROR

} from '../types';


//cada reducer tiene su propio state
const initialState={
    dotacion:[],
    error: null,
    loading: false,
    dotacioneliminar:null,
    dotacioneditar: null
}
export default function foo(state = initialState, action){
    switch(action.type){
        case AGREGAR_DOTACION:
        case COMENZAR_DESCARGA_DOTACION:
            return{
                ...state,
                loading:action.payload
            }
        case AGREGAR_DOTACION_EXITO:
            return{
                ...state,
                loading: false,
                dotacion:[...state.dotacion, action.payload]
            }
        case AGREGAR_DOTACION_ERROR:
        case DESCARGAR_DOTACION_ERROR: 
        case DOTACION_ELIMINADO_ERROR: 
        case DOTACION_EDITADO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGAR_DOTACION_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                dotacion: action.payload
            }
        case OBTENER_DOTACION_ELIMINAR:
            return{
                ...state,
                dotacioneliminar: action.payload
            }
        case DOTACION_ELIMINADO_EXITO:
            return{
                ...state,
                dotacion: state.dotacion.filter(dotacion=> dotacion.id !== state.dotacioneliminar), //esta lina saca el id eliminado y deja los que no se eliminaron
                dotacioneliminar: null //este null regresa al state original
            }
        case OBTENER_DOTACION_EDITAR:
            return{
                ...state,
                dotacioneditar: action.payload
            }
        case DOTACION_EDITADO_EXITO:
            return{
                ...state,
                dotacioneditar: null,
                dotacion: state.dotacion.map(
                    dotacion => dotacion.id === action.payload.id ? dotacion = action.payload : dotacion
                )
            }

        default:
            return state;
    }
}