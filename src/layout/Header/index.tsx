import {NavLink} from "react-router-dom";
import styles from './style.module.scss';

export default function Header() {
    return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          <li><NavLink to='/' className={styles.link}>Home</NavLink></li>
          <li><NavLink to='/movies' className={styles.link}>Movies</NavLink></li>
          <li><NavLink to='/contact-me' className={styles.link}>Contact Me</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}