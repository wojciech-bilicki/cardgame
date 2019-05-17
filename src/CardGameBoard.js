import React from 'react';
import { connect } from 'react-redux';
import { redrawCardFromDeck } from './api';
import ButtonsTab from './ButtonsTab';
import { CardLayout } from './Layout.components';
import { fetchNewDeck } from './redux/deck/deckActions';
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
    this.props.fetchNewDeck();
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
    const { result, image } = this.props;
    return (
      <CardLayout>
        <img src={image} />
        <ButtonsTab onButtonClick={this.onButtonClick} />
        {result && <h2>{`You, my dear friend ${result}`}</h2>}
      </CardLayout>
    );
  }
}


const mapState = ({deck}) => ({
  deckId: deck.deckId,
  image: deck.image,
  value: deck.value
})

const mapDispatch = dispatch => ({
  fetchNewDeck: () => dispatch(fetchNewDeck()),
  addResult: (args) => dispatch(addResult(args))
})

export default connect(mapState, mapDispatch)(CardGameBoard);
