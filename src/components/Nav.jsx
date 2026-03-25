const Nav = () => {
  return (
    <nav className="nav-bar">
      <div className="logo">LOGO</div>

      <div className="nav-wrapper">
        <ul className="nav-list">
          <li className="nav-items">
            <a href="#">Home</a>
          </li>
          <li className="nav-items">
            <a href="#">About</a>
          </li>
          <li className="nav-items">
            <a href="#">Services</a>
          </li>
          <li className="nav-items">
            <a href="#">Pricing</a>
          </li>
          <li className="nav-items">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      <div className="cta-wrapper">
        <button className="login cta">LOGIN</button>
        <button className="signup cta">SIGN UP</button>
      </div>
    </nav>
  );
};

export default Nav;
