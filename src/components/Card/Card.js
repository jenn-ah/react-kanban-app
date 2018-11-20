import React from 'react';

const Card = (props) => {
  const { card_id, title, body, priority, status, created_by, assigned_to } = props;
  //console.log('this is card props', props);

  return (
    <div className="oneCard">
      <br />
      {card_id}
      <br />
      <b>{title}</b>
      <br />
      {body}
      <br />
        <div className="cardStats">
          Priority: {priority}
          <br />
          Status: {status}
          <br />
          Assigned To: {assigned_to}
          <br />
          <div className="createdByDiv">
           {created_by}
          </div>
        </div>
    </div>
  )
}

export default Card;