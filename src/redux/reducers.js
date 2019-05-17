import { combineReducers } from "redux";
import deck from './deck/reducers';
import results from './result/reducers';

export default combineReducers({
  results,
  deck
})