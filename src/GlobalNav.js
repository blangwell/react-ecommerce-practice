import { NavLink } from 'react-router-dom';

export default function GlobalNav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
}