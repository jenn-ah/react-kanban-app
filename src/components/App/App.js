import React, { Component } from 'react';
import './App.css';
import Board from '../Board';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: 104,
      tasks: [{
        card_id: 100,
        title: 'Write a Book',
        body: 'Thinking about writing a book, need to carve out some time in my day to make this happen.',
        priority: 'medium',
        status: 'In Progress',
        created_by: 'Person NumberOne',
        assigned_to: 'Staff Number1'
      },
      {
        card_id: 101,
        title: 'Start a Blog',
        body: 'Want to start a blog and need to carve out some time in my day to make this happen.',
        priority: 'low',
        status: 'Done',
        created_by: 'Person NumberTwo',
        assigned_to: 'Staff Number2'
      },
      {
        card_id: 102,
        title: 'Opening up a Business',
        body: 'Setting up the grand opening of my new store, need to carve out some time in my day to make this happen.',
        priority: 'high',
        status: 'In Progress',
        created_by: 'Person NumberThree',
        assigned_to: 'Staff Number3'
      },
      {
        card_id: 103,
        title: 'Help with homework',
        body: 'Stuck on some problems on my homework, need to carve out some time in my day to make this happen.',
        priority: 'low',
        status: 'Queue',
        created_by: 'Person NumberFour',
        assigned_to: 'unassigned'
      },
      ]
    }
    //create binds here
    this.addCard = this.addCard.bind(this);
  }
  //create methods here
  addCard({ title, body, priority, status, created_by, assigned_to }) {
    const card_id = this.state.currentId;
    const { tasks } = this.state;

    const newCard = { card_id, title, body, priority, status, created_by, assigned_to };

    this.setState({
      currentId: card_id + 1,
      tasks: [...tasks, newCard]
    });
  }

  render() {

    return (
      <div className="App-header">
        <h1>Kanban Board</h1>
        <Board data={this.state.tasks} />
      </div>
    );
  }
}

export default App;
