import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li>
        <NavLink exact to="/" activeClassName={styles.selected}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/Services" activeClassName={styles.selected}>Services</NavLink>
      </li>
      <li>
        <NavLink to="/faq" activeClassName={styles.selected}>FAQ</NavLink>
      </li>
    </ul>
  </nav>
);


export default Nav;
