import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <Logo height="80%"/>
    <nav className={classes.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
)

export default Toolbar;
