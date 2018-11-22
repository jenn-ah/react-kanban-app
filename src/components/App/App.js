import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Board from '../Board';
import AddCard from '../AddCard';
import { loadCards } from '../../actions/cardActions';


class App extends Component {
  constructor(props) {
    super(props);

    //create binds here
    this.addCard = this.addCard.bind(this);
  }
  //create methods here
  addCard({ title, body, priority_id, status_id, created_by, assigned_to }) {
    const card_id = this.state.currentId;
    const { cards } = this.state;
    console.log('this is addCard cards', cards);
    const newCard = { title, body, priority_id, status_id, created_by, assigned_to };

    this.setState({
      //currentId: card_id + 1,
      cards: [...cards, newCard]
    });
  }

  componentDidMount() {
    console.log('CDM firing!');
    this.props.loadCards();
  }

  render() {
    console.log('this.props in APP', this.props)
    return (
      <div className="App-header">
        KANBAN
        <div className="columnContainer">
          <Board data={this.props.cards} />
          <AddCard />
        </div>
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
    loadCards: () => {
      dispatch(loadCards());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//invoking connection function, returns function, App is immediately invoked; referred to as higher-order component;

