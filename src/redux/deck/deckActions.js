import { createDeckAndDraw } from "../../api";

export const CREATE_DECK_PENDING = 'CREATE_DECK_PENDING';
export const CREATE_DECK_RESOLVED = 'CREATE_DECK_RESOLVED';

export const createDeck = () => ({
    type: CREATE_DECK_PENDING
})

export const createDeckResolved = payload => ({
  type: CREATE_DECK_RESOLVED,
    payload
})


export const fetchNewDeck = () => {
  return async function(dispatch) {
    dispatch(createDeck())
    const data = await createDeckAndDraw();
    dispatch(createDeckResolved(data));
  }
}