import {NavLink} from "react-router-dom";
import styles from './style.module.css';
import logo from "@/assets/logo.svg";


export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt=""/>
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