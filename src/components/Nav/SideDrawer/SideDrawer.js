import React from 'react';
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


const sideDrawer = (props) => {

let attachedClasses = [classes.sideDrawer, classes.Close];
if(props.open) {
  attachedClasses = [classes.sideDrawer, classes.Open];
}
  return (
    <Aux>
    <Backdrop show={props.open} clicked={props.closed}/>
    <div className={attachedClasses.join(' ')}>
      <Logo height="11%"/>
      <nav>
        <NavItems />
      </nav>
    </div>
    </Aux>
  );
}

export default sideDrawer;
