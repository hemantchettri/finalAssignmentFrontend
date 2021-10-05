import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Mid/Home";
import Movies from "./Movies";
import Series from "./Series";

class Mid extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/series" component={Series} />
      </Switch>
    );
  }
}

export default Mid;
