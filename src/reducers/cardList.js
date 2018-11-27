import { LOAD_CARDS, ADD_CARD, EDIT_CARD, DELETE_CARD } from '../actions/cardActions';
const initialState = [];

const cardList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return [...action.cards];

    case ADD_CARD:
      return [...state, action.card];

    case EDIT_CARD:
      //const newState = [...state];
      return [...state.filter(card => card.id !== action.card.id),
        Object.assign({}, action.card)
      ];
    //can use splice, look for id, swap out card then return
      // return newState;

    case DELETE_CARD:
    console.log('trying to delete card');
      //return [...state.filter(card => card.id !== action.card.id), Object.assign({}, state)];

      const newState = Object.assign([], state);
      //console.log('reducer delete', newState);
      const cardIndex = state.findIndex(card => {
        return card.id === action.card.id
      });
      newState.splice(cardIndex, 1);
      return newState;
      
    default:
      return state;
  }
}

export default cardList;