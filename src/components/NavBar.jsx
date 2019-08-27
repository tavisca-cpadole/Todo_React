import React, { Component } from "react";

class NavBar extends Component {
  state = {
    sideList: this.props.sideList,
    fName: this.props.fName,
    lName: this.props.lName,
    id: this.props.id
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      sideList: nextProps.sideList,
      fName: nextProps.fName,
      lName: nextProps.lName,
      id: nextProps.id
    });
    //console.log("componentWillReceiveProps", nextProps.fName);
  }

  renderList() {
    if (this.state.sideList.length === 0) return <p>No tags</p>;
    const output = (
      <ul id="list">
        {this.state.sideList.map((tag, index) => (
          <li
            className={tag.selected === true ? "text-success" : ""}
            key={index}
            onClick={() =>
              this.props.onNavBarClick({
                name: tag.name,
                id: index
              })
            }
          >
            {tag.name}
          </li>
        ))}
        {this.state.Add === 1 ? (
          <li id="AddItemId">
            <input
              type="text"
              onBlur={() => this.TryToADD()}
              id="InputId"
              autocomplete="off"
              autoFocus
            />
          </li>
        ) : (
          ""
        )}
      </ul>
    );
    return output;
  }

  TryAddItem() {
    this.setState({
      Add: 1
    });
    this.renderList();
  }

  TryToADD() {
    let item = document.getElementById("InputId").value.trim();
    //console.log("asdasdasdas");
    if (item.length > 0) {
      let objectdata = { name: item, selected: false };
      let newSideList = this.state.sideList;
      newSideList.push(objectdata);
      this.setState({
        Add: 0,
        sideList: newSideList
      });
      //      console.log(newSideList);
    } else {
      this.setState({
        Add: 0
      });
    }
    this.renderList();
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button
          className={"btn btn-success btn-sm"}
          onClick={() => this.TryAddItem()}
        >
          Add Item
        </button>
        {this.renderList()}
      </div>
    );
  }
}

export default NavBar;
