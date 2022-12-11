import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="d-flex">
            <img src={logo} alt="logo" />
            <div>Management System</div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
