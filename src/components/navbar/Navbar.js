import { Link, Outlet } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <>
    <nav>
      <h1>Math Magicians</h1>
      <ul className="nav-list">
        <li>
          {' '}
          <Link to="/">Home</Link>
          {' '}
        </li>
        <li>
          {' '}
          <Link to="/calculator">Calculator</Link>
          {' '}
        </li>
        <li>
          {' '}
          <Link to="/quote">Quote</Link>
          {' '}
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
);

export default Navbar;
