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

    return (
      <ul>
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
      </ul>
    );
  }

  //   onItemClick = i => {
  //     let name = this.state.sideList[i].name.split(" ");

  //     const updatedList = this.state.sideList.map(user => {
  //       if (user.name === name[0] + " " + name[1])
  //         return { name: user.name, selected: true };
  //       else return { name: user.name, selected: false };
  //     });
  //     // this.setState({
  //     //   sideList: updatedList,
  //     //   fName: name[0],
  //     //   lName: name[1],
  //     //   id: i
  //     // });
  //     const data = {
  //       sideList: updatedList,
  //       fName: name[0],
  //       lName: name[1],
  //       id: i
  //     };
  //     this.props.onNavBarClick(data);
  //   };

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {this.renderList()}
      </div>
    );
  }
}

export default NavBar;
