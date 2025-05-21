import { navLinks } from "../constants/index.js";
import React, { useEffect } from "react";
import Button from "../components/Button.jsx";

const NavBar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="group">
          <img src="/public/logo.png" alt="logo" />
          <span className="logo">SEHATNO</span>
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button text="Get Started" />
      </div>
    </header>
  );
};

export default NavBar;
