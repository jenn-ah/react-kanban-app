import axios from 'axios';
import { setFormingTrue, setFormingFalse } from './formingActions';

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';

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
    return axios.post(API_CARDS_URL, card)
      .then(response => {
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
        const card = response.data;
        dispatch({
          type: EDIT_CARD,
          card
        })
      })
      .catch(err => console.error(err));
  }
}