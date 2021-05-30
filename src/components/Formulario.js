import React, { useState } from 'react';

const Formulario = ({guargarBusquedaLetra}) => {

    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    const [error, guardarError] = useState(false);

    const { artista, cancion } = busqueda;

    //leer imputs
    const actualizarState = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });  
    }

    const buscarInformacion = (e) => {
        e.preventDefault();

        if (artista.trim() === '' || cancion.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
        guargarBusquedaLetra(busqueda);
    }
    

    return ( 
        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center float-none">Buscador letras canciones</legend>

                            <div className ="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artitsta</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre artista"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre canción"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            {
                                error 
                                ? <p className="alert alert-danger text-center mt-2 p-2">Todos los campos son obligatorios</p>
                                : null
                            }
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end pt-2">
                                <button className="btn btn-secondary" type="submit">Buscar</button>
                            </div>
                            
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;