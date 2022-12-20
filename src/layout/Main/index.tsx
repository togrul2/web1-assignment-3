import {ReactNode} from "react";
import styles from './style.module.css';


type Props = {
  children: ReactNode
};

export default function Main({children}: Props) {
  return (
    <main className={styles.main}>{children}</main>
  );
}