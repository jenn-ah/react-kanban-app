import React from 'react';

import Column from '../Column';
import AddCard from '../AddCard';

const Board = (props) => {
  console.log('this is board props', props);

  return (
    <ul>
      <Column title="Queue" data={props.data} />
      <Column title="In Progress" data={props.data} />
      <Column title="Done" data={props.data} />
      <AddCard addCard={props.addCard} />
    </ul>
  )
}

export default Board;