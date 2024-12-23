import { useEffect, useState } from "react";
import "../styles/App.css";

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
      <h1>Christmas</h1>
      {theme === "light" ? (
        <button className="icon-button" onClick={() => changeThemeFunc(theme)}>
          <img src="src/assets/icons/bx-moon.svg" alt="moon" />
        </button>
      ) : (
        <button className="icon-button" onClick={() => changeThemeFunc(theme)}>
          <img src="src/assets/icons/bx-sun.svg" alt="sun" />
        </button>
      )}
      <input type="checkbox" id="check" checked={hamburger} onChange={() => changeHamburgerFunc(hamburger)} />
      <label htmlFor="check" className="check-btn" id="hamburger" aria-expanded="false">
        <img className="hamburger" src="src/assets/icons/bx-grid-alt.svg" alt="hamburger" />
      </label>
      <div className="nav-mobile" id="nav-mobile">
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
    </header>
  );
}

export default Header;
