import React from 'react';
import { connect } from 'react-redux';
import { removeResult } from './redux/result/resultActions';

const LastResult =  ({results, removeEntry}) => (
  <>
  <h2>
    Here you'll see last results
  </h2>
  {results.length > 0 && <table>
    <thead>
      <tr><th>Bet</th><th>Result</th><th>Previous value</th><th>Actual value</th><th>Actions</th></tr>
    </thead>
    <tbody>
      {results.map(entry => <tr key={entry.id}>
        <td>{entry.bet}</td>
        <td>{entry.result}</td>
        <td>{entry.previousCardValue}</td>
        <td>{entry.currentCardValue}</td>
        <td><button onClick={() => removeEntry(entry.id)}>Remove</button></td>
      </tr>)}
    </tbody>
  </table>}
  </>
)

const mapState = (state) =>({
  results: state.results
})

const mapDispatch = (dispatch) => ({
  removeEntry: (id) => dispatch(removeResult(id))
})


export default connect(mapState, mapDispatch)(LastResult);