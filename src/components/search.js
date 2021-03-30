import React from "react";

export default function Navbar(props) {

    return(
      
    <div className="navbar">
      <input value={props.value} className="searchbar" id="myInput"/>
    </div>

    );
}