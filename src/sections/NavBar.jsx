import { navLinks } from "../constants/index.js";
import Button from "../components/Button.jsx";
const NavBar = () => {
  return (
    <header>
      <a href="/">
        <img />
        <span>SEHATNO</span>
      </a>
      <ul>
        {navLinks.map(({ name, link }) => (
          <li key={name}>
            <a href={link}>
              <span>{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <Button text="Get Started" />
    </header>
  );
};

export default NavBar;
