import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { getFormValues } from "redux-form";

const SimpleTable = ({
  values = {
    members: ["1", "1234", "andthen", "qwer@qwe.qwe", "Newport"]
  }
}) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">Matrikel Nummer</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">E-mail</TableCell>
          <TableCell align="right">Stadt</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {values.members.map(m => (
          <TableRow key={`${m.id}`}>
            <TableCell align="right">{m.id}</TableCell>
            <TableCell align="right">{m.mNummer}</TableCell>
            <TableCell align="right">{m.name}</TableCell>
            <TableCell align="right">{m.email}</TableCell>
            <TableCell align="right">{m.city}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default connect(state => ({
  values: getFormValues("MyForm")(state)
}))(SimpleTable);
