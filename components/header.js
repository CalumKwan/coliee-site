// components/Header.js
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/schedule">Schedule</Link>
          </li>
          <li>
            <Link href="/tasks">Tasks</Link>
          </li>
          <li>
            <Link href="/corpus">Corpus</Link>
          </li>
          <li>
            <Link href="/waiver">Memorandum Waiver</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
