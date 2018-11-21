import React, { Component } from 'react';

class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      card_id: 0,
      title: '',
      body: '',
      priority: '',
      status: '',
      created_by: '',
      assigned_to: ''
    }
    //create binds here
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onPriorityChange = this.onPriorityChange.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
    this.onCreatedChange = this.onCreatedChange.bind(this);
    this.onAssignedChange = this.onAssignedChange.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
  //methods here
  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  onPriorityChange(event) {
    this.setState({ priority: event.target.value });
  }

  onStatusChange(event) {
    this.setState({ status: event.target.value });
  }

  onCreatedChange(event) {
    this.setState({ created_by: event.target.value });
  }

  onAssignedChange(event) {
    this.setState({ assigned_to: event.target.value });
  }

  clickHandler() {
    const { addCard } = this.props;
    console.log('clickHand this', this);
    const { title, body, priority, status, created_by, assigned_to } = this.state;
    console.log('this is clickHand title body', title, body);
    
    addCard({ title, body, priority, status, created_by, assigned_to });
    console.log('this is addCard on clickHand', addCard);

    this.setState({
      title: '',
      body: '',
      priority: '',
      status: '',
      created_by: '',
      assigned_to: ''
    });
  }


  render() {

    return (
      <div className="add-card-form">
      <h3>Add New Task</h3>
        Title:
        <br />
        <input type="text" value={this.state.title} onChange={this.onTitleChange} />
        <br />
        Body:
        <br />
        <input type="text" value={this.state.body} onChange={this.onBodyChange} />
        <br />
        Priority:
        <br />
        <input type="text" value={this.state.priority} onChange={this.onPriorityChange} />
        <br />
        Status:
        <br />
        <input type="text" value={this.state.status} onChange={this.onStatusChange} />
        <br />
        Created By:
        <br />
        <input type="text" value={this.state.created_by} onChange={this.onCreatedChange} />
        <br />
        Assigned To:
        <br />
        <input type="text" value={this.state.assigned_to} onChange={this.onAssignedChange} />
        <br />

        <button onClick={this.clickHandler}>
          Add Card
        </button>
      </div>
    );
  }
}

export default AddCard;