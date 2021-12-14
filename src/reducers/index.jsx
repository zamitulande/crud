import {combineReducers} from 'redux';
import dotacionReducers from './dotacionReducers';
import guardasReducers from './guardasReducers';
import alertaReducers from './alertaReducers';

export default combineReducers({
    guardas: guardasReducers,
    dotacion : dotacionReducers,
    alerta: alertaReducers
});