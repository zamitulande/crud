import{
    AGREGAR_GUARDA,
    AGREGAR_GUARDA_EXITO,
    AGREGAR_GUARDA_ERROR,
    COMENZAR_DESCARGA_GUARDA,
    DESCARGA_GUARDA_EXITO,
    DESCARGA_GUARDA_ERROR,
    OBTENER_GUARDA_ELIMINAR,
    GUARDA_ELIMINADO_EXITO,
    GUARDA_ELIMINADO_ERROR,
    OBTENER_GUARDA_EDITAR,
    GUARDA_EDITADO_EXITO,
    GUARDA_EDITADO_ERROR
   

} from '../types';


//cada reducer tiene su propio state
const initialState={
    guardas:[],
    error: null,
    loading: false,
    guardaeliminar: null,
    guardaEditar: null

}
export default function foo(state = initialState, action){
    switch(action.type){
        case AGREGAR_GUARDA:
        case COMENZAR_DESCARGA_GUARDA:
            return{
                ...state,
                loading:action.payload
            }
        case AGREGAR_GUARDA_EXITO:
            return{
                ...state,
                loading: false,
                guardas:[...state.guardas, action.payload]
            }
        case AGREGAR_GUARDA_ERROR:
        case DESCARGA_GUARDA_ERROR:
        case GUARDA_ELIMINADO_ERROR:
        case GUARDA_EDITADO_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_GUARDA_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                guardas: action.payload
            }
        case OBTENER_GUARDA_ELIMINAR:
            return{
                ...state,
                guardaeliminar: action.payload
            }
        case GUARDA_ELIMINADO_EXITO:
            return{
                ...state,
                guardas: state.guardas.filter(guardas=> guardas.id !== state.guardaeliminar), //esta lina saca el id eliminado y deja los que no se eliminaron
                guardaeliminar: null //este null regresa al state original
            }
        case OBTENER_GUARDA_EDITAR:
            return{
                ...state,
                guardaEditar: action.payload
            }
        case GUARDA_EDITADO_EXITO:
            return{
                ...state,
                guardaEditar: null,
                guardas:state.guardas.map(
                    guarda=> guarda.id === action.payload.id ? guarda = action.payload : guarda
                )
            }
        
        default:
            return state;
    }
}