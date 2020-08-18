import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import "./App.css";
import ClickMe from "./components/ClickMe";
import ClicksGraph from "./components/ClickGraph";
import Header from "./common/header";
function App() {
  return (
    <React.Fragment>
      <Header />
      <HashRouter>
        <div className="container">
          <h1>Kill your time here</h1>
          <div className="navigation-header">
            <ul>
              <li>
                <NavLink exact to="/">
                  Click
                </NavLink>
              </li>
              <li>
                <NavLink to="/graph">Graph</NavLink>
              </li>
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={ClickMe} />
            <Route path="/graph" component={ClicksGraph} />
          </div>
        </div>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
