import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default props => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="right">Name </TableCell>
          <TableCell align="right">Username</TableCell>
          <TableCell align="right">E-mail</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map(m => (
          <TableRow key={`${m.id}`}>
            <TableCell align="right">{m.id}</TableCell>
            <TableCell align="right">{m.name}</TableCell>
            <TableCell align="right">{m.username}</TableCell>
            <TableCell align="right">{m.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);
