import styles from './style.module.css';
import {MainProps} from "@/layout/Main/types";

export default function Main({children}: MainProps) {
  return (
    <main className={styles.main}>{children}</main>
  );
}