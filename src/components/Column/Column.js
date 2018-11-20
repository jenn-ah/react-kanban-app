import React from 'react';
import Card from '../Card';

//column generates cards based on where they will be distributed

const Column = (props) => {
  // console.log('this is column props', props);
  const tasks = props.data;
  const allTasks = tasks.filter(element => {
    //console.log('this is element alltasks', element);
    return element.status === props.title;
  })
    .map(task => {
      //console.log('this is map task', task);
      return (<Card key={task.card_id} title={task.title} body={task.body} priority={task.priority} status={task.status} created_by={task.created_by} assigned_to={task.assigned_to} />
      );
    })

  return (
    <div className='columnContainer'>
      <h2>{props.title}</h2>
      <li>
        {allTasks}
      </li>
    </div>
  )
}


export default Column;