import apiService from '../services/apiService';
let incrementId = 0;

export const LISTAR_INVOICES_SUCCESS = 'LISTAR_INVOICES_SUCCESS';
export const ADD_ITEMS = 'ADD_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const LISTAR_INVOICES_ERROR = 'LISTAR_INVOICES_ERROR';

export const addItems = item => ({
    type: ADD_ITEMS,
    id: incrementId++,
    text: item.text
});

// export const updateItem = id => ({
//     type: UPDATE_ITEM,
//     id
// });

export function updateItem(id) {
      return (dispatch) =>
            apiService.updateInvoice(id)
                .then((result) => {
                  console.log('resultxx ' + JSON.stringify(result))
                    return dispatch({
                            type: UPDATE_ITEM,
                            payload: result
                          });
                })
                .catch((error) => {

                  console.log(error)
                    return dispatch({
                        type   : LISTAR_INVOICES_ERROR,
                        payload: error
                    });
                });
}


export function listarItems() {
      return (dispatch) =>
            apiService.listarInvoices()
                .then((result) => {
                  console.log('resultxx ' + JSON.stringify(result))
                    return dispatch({
                            type: LISTAR_INVOICES_SUCCESS,
                            payload: result
                          });
                })
                .catch((error) => {

                  console.log(error)
                    return dispatch({
                        type   : LISTAR_INVOICES_ERROR,
                        payload: error
                    });
                });
}
