import { NavLink } from "react-router-dom"

export default function NavLinks () {
  const activeCSS = {color: "green"};
  const defaultCSS = {color: "black"};

  return (
    <ul>
      <li>
        <NavLink to="" end style={(state) => {
        return state.isActive ? activeCSS : defaultCSS}
        }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile" style={(state) => {
            return state.isActive ? activeCSS : defaultCSS
        }}>Profile</NavLink>
      </li>
      <li>
        <NavLink to="/about" style={(state) => {
          return state.isActive ? activeCSS : defaultCSS;
        }}>About</NavLink>
      </li>
    </ul>
  );
}