import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Board from '../Board';
import AddCard from '../AddCard';
import { loadCards } from '../../actions/cardActions';


class App extends Component {
  //create methods here

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

