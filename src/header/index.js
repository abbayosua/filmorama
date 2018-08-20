
import React from "react";
import "./header.css";

const Header = () => (
  <header>
    <title>Filmorama</title>
    <h1>Filmorama</h1>
    <div className  ="tagline">What You wanna watch today?</div>
    <div className="boring">Hmph, Boring! <a href="."><button>Change The List!</button></a></div>
  </header>
)

export default Header;