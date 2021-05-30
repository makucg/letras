import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion';
import Info from './components/Info';

function App() {

  const [busquedaLetra, guargarBusquedaLetra] = useState({});
  const [error, guardarError] = useState(false);
  const [letra, guardarLetra] = useState('');
  const [info, guardarInfo] = useState('');

  useEffect(() => {
    if(Object.keys(busquedaLetra).length === 0) return;
    const consultarAPI= async() => {
      const {artista, cancion} = busquedaLetra;
      const url= `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2= `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      axios.all([
        axios.get(url),
        axios.get(url2)
      ])
      .then(axios.spread((letra, informacion) => {
        guardarLetra(letra.data.lyrics);
        guardarInfo(informacion.data.artists[0]);
      }))
      .catch(error => {
        guardarError(true);
      });
      guardarError(false);
    }
    consultarAPI();
  },[busquedaLetra]);

  return (
    <Fragment>
      <Formulario 
        guargarBusquedaLetra={guargarBusquedaLetra}
      />
      {
          error 
          ? <p className="alert alert-danger text-center mt-2 p-2">Ooooops! algo ha salido mal</p>
          : null
      }
      <div className="mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info informacion={info} />
          </div>
          <div className="col-md-6">
            <Cancion letra= {letra} />            
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
