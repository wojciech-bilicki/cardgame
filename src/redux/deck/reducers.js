import { CREATE_DECK_PENDING, CREATE_DECK_RESOLVED } from './deckActions';


const deck = (state = {isLoading: false}, action) => {
  switch(action.type) {
    case CREATE_DECK_PENDING: 
      return {...state, isLoading: true}
    case CREATE_DECK_RESOLVED:
      console.log(state, action.payload)
      return {...state, isLoading: false, ...action.payload}
    default:
      return state;
  }
}

export default deck;