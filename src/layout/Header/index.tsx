import {NavLink} from "react-router-dom";
import styles from './style.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li>
            <NavLink to='/' className={styles.link} style={({isActive}) => {
              return isActive ? {color: '#f8f8f8', backgroundColor: '#6f76fc', borderRadius: '.4rem'} : {}
            }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/movies' className={styles.link} style={({isActive}) => {
              return isActive ? {color: '#f8f8f8', backgroundColor: '#6f76fc', borderRadius: '.4rem'} : {}
            }}>
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact-me' className={styles.link} style={({isActive}) => {
              return isActive ? {color: '#f8f8f8', backgroundColor: '#6f76fc', borderRadius: '.4rem'} : {}
            }}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}