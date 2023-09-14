/* 7️⃣ ***COMPONENTE BANDCARD*** 7️⃣


Implementar el componente BandCard.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que renderizar una serie de etiquetas HTML que incluyan texto y propiedades.
🟢 Tendrás que despachar una action para eliminar una banda específica.

IMPORTANTE
❗Este componente debe ser de funcional.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/
import { deleteBand } from './actions.js';
import './bandCard.css';
import React from 'react';

const BandCard = ({ band }) => {
   return  (
      <div className='card'>
        <h2>{band.name}</h2>
        <p>{band.genre}</p>
        <button onClick={() => deleteBand(band.id)}>Eliminar</button>
      </div>
    );
};

export default BandCard;
