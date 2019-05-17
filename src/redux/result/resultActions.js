let nextResultId = 0;

export const ADD_RESULT = 'ADD_RESULT';
export const REMOVE_RESULT = 'REMOVE_RESULT';


export const addResult = ({result, bet, previousCardValue, currentCardValue}) => ({
  type: ADD_RESULT,
  payload: {
    id: nextResultId++,
    result,
    bet,
    previousCardValue,
    currentCardValue
  }
})

export const removeResult = (id) => ({
  type: REMOVE_RESULT,
  payload: {
    id
  }
})