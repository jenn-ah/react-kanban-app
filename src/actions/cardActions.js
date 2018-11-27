import axios from 'axios';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';

const API_CARDS_URL = '/api/cards';

export const loadCards = () => {
 // console.log('test loadCards');
  return dispatch => {
    return axios.get(API_CARDS_URL)
      .then(response => {
        const cards = response.data;
        dispatch({
          type: LOAD_CARDS,
          cards
        })
      })
      .catch(err => console.error(err));
  }
}

export const addCard = (card) => {
  return dispatch => {
    // dispatch(setFormingTrue());
    return axios({
      method: 'post',
      url: API_CARDS_URL,
      data: card
    })
      .then(response => {
        console.log('axios addCard', response);
        const card = response.data;
        dispatch({
          type: ADD_CARD,
          card
        })
      })
      .catch(err => console.error(err));
  }
}

export const editCard = (card) => {
 // console.log('axios card', card);
  return dispatch => {
    return axios.put(API_CARDS_URL, card)
      .then(response => {
        console.log('editCard axios', response);
        const card = response.data;
        dispatch({
          type: EDIT_CARD,
          card
        })
      })
      .catch(err => console.error(err));
  }
}

// export const deleteCard = (card) => {
//   return dispatch => {
//     return axios.delete(API_CARDS_URL, card)
//     .then(response => {
//       console.log('axios delete', response);
//         const card = response.data;
//         dispatch({
//           type: DELETE_CARD,
//           card
//         })
//       })
//       .catch(err => console.error(err));
//   }
// }

export const deleteCard = (card) => {
  return dispatch => {
    return axios({
      method: 'delete',
      url: API_CARDS_URL,
      data: card
    })
    .then(response => {
      console.log('axios delete', response);
        const card = response.data;
        dispatch({
          type: DELETE_CARD,
          card
        })
      })
      .catch(err => console.error(err));
  }
}


// axios({
// 	method: 'delete',
// 	url: '/whatever',
// 	data: content
// })