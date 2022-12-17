import {NavLink} from "react-router-dom";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/movies'>Movies</NavLink></li>
          <li><NavLink to='/contact-me'>Contact Me</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}