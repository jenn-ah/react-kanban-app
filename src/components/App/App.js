import React, { Component } from 'react';
import './App.css';
import Board from '../Board';
import Column from '../Column';
import Card from '../Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [{
        card_id: 100,
        title: 'Write a Book',
        body: 'Thinking about writing a book, need to carve out some time in my day to make this happen.',
        priority: 'medium',
        status: 'in progress',
        created_by: 'Person NumberOne',
        assigned_to: 'Staff Number1'
      },
      {
        card_id: 101,
        title: 'Start a Blog',
        body: 'Want to start a blog and need to carve out some time in my day to make this happen.',
        priority: 'low',
        status: 'in progress',
        created_by: 'Person NumberTwo',
        assigned_to: 'Staff Number2'
      },
      {
        card_id: 103,
        title: 'Opening up a Business',
        body: 'Setting up the grand opening of my new store, need to carve out some time in my day to make this happen.',
        priority: 'high',
        status: 'in progress',
        created_by: 'Person NumberThree',
        assigned_to: 'Staff Number3'
      },
      {
        card_id: 104,
        title: 'Help with homework',
        body: 'Stuck on some problems on my homework, need to carve out some time in my day to make this happen.',
        priority: 'low',
        status: 'queue',
        created_by: 'Person NumberFour',
        assigned_to: 'unassigned'
      },
    ]
  }
}

  render() {
    
    return (
      <div className="App">
      <Board data={this.state.tasks} />
      </div>
    );
  }
}

export default App;
