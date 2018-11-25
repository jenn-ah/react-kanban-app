import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCard } from '../../actions/cardActions';

class EditCard extends Component {
  constructor(props) {
    super(props);

    console.log('this editCard this.props', props.data);

    this.state = {
      id: props.data.id,
      title: props.data.title,
      body: props.data.body,
      priority_id: props.data.priority_id,
      status_id: props.data.status_id,
      created_by: props.data.created_by,
      assigned_to: props.data.assigned_to
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
    //console.log('this id', this.state.priority_id);
    const data = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      priority: this.state.priority_id,
      status: this.state.status_id,
      created_by: this.state.created_by,
      assigned_to: this.state.assigned_to
    }
      this.props.editCard(data);
  }

  render() {
    // let statusString = '';
    // const status = this.state.status_id;
    // if (status) {
    //   statusString = status.toString();
    // }
    // console.log('statusString', statusString);
    return (
      <div className="edit-card-form">
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
            {/* <option value={this.state.priority_id}>{this.state.priority_id}</option> */}
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
            {/* <option value={this.state.status_id}>{this.state.status_id}</option> */}
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
            {/* <option value="">Created By </option> */}
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
            {/* <option value="">Assigned To </option> */}
            <option value="1">Johnny</option>
            <option value="2">Sid</option>
            <option value="3">Glen</option>
            <option value="4">Steve</option>
            <option value="5">Paul</option>
          </select>
        <br />
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