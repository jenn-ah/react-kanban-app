import React from 'react';
import Card from '../Card';

//column generates cards based on where they will be distributed

const Column = (props) => {
   console.log('this is column props', props);
   //console.log('this props status', props.title);
  const tasks = props.data;
  console.log('this is tasks', tasks);
  const allTasks = tasks.filter(element => {
    //console.log('this is element alltasks', element);
    return element.status_id === (parseInt(props.id));
  })
    .map(task => {
      //console.log('this is task props status', props.title);
      return (<Card key={task.id} title={task.title} body={task.body} priority={task.priority.name} status={task.status.name} created_by={task.created_by} assigned_to={task.assigned_to} />
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