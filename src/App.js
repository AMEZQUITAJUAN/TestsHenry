/* 1️⃣ ***COMPONENTE APP*** 1️⃣
Implementar el componente App. En este ejercicio tendrás que crear diferentes rutas para algunos componentes. 
¡Ten en cuenta los nombres y las especificaciones de cada uno!

REQUISITOS
🟢 El componente Nav debe renderizarse en todas las rutas.
🟢 El componente Home debe renderizarse en la ruta "/".
🟢 El componente BandDetail debe renderizarse en la ruta "/band/:id".
🟢 El componente CreateBand debe renderizarse en la ruta "/band/create".
*/

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import BandDetail from "./BandDetail";
import CreateBand from "./CreateBand";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/band/create" component={CreateBand} />
        <Route exact path="/band/:id" component={BandDetail} />
      </div>
    </Router>
  );
};

export default App;
