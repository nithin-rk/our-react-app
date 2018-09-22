import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Excercises from "./Excercises";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Excercises />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
