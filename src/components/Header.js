import React from "react";

function Header() {

  const myStyle = {
    backgroundColor: "#FFE799",
  }

  return (
      <div className="navbar" style={{backgroundColor: "#FFD447"}}>
        <li style={myStyle}><a style={{color: "#372F32"}} href="/about">About</a></li>
        <li style={myStyle}><a style={{color: "#372F32"}} href="/bedroom">Bedroom</a></li>
        <li style={myStyle}><a style={{color: "#372F32"}} href="/journal">Journal</a></li>
    </div>
  );
}

export default Header;