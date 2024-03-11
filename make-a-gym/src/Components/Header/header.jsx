import './header.css';
import loginIcon from '../../multimedia/login.jpg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="search-container">
        <input type="text" placeholder="Buscar..." />
        <button type="submit">Buscar</button>
      </div>

      <h1 className="TittleP">
        <Link to="/">Make a Gym</Link>
      </h1>

      <div className="login-icon">
        <Link to="/Login">
          <img src={loginIcon} alt="login-icon" />
        </Link>
      </div>

      <div className="nav-container">
        <Link to="/Cart">
          <h1 className="seeCarrito">🛒</h1>
        </Link>
      </div>
    </header>
  );
}
