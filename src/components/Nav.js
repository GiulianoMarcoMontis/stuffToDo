import { NavLink } from 'react-router-dom';

import '../styles/components/_nav.scss';

const Nav = () => {
  return (
    <header>
      <nav className="Nav">
        <div className="logo">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
        <div className="dash">
          <NavLink exact to="/dashboard">
            Dashboard
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
