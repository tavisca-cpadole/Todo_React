import React, { Component } from "react";

class Counter extends Component {
  state = {
    fName: this.props.fName,
    lName: this.props.lName,
    id: this.props.id
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      fName: nextProps.fName,
      lName: nextProps.lName,
      id: nextProps.id
    });
    //console.log("componentWillReceiveProps", nextProps.fName);
  }

  updateItemInList = () => {
    if (
      this.state.id !== -1 &&
      this.state.fName !== "" &&
      this.state.fName !== undefined &&
      this.state.lName !== "" &&
      this.state.lName !== undefined
    ) {
      this.props.onUpdateClick(this.state);
    } else console.log("Please select an item from list first");
    //console.log(this.state.fName);
  };

  UpdateName = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          id="fid"
          value={this.state.fName}
          placeholder="First Name"
          name="fName"
          onChange={event => this.UpdateName(event)}
        />
        <input
          type="text"
          id="lid"
          value={this.state.lName}
          placeholder="Last Name"
          name="lName"
          onChange={event => this.UpdateName(event)}
        />
        <button
          onClick={() => this.updateItemInList()}
          className={"btn btn-secondary btn-sm"}
        >
          Update
        </button>
      </div>
    );
  }
}

export default Counter;
