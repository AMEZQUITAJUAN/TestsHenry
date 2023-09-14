/* 4️⃣ ***REDUCER*** 4️⃣ */

// Importa las action-types aquí.
import {
   GET_ALL_BANDS,
   GET_BAND_DETAILS,
   CREATE_BANDS,
   DELETE_BANDS,
} from '../actions';

const initialState = {
   bands: [],
   bandDetail: {},
};

/*
En este ejercicio tendrás que crear los casos de un reducer para gestionar la información de tu estado global.
📢¡Sigue las instrucciones de los tests!📢
REQUISITOS:
🟢 Crea un caso default que devuelva el estdo global sin cambios.

🟢 Crea un caso en el que, dentro de la propiedad "bands", se guarden todas las bandas.

🟢 Crea un caso en el que, dentro de la propiedad "bandDetail", se guarde el detalle de una banda.

🟢 Crea un caso en el que, dentro de la propiedad "bands", se agregue una nueva banda.
    PISTA: puedes utilizar el spread operator.

🟢 Crea un caso en el que, dentro de la propiedad "bands", se elimine aquella banda cuyo ID es igual al recibido.

*/

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Caso default que devuelve el estado global sin cambios
    default:
      return state;
    // Caso que guarda todos los celulares en el estado "celulares"
    case "SET_CELULARES":
      return {
        ...state,
        celulares: action.payload,
      };
    // Caso que guarda el detalle de un celular en el estado "celularDetail"
    case "SET_CELULAR_DETAIL":
      return {
        ...state,
        celularDetail: action.payload,
      };
    // Caso que agrega un nuevo celular en el estado "celulares"
    case "ADD_CELULAR":
      return {
        ...state,
        celulares: [...state.celulares, action.payload],
      };
    // Caso que elimina un celular del estado "celulares" según su ID
    case "REMOVE_CELULAR":
      const filteredCelulares = state.celulares.filter(
        (celular) => celular.id !== action.payload
      );
      return {
        ...state,
        celulares: filteredCelulares,
      };
  }
};

export default rootReducer;
