import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditCard from '../EditCard';


class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    }
    this.toggleEditing = this.toggleEditing.bind(this);
  }

  toggleEditing(event) {
    this.setState({
      editing: !this.state.editing,
    });
  }

  render() {
   // console.log('this classCard props', this.props);
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

              <div className="createdByDiv">
                {this.props.createName}
              </div>
            </div>
          </div>

          <div className="editDelete">
            <button id="edit_button" onClick={this.toggleEditing}>
              Edit
              </button>
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

export default connect(null, mapStateToProps)(Card);



//<select name="condition_id" id="conditionId" value={condition}>