import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MySideNav.css";

function MySideNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
      <div className={open ? "sidebar active" : "sidebar"}>
        <h3>Menu</h3>
        <ul>
          <li><Link to="/Profile">Profile</Link></li>
          <li><Link to="/AddNote">Add Note</Link></li>
          <li><Link to="/MyNote">My Notes</Link></li>
          <li><Link to="/Logout">Logout</Link></li>
        </ul>
      </div>
    </>
  );
}

export default MySideNav;
