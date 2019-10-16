import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

export default class ReactBotstrapTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
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
      <BootstrapTable ref="table" data={this.state.data}>
        <TableHeaderColumn ref="id" dataField="id" isKey={true}>
          Student ID
        </TableHeaderColumn>
        <TableHeaderColumn ref="name" dataField="name">
          Name
        </TableHeaderColumn>
        <TableHeaderColumn ref="username" dataField="username">
          Username
        </TableHeaderColumn>
        <TableHeaderColumn ref="email" dataField="email">
          Email
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
