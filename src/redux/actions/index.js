import axios from 'axios';

export const GET_ALL_BANDS = 'GET_ALL_BANDS';
export const GET_BAND_DETAILS = 'GET_BAND_DETAILS';
export const CREATE_BANDS = 'CREATE_BANDS';
export const DELETE_BANDS = 'DELETE_BANDS';

const API_BASE_URL = 'http://localhost:3001';
// 🟢 getAllBands:
// Esta función debe realizar una petición al Back-End. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/bands'.
export const getAllBands = () => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/bands`);
        dispatch({
          type: GET_ALL_BANDS,
          payload: data
        });
      } catch (error) {
        console.error(error);
      }
    };
  };

// 🟢 getBandDetail:
// Esta función debe hacer una petición al Back-End. Ten en cuenta que tiene que recibir la variable "id" por
// parámetro. Luego despachar una action con la data recibida.
// End-Point: 'http://localhost:3001/bands/:id'.
export const getBandDetail = (id) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/bands/${id}`);
        dispatch({
          type: GET_BAND_DETAILS,
          payload: data
        });
      } catch (error) {
        console.error(error);
      }
    };
  };
  

// 🟢 createBands:
// Esta función debe recibir una variable "bands" por parámetro.
// Luego retornar una action que, en su propiedad payload:
//    - haga un spread operator de la variable bands, para copiar todo su contenido.
//    - tenga una nueva propiedad "id" igual la variable de abajo, pero con un incremento +1.
// Descomenta esta variable cuando la necesites
// let id = 6;
let id = 6;
export const createBands = (bands) => {
  return {
    type: CREATE_BANDS,
    payload: {
      ...bands,
      id: ++id
    }
  };
};

// 🟢 deleteBands:
// Esta función debe retornar una action. En su propiedad "payload" habrá una ID recibido por parámetro.
export const deleteBands = (id) => {
    return {
      type: DELETE_BANDS,
      payload: id
    };
  };
  
  
  
  
  
  