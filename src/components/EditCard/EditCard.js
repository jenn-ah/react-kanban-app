import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard } from '../../actions/cardActions';

class EditCard extends Component {
  constructor(props) {
    super(props);
    console.log('this editCard props', props);
    this.state = {
     // card_id: 0,
      title: this.props.title,
      body: '',
      priority: '',
      status: '',
      created_by: '',
      assigned_to: ''
    }
    //create binds here

    this.handleInputChange = this.handleInputChange.bind(this);
    this.editNewCard = this.editNewCard.bind(this);
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

  editNewCard(event) {
    event.preventDefault();

    const data = {
      title: this.state.title,
      body: this.state.body,
      priority_id: this.state.priority_id,
      status_id: this.state.status_id,
      created_by: this.state.created_by,
      assigned_to: this.state.assigned_to
    }
      this.props.editCard(data);
  }

  render() {

    return (
      <div className="edit-card-form">
        Title:
        <br />
        <input type="text" id="title" value={this.props.title} onChange={this.handleInputChange} />
        <br />
        Body:
        <br />
        <input type="text" id="body" value={this.state.body} onChange={this.handleInputChange} />
        <br />
        Priority:
        <br />
        <input type="text" id="priority_id" value={this.state.priority_id} onChange={this.handleInputChange} />
        <br />
        Status:
        <br />
        <input type="text" id="status_id" value={this.state.status_id} onChange={this.handleInputChange} />
        <br />
        Created By:
        <br />
        <input type="text" id="created_by" value={this.state.created_by} onChange={this.handleInputChange} />
        <br />
        Assigned To:
        <br />
        <input type="text" id="assigned_to" value={this.state.assigned_to} onChange={this.handleInputChange} />
        <br />

        <button onClick={this.editNewCard}>
          Edit Card
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (card => {
      dispatch(editCard(card));
    })
  }
}

export default connect(null, mapDispatchToProps)(EditCard);