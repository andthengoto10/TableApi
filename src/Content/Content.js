import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import My from "../My/My";
import MTable from "../MuiTable/MTable";
import ReactBotstrapTable from "../ReactBotstrapTable/ReactBotstrapTable";
import STable from "../SimpleTable/STable";
import Home from "../Home/Home";
import SearchTable from "../ReactBotstrapTable/SearchTable";

class Content extends Component {
  render() {
    return (
      <div class="content">
        <div className="menu navbar navbar-fixed-top">
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item">
              <Link to="/">About</Link>
            </li>
            <li className="list-group-item">
              <Link to="/my">My</Link>
            </li>
            <li className="list-group-item">
              <Link to="/simpleTable">Simple Table</Link>
            </li>
            <li className="list-group-item">
              <Link to="/muiTable">Mui Table</Link>
            </li>
            <li className="list-group-item">
              <Link to="/reactBotstrapTable">React Botstrap Table</Link>
            </li>
            <li className="list-group-item">
              <Link to="/searchTable">Search Botstrap Table</Link>
            </li>
          </ul>
        </div>
        <div className="App-body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/My" component={My} />
            <Route path="/SimpleTable" component={STable} />
            <Route path="/MuiTable" component={MTable} />
            <Route path="/ReactBotstrapTable" component={ReactBotstrapTable} />
            <Route path="/SearchTable" component={SearchTable} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Content;
