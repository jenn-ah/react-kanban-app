import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard, deleteCard } from '../../actions/cardActions';
import EditCard from '../EditCard';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      id: props.id,
      title: props.title,
      body: props.body,
      priority_id: props.priority_id,
      status_id: props.status_id,
      created_by: props.created_by,
      createName: props.createName,
      assigned_to: props.assigned_to,
      assignName: props.assignName
    }
    this.toggleEditing = this.toggleEditing.bind(this);
    this.deletingCard = this.deletingCard.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  toggleEditing(event) {
    this.setState({
      editing: !this.state.editing
    });
  }

  deletingCard(event) {
    console.log('props deleting card', this.props);
    console.log('state deleting card', this.state);
    //event.preventDefault();
    const data = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      priority_id: this.state.priority_id,
      status_id: this.state.status_id,
      created_by: this.state.created_by,
      assigned_to: this.state.assigned_to
    }
    this.props.deleteCard(data);
  }

  moveRight(event) {
    event.preventDefault();
    const data = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      priority: this.state.priority_id,
      status: this.state.status_id + 1,
      created_by: this.state.created_by,
      assigned_to: this.state.assigned_to
    }
    this.props.editCard(data);
  }

  moveLeft(event) {
    event.preventDefault();
    const data = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      priority: this.state.priority_id,
      status: this.state.status_id - 1,
      created_by: this.state.created_by,
      assigned_to: this.state.assigned_to
    }
    //console.log('this editnewcard data', data);
    this.props.editCard(data);
  }

  render() {
    //console.log('this classCard props', this.props);
    const statusId = this.props.status_id;
    return (
      <div className="oneCard">
        {!this.state.editing && (<div className="cardParentDiv">
          <div className="toggleCardData">
            <div className="idDiv">
              {this.props.id}
            </div>

            <b>{this.props.title}</b>
            <br />

            {this.props.body}
            <br />

            <div className="cardStats">
              Priority: {this.props.priority}
              <br />

              Status: {this.props.status}
              <br />

              Assigned To: {this.props.assignName}
              <br />
              <br />

              <div className="createdByDiv">
                {this.props.createName}
                <span className="createTipText"><b>Created By</b> {this.props.createName}</span>

              </div>
            </div>
          </div>

          <div className="editDelete">
            <button className="btnz" id="edit_button" onClick={this.toggleEditing}>
              Edit
            </button>
              |
            <button className="btnz" id="delete_button" onClick={this.deletingCard}>
              Delete
            </button>

          </div>
          <div className="moveCard">
            {statusId > 1 && ( <button className="btnz" id="move_left" onClick={this.moveLeft}>
              <p><i className="arrow left"></i></p>
            </button>)}
            {statusId <= 2 && ( <button className="btnz" id="move_right" onClick={this.moveRight}>
              <p> <i className="arrow right"></i></p>
            </button>) }
          </div>
        </div>
        )
        }

        {this.state.editing && <EditCard data={this.props} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (card => {
      dispatch(editCard(card));
    }),
    deleteCard: (card => {
      dispatch(deleteCard(card));
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);



//<select name="condition_id" id="conditionId" value={condition}>