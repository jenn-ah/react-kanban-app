import { combineReducers } from 'redux';

import cards from './cardList';
import isForming from './formingModal';


export default combineReducers({ 
  cards,
  isForming,
})