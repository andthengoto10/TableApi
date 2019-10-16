import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

export default class SearchTable extends React.Component {
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
      <div>
        <BootstrapTable
          ref="table"
          data={this.state.data}
          pagination={true}
          search={true}
        >
          <TableHeaderColumn dataField="id" isKey={true}>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
          <TableHeaderColumn dataField="username">Username</TableHeaderColumn>
          <TableHeaderColumn dataField="email">E-mail</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
