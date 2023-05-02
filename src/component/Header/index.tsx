import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar-container">
      <h2 className="navbar-link">
        <Link to="/">Home</Link>
      </h2>
      <h2 className="navbar-link">
        <Link to="/tickers">Tickers</Link>
      </h2>
      <h2 className="navbar-link">
        <Link to="/chart">Chart</Link>
      </h2>
    </nav>
  );
}