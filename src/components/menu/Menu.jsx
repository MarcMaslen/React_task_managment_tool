import "./menu.scss";

export default function menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#signup">Sign Up</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Login">Login</a>
        </li>
      </ul>
    </div>
  );
}
