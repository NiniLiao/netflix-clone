import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
           handleShow(true);
        } else handleShow(false);
      });
      return () => {
        window.removeEventListener("scroll", null);
      };
    },[]);

    return (
      <div className={`nav ${show && "nav__black"}`}>
         <img 
           className="nav__logo"
           src="https://upload.wikimedia.org/wikipedia/commons/0/0f/"
           alt="Netflix Logo"
         />

         <img
           className="nav__avatar"
           src="https://pbs.twimg.com/profile_image/124011999041155"
           alt="Netflix Logo"
         />
      </div>
    )
}

export default Nav