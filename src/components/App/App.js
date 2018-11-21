import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Board from '../Board';
import { loadCards } from '../../actions/cardActions';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);


    //create binds here
    this.addCard = this.addCard.bind(this);
  }
  //create methods here
  addCard({ title, body, priority, status, created_by, assigned_to }) {
    const card_id = this.state.currentId;
    const { cards } = this.state;

    console.log('this is addCard cards', cards);

    const newCard = { title, body, priority, status, created_by, assigned_to };

    this.setState({
      //currentId: card_id + 1,
      cards: [...cards, newCard]
    });
  }

  componentDidMount() {
    console.log('CDM firing!');

    axios.get('/api/cards')
      .then(response => {
        const cards = response.data;
        console.log('this cdm cards', cards);
        this.props.loadCards(cards);
      })
      .catch(err => console.error(err));
  }

  render() {

    return (
      <div className="App-header">
        KANBAN
        <div className="columnContainer">
          <Board data={this.props.cards} />
          {/* <AddCard addCard={this.addCard} /> */}
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
    loadCards: (cards) => {
      dispatch(loadCards(cards));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
//invoking connection function, returns function, App is immediately invoked; referred to as higher-order component;

