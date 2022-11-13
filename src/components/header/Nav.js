import React from 'react';
import styles from './Nav.module.css';
import logo from '../../assets/images/Group.png';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <header className={styles['header']}>
      <nav className={styles.nav}>
        <img src={logo} alt="logo" />
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link to="/placetostay">Place to stay</Link>
          </li>
          <li className={styles.link}>
            <Link to="/nfts">NFTs</Link>
          </li>
          <li className={styles.link}>
            <Link to="/community">Community</Link>
          </li>
        </ul>
        <button className={styles.btn} type="button">
          Connect Wallet
        </button>
      </nav>
    </header>
  );
};

export default Nav;
