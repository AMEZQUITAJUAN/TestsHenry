/* 6️⃣ ***COMPONENTE CREATEBAND*** 6️⃣

Implementar el componente CreateBand. Este consistirá en un formulario controlado con estados de react.
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Aquí tendrás que renderizar una serie de elementos HTML con distintos atibutos e información dentro.

🟢 Debes manejar cada uno de los inputs de tu formulario mediante un estado local llamado "input".

🟢 La información del formulario se debe despachar al estado global cuando se hace un submit.

🟢 Debes manejar los errores que pueden tener los inputs del formulario.

IMPORTANTE
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
❗Este componente debe ser funcional.
❗¡Puedes implementar el manejo de errores como mejor prefieras! Sólo recuerda renderizar el error apropiado en cada caso.
❗NO hacer un destructuring de los hooks, debes utilizarlos con la siguiente forma:
      - 'React.useState'
      - 'React.useEffect'
*/

import React, { useState } from 'react';

const CreateBand = () => {
  const [input, setInput] = useState({ name: '', genre: '', year: '' });
  const [error, setError] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí despachamos la información del formulario al estado global
    // utilizando las actions importadas como Object Modules.
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={input.name}
          onChange={handleInputChange}
        />
        {error.name && <span>{error.name}</span>}
      </div>
      <div>
        <label htmlFor="genre">Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={input.genre}
          onChange={handleInputChange}
        />
        {error.genre && <span>{error.genre}</span>}
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={input.year}
          onChange={handleInputChange}
        />
        {error.year && <span>{error.year}</span>}
      </div>
      <button type="submit">Create Band</button>
    </form>
  );
};

export default CreateBand;

