import React from 'react';

const Card = (props) => {
  const { title, body, priority, status, created_by, assigned_to } = props;
  console.log('this is card props', props);

  return (
    <div className="oneCard">
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