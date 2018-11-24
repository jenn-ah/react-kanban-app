import React from 'react';
import EditCard from '../EditCard';






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
          {/* <Status status={props.status} /> */}
          Status: {status}
    {/* <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl> */}
          <br />
          Assigned To: {assigned_to}
          <br />
          <div className="createdByDiv">
           {created_by}
          </div>
          <div className="editDelete">
            Edit || Delete
            <EditCard />
          </div>
        </div>
    </div>
  )
}

export default Card;