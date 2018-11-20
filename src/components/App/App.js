import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Board from '../Board';
import { loadCards } from '../../actions/cardActions';


class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   currentId: 104,
    //   tasks: [{
    //     card_id: 100,
    //     title: 'Write a Book',
    //     body: 'Thinking about writing a book, need to carve out some time in my day to make this happen.',
    //     priority: 'medium',
    //     status: 'In Progress',
    //     created_by: 'Person NumberOne',
    //     assigned_to: 'Staff Number1'
    //   },
    //   {
    //     card_id: 101,
    //     title: 'Start a Blog',
    //     body: 'Want to start a blog and need to carve out some time in my day to make this happen.',
    //     priority: 'low',
    //     status: 'Done',
    //     created_by: 'Person NumberTwo',
    //     assigned_to: 'Staff Number2'
    //   },
    //   {
    //     card_id: 102,
    //     title: 'Opening up a Business',
    //     body: 'Setting up the grand opening of my new store, need to carve out some time in my day to make this happen.',
    //     priority: 'high',
    //     status: 'In Progress',
    //     created_by: 'Person NumberThree',
    //     assigned_to: 'Staff Number3'
    //   },
    //   {
    //     card_id: 103,
    //     title: 'Help with homework',
    //     body: 'Stuck on some problems on my homework, need to carve out some time in my day to make this happen.',
    //     priority: 'low',
    //     status: 'Queue',
    //     created_by: 'Person NumberFour',
    //     assigned_to: 'unassigned'
    //   },
    //   ]
    // }
    //create binds here
    this.addCard = this.addCard.bind(this);
  }
  //create methods here
  addCard({ title, body, priority, status, created_by, assigned_to }) {
    const card_id = this.state.currentId;
    const { cards } = this.state;

    console.log('this is addCard cards', cards);

    const newCard = { card_id, title, body, priority, status, created_by, assigned_to };

    this.setState({
      //currentId: card_id + 1,
      cards: [...cards, newCard]
    });
  }

  componentDidMount() {
    console.log('CDM firing!');

    let currentId = 104;
    const mockCards =
      //{
      // currentId: 104,
      [{
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
      }];
    this.props.loadCards(mockCards);
  }

  render() {

    return (
      <div className="App-header">
        <h1>Kanban Board</h1>
        <Board data={this.props.cards} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: (cards) => {
      dispatch(loadCards(cards));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
//invoking connection function, returns function, App is immediately invoked; referred to as higher-order component;

