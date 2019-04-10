import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Board from '../Board';
import { loadCards } from '../../actions/cardActions';
import FormModal from '../FormModal';
import { setFormingTrue, setFormingFalse } from '../../actions/formingActions';


class App extends Component {

  //create methods here

  componentDidMount() {
    console.log('CDM firing!');
    this.props.loadCards();
  }

  render() {
  //console.log('this.props in APP', this.props)
   const isForming = this.props.isForming.isForming;
    return (
       <div>
          <FormModal isForming={isForming} hideFormHandler={this.props.hideAddForm}/>
       <div className="App-header">
        KANBAN
        <button className="newTaskHeader" onClick={this.props.showAddForm}>
        + NEW TASK
        </button>
        {/* <div className="columnContainer"> */}
          <Board cards={this.props.cards} />
        </div>
          </div>
      //  </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log('mapstate state', state);
  return {
    cards: state,
    isForming: state.isForming
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      dispatch(loadCards());
    },
    showAddForm: () => {
      dispatch(setFormingTrue());
    },
    hideAddForm: () => {
      dispatch(setFormingFalse());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//invoking connection function, returns function, App is immediately invoked; referred to as higher-order component;

