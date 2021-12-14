import React from 'react';
import {Routes} from 'react-router';

//importaciones redux
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import store from './store';
import Principal from './components/Principal';
import Guardas from './components/Guardas';
import NuevoGuarda from './components/NuevoGuarda';
import NuevaDotacion from './components/nuevaDotacion';
import Dotaciones from './components/Dotaciones';
import EditarGuarda from './components/EditarGuarda';
import EditarDotacion from './components/editarDotacion';
import Header from './components/Header'



function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header/>
      <Routes>
          <Route exact path="/" element={<Principal/>}  /> 
          <Route exact path="/guarda" element={<Guardas/>}  />
          <Route exact path="/guarda/nuevo" element={<NuevoGuarda/>} />
          <Route exact path="/dotacion" element={<NuevaDotacion/>} />
          <Route exact path="/dotaciones" element={<Dotaciones/>} />
          <Route exact path="/guarda/editar/:id" element={<EditarGuarda/>} />
          <Route exact path="/dotacion/editar/:id" element={<EditarDotacion/>} />
          
          
          
      </Routes>
      </Provider>
    </Router>
  );
}

export default App;
