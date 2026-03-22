import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2> Dummy Store</h2>

      <nav className={styles.nav}>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </nav>
    </header>
  );
}
