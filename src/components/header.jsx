import { useEffect, useState } from "react";
import "../styles/App.css";
import santaImg from "../assets/imgs/santa.png";
import moonIcon from "../assets/icons/bx-moon.svg";
import sunIcon from "../assets/icons/bx-sun.svg";
import hamburgerIcon from "../assets/icons/bx-grid-alt.svg";
import navDecorationImg from "../assets/imgs/nav-decoration.png";
import closeIcon from "../assets/icons/bx-x.svg";

function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [hamburger, setHamburger] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function changeThemeFunc(theme) {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function changeHamburgerFunc(bool) {
    if (bool === false) {
      setHamburger(true);
    } else {
      setHamburger(false);
    }
  }

  function handleHamburgerClick() {
    setHamburger(false);
  }

  return (
    <header>
      <div className="header-1">
        <img className="santa" src={santaImg} alt="santa" />
        <h1>Christmas</h1>
      </div>
      <div className="header-2">
        {theme === "light" ? (
          <button className="icon-button" onClick={() => changeThemeFunc(theme)}>
            <img src={moonIcon} alt="moon" />
          </button>
        ) : (
          <button className="icon-button" onClick={() => changeThemeFunc(theme)}>
            <img src={sunIcon} alt="sun" />
          </button>
        )}
        <input type="checkbox" id="check" checked={hamburger} onChange={() => changeHamburgerFunc(hamburger)} />
        <label htmlFor="check" className="check-btn" id="hamburger" aria-expanded="false">
          <img className="hamburger" src={hamburgerIcon} alt="hamburger" />
        </label>
        <div className="nav-mobile" id="nav-mobile">
          <div className="images">
            <img src={navDecorationImg} alt="christmas lights" />
            <button onClick={handleHamburgerClick}>
              <img src={closeIcon} alt="x" />
            </button>
          </div>
          <div className="links">
            <a className="" href="#home" onClick={handleHamburgerClick}>
              Home
            </a>
            <a className="" href="#celebrate" onClick={handleHamburgerClick}>
              Celebrate
            </a>
            <a className="" href="#gifts" onClick={handleHamburgerClick}>
              Gifts
            </a>
            <a className="" href="#new" onClick={handleHamburgerClick}>
              New
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
