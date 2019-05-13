import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deckofcardsapi.com/api/deck/'
});

const createDeckAndDraw = async () => {
  const { data } = await api.get('new/draw', {
    params: {
      count: 1
    }
  });
  const { deck_id, cards } = data;
  const { value, image } = data.cards[0];
  return { deck_id, value, image };
};

const redrawCardFromDeck = async ({ deckId }) => {
  const { data } = await api.get(`${deckId}/draw`, {
    params: {
      count: 1
    }
  });
  const { deck_id, cards } = data;
  const { value, image } = data.cards[0];
  return { deck_id: deckId, value, image };
};

export { createDeckAndDraw, redrawCardFromDeck };
