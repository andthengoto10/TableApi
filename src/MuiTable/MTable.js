import React, { Component } from "react";
import MuiTable from "./MuiTable";
import "bootstrap/dist/css/bootstrap.min.css";

class MTable extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    const response = await fetch(` https://jsonplaceholder.typicode.com/users`);
    const data = await response.json();
    console.log(data);
    this.setState({
      data
    });
  }

  render() {
    return (
      <div className="container">{<MuiTable data={this.state.data} />}</div>
    );
  }
}

export default MTable;
