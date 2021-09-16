import React from 'react'
import classes from './Header.module.css';
import logo from '../assets/images/artmint.png'
const Header = ()=>{
    return(
        <div className={classes.headerWrapper}>
            <div className={classes.headerMain}>
            <div className={classes.logo}><img src={logo} alt='artmint.com'/></div>
            <div className={classes.navbar}>
                <ul className={classes.leftNav}>
                        <li>ARTISTS</li>
                        <li>GOLD MINE</li>
                        <li>GALLERY</li>
                </ul>
                <ul className={classes.rightNav}>
                    <li>info@artmint.com</li>
                </ul>
            </div>
        </div>
        </div>
    )
}
export default Header;