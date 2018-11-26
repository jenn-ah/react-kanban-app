import React from 'react';
import Column from '../Column';


const Board = (props) => {
 // console.log('this is board props', props);

  return (
    <div className="columnContainer">
   
      <div className="queueDiv">
      <div className="titleHeader">                               
        QUEUE
      </div>
        <Column id="1" title="Queue" cards={props.cards} />
      </div>

      <div className="progressDiv">
      <div className="titleHeader"> 
        IN PROGRESS
      </div>
        <Column id="2" title="In Progress" cards={props.cards} />
      </div>

      <div className="doneDiv">
      <div className="titleHeader"> 
        DONE
      </div>
        <Column id="3" title="Done" cards={props.cards} />
      </div>
   
    </div>
  )
}

export default Board;