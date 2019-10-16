import React, { Component } from "react";
import SimpleTable from "./SimpleTable";
import "bootstrap/dist/css/bootstrap.min.css";

class STable extends Component {
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
      <div className="container">{<SimpleTable data={this.state.data} />}</div>
    );
  }
}

export default STable;
