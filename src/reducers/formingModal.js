import { 
    SET_FORMING_TRUE,
    SET_FORMING_FALSE 
  } from '../actions/formingActions';
  
  const initialState = { isForming: false };
  
  const formingModal = ( state = initialState, action ) => {
    switch (action.type) {
      case SET_FORMING_TRUE:
        return { isForming: true } 
      case SET_FORMING_FALSE:
        return { isForming: false } 
      default:
        return state;
    }
  }
  
  export default formingModal;