import React from 'react';
import Card from '../Card';

//column generates cards based on where they will be distributed

const Column = (props) => {
  console.log('this is column props', props);

  const tasks = props.data;
  console.log('this is tasks', tasks);
  const allTasks = tasks.filter(element => {
    console.log('this is element alltasks', element);
    return element.status_id === (parseInt(props.id));
  })
    .map(task => {
      console.log('this is map task', task);
      return (<Card
        id={task.id}
        title={task.title}
        body={task.body}
        priority={task.priority.name}
        status={task.status.name}
        created_by={task.createdBy.first_name}
        assigned_to={task.assignedTo.first_name}
      />
      );
    })

  return (
    <div className='columnContainer'>
      <center>
        <h2>{props.title}</h2>
      </center>
      {allTasks}
    </div>
  )
}


export default Column;