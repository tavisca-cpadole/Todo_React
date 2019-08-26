import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return <h1>Hello WOrld</h1>;
  }

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
}

export default NavBar;
