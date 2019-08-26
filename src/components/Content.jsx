import React, { Component } from "react";

class Content extends Component {
  state = {
    count: 0,
    sideList: [
      { name: "Chinmay Padole", selected: false },
      { name: "Rameez Parkar", selected: false },
      { name: "Saurabh Mishra", selected: false }
    ],
    fName: "",
    lName: "",
    id: -1
  };

  renderList() {
    if (this.state.sideList.length === 0) return <p>No tags</p>;

    return (
      <ul>
        {this.state.sideList.map((tag, index) => (
          <li
            className={tag.selected === true ? "text-success" : ""}
            key={index}
            onClick={() => this.onItemClick(index)}
          >
            {tag.name}
          </li>
        ))}
      </ul>
    );
  }

  //   handleIncrement = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };

  onItemClick = i => {
    //console.log(i);
    let name = this.state.sideList[i].name.split(" ");

    const updatedList = this.state.sideList.map(user => {
      //console.log(user.name);
      if (user.name === name[0] + " " + name[1])
        return { name: user.name, selected: true };
      else return { name: user.name, selected: false };
    });

    //console.log(updatedList);
    this.setState({
      fName: name[0],
      lName: name[1],
      id: i,
      sideList: updatedList
    });
  };
  updateItemInList = () => {
    //console.log("Hey    " + this.state.id);
    if (
      this.state.id !== -1 &&
      this.state.fName !== "" &&
      this.state.fName !== undefined &&
      this.state.lName !== "" &&
      this.state.lName !== undefined
    )
      this.setState(state => {
        const sideList = state.sideList.map((item, j) => {
          if (j === this.state.id) {
            return {
              name: this.state.fName + " " + this.state.lName,
              selected: true
            };
          } else {
            return item;
          }
        });
        return {
          sideList
        };
      });
    else console.log("Please select an item from list first");
  };

  UpdateName = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    //console.log(this.state.fName);
  };

  render() {
    //this.getBadgeClasses();
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
        {this.state.sideList.length === 0 && "Please add List"}
        {this.renderList()}
      </div>
    );
  }

  //   getBadgeClasses() {
  //     let classes = "badge m-2 badge-";
  //     classes += this.state.count === 0 ? "warning" : "primary";
  //     return classes;
  //   }

  //   formatCount() {
  //     const { count } = this.state;
  //     return count === 0 ? "Zero" : count;
  //   }
}

export default Content;
