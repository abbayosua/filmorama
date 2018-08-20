import React from "react";
import "./main.css"
import Navigation from "../navigation";
import Movies from "../movies";

class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <Navigation />
        <Movies />
      </section>
    )
  }
}

export default Main;