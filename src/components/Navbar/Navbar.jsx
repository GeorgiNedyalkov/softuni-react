import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list-item">
          <a href="#">Home</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">About</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Profile</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Catalog</a>
        </li>
        <li className="navbar__list-item">
          <a href="#">Contact us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
