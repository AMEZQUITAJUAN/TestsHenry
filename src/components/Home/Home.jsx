/*5️⃣ ***COMPONENTE HOME*** 5️⃣

Implementar el componente Home. Este deberá renderizar una lista de eventos (Cards) que contengan la 
información consumida directamente del estado global de Redux. 
📢¡Sigue las instrucciones de los tests!📢

REQUISITOS
🟢 Tendrás que conectar el componente con el estado global de Redux mediante dos funciones: mapStateToProps y 
mapDispatchToProps.

🟢 Tendrás que renderizar una serie de etiquetas HTML con información dentro.

🟢 Tendrás que mappear tu estado global para luego renderizar su información utilizando el componente <BandCard />.

IMPORTANTE
❗Este componente debe ser de clase.
❗Importar las actions como Object Modules, ¡sino los test no funcionarán!
*/

import './home.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandCard from '../BandCard/BandCard';
import { fetchBands } from '../../actions/bandActions';

export class Home extends Component {
   componentDidMount() {
      this.props.fetchBands();
   }

   render() {
      const { bands } = this.props;

      return (
         <div className='home'>
            {bands.map((band) => (
               <BandCard key={band.id} band={band} />
            ))}
         </div>
      );
   }
}

export const mapStateToProps = (state) => {
   return {
      bands: state.bandReducer.bands,
   };
};

export const mapDispatchToProps = (dispatch) => {
   return {
      fetchBands: () => dispatch(fetchBands()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

