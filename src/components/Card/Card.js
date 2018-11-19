import React from 'react';

const Card = (props) => {
  const { card_id, title, body, priority, status, created_by, assigned_to } = props;
  console.log('this is card props', props);

  return (
    <div className="oneCard">
      <li>ID: {card_id}</li>
      <li>Title: {title}</li>
      <li>Body: {body} </li>
      <li>Priority: {priority} </li>
      <li>Status: {status} </li>
      <li>Created By: {created_by}</li>
      <li>Assigned To: {assigned_to}</li>
      <br />
    </div>
  )
}

export default Card;