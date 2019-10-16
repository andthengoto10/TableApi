import React from "react";

export default props => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>UserName</th>
        <th>E-mail</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.username}</td>
          <td>{item.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
