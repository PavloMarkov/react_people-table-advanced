import { URLS } from '../utils/URLS';
import { HeaderNavLink } from './HeaderNavLink';

export const Navbar = () => {
  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <HeaderNavLink
            to={URLS.baseHome}
            name="Home"
          />
          <HeaderNavLink
            to={URLS.people}
            name="People"
          />
        </div>
      </div>
    </nav>
  );
};
