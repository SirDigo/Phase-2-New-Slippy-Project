import React from "react";

function NavBar() {
  return (
    <div className="navbar">
        <a className="navlink" href="/about">about</a>
        <a className="navlink" href="/bedroom">bedroom</a>
        <a className="navlink" href="/journal">journal</a>
        <a className="navlink" href="/livingroom">living room</a>
    </div>
  );
}

export default NavBar;