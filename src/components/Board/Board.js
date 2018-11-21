import React from 'react';
import Column from '../Column';
import AddCard from '../AddCard';

const Board = (props) => {
  console.log('this is board props', props);

  return (
      <ul>
      <div className="queueDiv">
        <Column title="Queue" data={props.data} />
      </div>
      <div className="progressDiv">
        <Column title="In Progress" data={props.data} />
      </div>
      <div className="doneDiv">
        <Column title="Done" data={props.data} />
      </div>
      <AddCard addCard={props.addCard} />
      </ul>
  )
}

export default Board;