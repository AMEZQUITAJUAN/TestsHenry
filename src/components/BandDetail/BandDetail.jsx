/* 8️⃣ ***COMPONENTE BANDDETAIL*** 8️⃣

Implementar el componente BandDetail. En este ejercicio tendrás que renderizar las diferentes propiedades 
de la banda.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que despachar una action con el "id" de la banda cuando se monta el componente. Luego, traer esa 
información de tu estado global.

🟢 Tendrás que renderizar algunos datos de la banda correspondiente.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗Tienes que usar hooks.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      -'React.useState' - 'React.useEffect';
*/


import React from 'react';
import { getBand } from './actions.js';

const BandDetail = ({ match }) => {
  const [band, setBand] = React.useState({
    id: match.params.id,
    name: '',
    genre: '',
    albums: [],
    members: []
  });

  React.useEffect(() => {
    const bandData = getBand(band.id);
    setBand(bandData);
  }, [band.id]);
   return (
      <div>
        <h2>{band.name}</h2>
        <p>Género: {band.genre}</p>
        <p>Álbumes:</p>
        <ul>
          {band.albums.map((album) => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
        <p>Miembros:</p>
        <ul>
          {band.members.map((member) => (
            <li key={member.id}>{member.name}</li>
          ))}
        </ul>
      </div>
    );
};

export default BandDetail;
