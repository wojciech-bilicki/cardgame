import React from 'react';
import { connect } from 'react-redux';
import { createDeckAndDraw, redrawCardFromDeck } from './api';
import ButtonsTab from './ButtonsTab';
import { CardLayout } from './Layout.components';
import { addResult } from './redux/result/resultActions';
import compareValues from './utils';


class CardGameBoard extends React.Component {
  state = {
    cardImageUrl: null,
    cardValue: null,
    //up | down
    deckId: null,
    result: null
  };

  componentDidMount = async () => {
    const { deck_id, value, image } = await createDeckAndDraw();
    this.setState({
      cardValue: value,
      cardImageUrl: image,
      deckId: deck_id
    });
  };

  onButtonClick = async ({ target: { name: bet } }) => {
    this.setState({
      cardImageUrl: null
        })
    const { deckId, cardValue } = this.state;
    const { value, image } = await redrawCardFromDeck({ deckId });
    const result = compareValues({
      previousCardValue: cardValue,
      currentCardValue: value,
      bet
    });

    this.setState({
      result,
      cardValue: value,
      cardImageUrl: image
    });
    this.props.addResult({
      result,
      bet,
      currentCardValue: value,
      previousCardValue: cardValue
    });
  };

  render() {
    const { cardImageUrl, result } = this.state;
    if (!cardImageUrl) {
      return <h1>Loading..</h1>;
    }
    return (
      <CardLayout>
        <img src={cardImageUrl} />
        <ButtonsTab onButtonClick={this.onButtonClick} />
        {result && <h2>{`You, my dear friend ${result}`}</h2>}
      </CardLayout>
    );
  }
}


const mapState = state => {
  // console.log(state);
  return state;
}

const mapDispatch = dispatch => ({
  // console.log(dispatch);
  addResult: (args) => dispatch(addResult(args))
})

export default connect(null, mapDispatch)(CardGameBoard);
