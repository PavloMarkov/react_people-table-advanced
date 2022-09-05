import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  name: string;
};

export const HeaderNavLink: React.FC<Props> = ({ to, name }) => (
  <NavLink
    className={({ isActive }) => classNames(
      'navbar-item', { 'has-background-grey-lighter': isActive },
    )}
    to={to}
  >
    {name}
  </NavLink>
);
