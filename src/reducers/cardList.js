import { LOAD_CARDS } from '../actions/cardActions';
const initialState = [];

const cardList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards];

    default:
      return state;
  }
}

export default cardList;