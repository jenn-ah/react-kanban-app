import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Board from '../Board';
//import AddCard from '../AddCard';
import { loadCards } from '../../actions/cardActions';
import FormModal from '../FormModal';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('this first props', props);
  //create methods here
  }

  componentDidMount() {
    console.log('CDM firing!');
    this.props.loadCards();
  }

  render() {
  console.log('this.props in APP', this.props)
   const isForming = this.props.isForming.isForming;
    return (
      <div className="App-header">
        KANBAN
        <div className="columnContainer">
          {/* <Board data={this.props.cards} /> */}
          <Board cards={this.props.cards} />
          <FormModal isForming={isForming} />
          {/* <AddCard /> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapstate state', state);
  return {
    cards: state,
    isForming: state.isForming
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

