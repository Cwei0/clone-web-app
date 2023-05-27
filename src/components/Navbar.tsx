import "../styles/Navbar.css";
import NetflixLogo from "/logo.png";
import avatarLogo from "../assets/Netflix-avatar.png";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [ show, handleShow ] = useState<boolean>(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    }
   
  }, [])

  
  return (
    <nav className={`${show && "nav__black"}`}>
      <div className="nav__content">
        <img className="nav__logo" src={NetflixLogo} alt="Brand Logo" />
        <img className="nav__avatar" src={avatarLogo} alt="Profile Logo" />
      </div>
    </nav>
  );
};
