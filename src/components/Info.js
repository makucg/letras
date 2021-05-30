import React from 'react';

const Info = ({informacion}) => {

    if(Object.keys(informacion).length === 0) return null;

    const { strArtistThumb, strBiographyES, strBiographyEN, strArtist } = informacion;

    return ( 
        <div className="card border-light">
            <h3 class="card-header bg-secondary text-light fw-bold">{strArtist}</h3>
            <img src={strArtistThumb} className="card-img-top" alt={strArtist} />
            <div className="card-body">
                <h2 className="card-title">Biografía</h2>
                <p className="card-text">{strBiographyES === '' ? strBiographyEN : strBiographyES}</p>
            </div>
            <div className="card-body">
                <a href={`https://${informacion.strFacebook}`} target="_blank" rel="noopener noreferrer" className="card-link">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href={`https://${informacion.strTwitter}`} target="_blank" rel="noopener noreferrer" className="card-link">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={`${informacion.strLastFMChart}`} target="_blank" rel="noopener noreferrer" className="card-link">
                    <i className="fab fa-lastfm"></i>
                </a>
            </div>
        </div>
     );
}
 
export default Info;

/*


                
                

*/