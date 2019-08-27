import React, { Component } from "react";
import Content from "./Content.jsx";
import NavBar from "./NavBar.jsx";

class App extends Component {
  state = {
    sideList: [
      { name: "Chinmay Padole", selected: false },
      { name: "Rameez Parkar", selected: false },
      { name: "Saurabh Mishra", selected: false }
    ]
  };

  onUpdateClick(data) {
    const updatedList = this.state.sideList.map((user, index) => {
      if (index === data.id)
        return { name: data.fName + " " + data.lName, selected: true };
      else return { name: user.name, selected: false };
    });

    //console.log(updatedList);
    this.setState({
      sideList: updatedList,
      fName: data.fName,
      lName: data.lName,
      id: data.id
    });
  }
  async onNavBarClick(data) {
    let name = data.name.split(" ");

    const updatedList = this.state.sideList.map(user => {
      if (user.name === data.name) return { name: user.name, selected: true };
      else return { name: user.name, selected: false };
    });

    await this.setState({
      sideList: updatedList,
      fName: name[0],
      lName: name[1],
      id: data.id
    });
  }

  render() {
    return (
      <div id="main">
        {this.state.fName && (
          <Content
            fName={this.state.fName}
            lName={this.state.lName}
            id={this.state.id}
            onUpdateClick={this.onUpdateClick.bind(this)}
          />
        )}
        <NavBar
          sideList={this.state.sideList}
          onNavBarClick={this.onNavBarClick.bind(this)}
          fName={this.state.fName}
          lName={this.state.lName}
          id={this.state.id}
        />
      </div>
    );
  }
}

export default App;
