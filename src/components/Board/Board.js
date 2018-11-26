import React from 'react';
import Column from '../Column';


const Board = (props) => {
  console.log('this is board props', props);

  return (
      <ul>
      <div className="queueDiv">
        <Column id="1" title="Queue" cards={props.cards} />
      </div>
      <div className="progressDiv">
        <Column id="2" title="In Progress" cards={props.cards} />
      </div>
      <div className="doneDiv">
        <Column id="3" title="Done" cards={props.cards} />
      </div>
      </ul>
  )
}

export default Board;