import React from 'react';
import Column from '../Column';


const Board = (props) => {
  console.log('this is board props', props);

  return (
      <ul>
      <div className="queueDiv">
        <Column id="1" title="Queue" data={props.data} />
      </div>
      <div className="progressDiv">
        <Column id="2" title="In Progress" data={props.data} />
      </div>
      <div className="doneDiv">
        <Column id="3" title="Done" data={props.data} />
      </div>
      </ul>
  )
}

export default Board;