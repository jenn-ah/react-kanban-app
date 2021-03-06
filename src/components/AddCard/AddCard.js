import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cardActions';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: '',
      body: '',
      priority_id: '',
      status_id: '',
      created_by: '',
      assigned_to: ''
    }
    //create binds here
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
  }
  //methods here
  handleInputChange(event) {
    switch (event.target.id) {
      case 'title':
        this.setState({ title: event.target.value });
        break;

      case 'body':
        this.setState({ body: event.target.value });
        break;

      case 'priority_id':
        this.setState({ priority_id: event.target.value });
        break;

      case 'status_id':
        this.setState({ status_id: event.target.value });
        break;

      case 'created_by':
        this.setState({ created_by: event.target.value });
        break;

      case 'assigned_to':
        this.setState({ assigned_to: event.target.value });
        break;

      default:
        break;
    }
  }

  addNewCard(event) {
    event.preventDefault();

    const data = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      priority_id: this.state.priority_id,
      status_id: this.state.status_id,
      created_by: this.state.created_by,
      assigned_to: this.state.assigned_to
    }
      this.props.addCard(data);
  }

  render() {

    return (
      <div className="add-card-form">
      <h3>Add New Task</h3>
        <div className="idDiv">
        <input readOnly type="text" id="id" value={this.state.id} />
        </div>
        Title:
        <br />
        <input type="text" id="title" value={this.state.title} onChange={this.handleInputChange} />
        <br />
        Body:
        <br />
        <input type="text" id="body" value={this.state.body} onChange={this.handleInputChange} />
        <br />
        Priority:
        <br />
        <select className="dropDowns"
            id="priority_id"
            value={this.state.priority_id}
            onChange={this.handleInputChange}
          >
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
            <option value="4">Urgent</option>
            <option value="5">Emergency</option>
          </select>
        <br />
        Status:
        <br />
        <select className="dropDowns"
            id="status_id"
            value={this.state.status_id}
            onChange={this.handleInputChange}
          >
            <option value="1">Queue</option>
            <option value="2">In Progress</option>
            <option value="3">Done</option>
          </select>
        <br />
        Created By:
        <br />
        <select className="dropDowns"
            id="created_by"
            value={this.state.created_by}
            onChange={this.handleInputChange}
          >
            <option value="1">Johnny</option>
            <option value="2">Sid</option>
            <option value="3">Glen</option>
            <option value="4">Steve</option>
            <option value="5">Paul</option>
          </select>
        <br />
        Assigned To:
        <br />
        <select className="dropDowns"
            id="assigned_to"
            value={this.state.assigned_to}
            onChange={this.handleInputChange}
          >
            <option value="1">Johnny</option>
            <option value="2">Sid</option>
            <option value="3">Glen</option>
            <option value="4">Steve</option>
            <option value="5">Paul</option>
          </select>
        <br />
        <br />
        <button className="btnz" onClick={this.addNewCard}>
          Add Card
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card => {
      dispatch(addCard(card));
    })
  }
}

export default connect(null, mapDispatchToProps)(AddCard);