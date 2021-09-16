import React from "react";
import classes from "./Footer.module.css";
import logo from "../assets/images/artmint.png";
const Footer = () => {
  return (
    <div className={classes.wrap}>
      <div className={classes.footerWrap}>
        <div className={classes.info}>
          <img className={classes.logo} src={logo} alt="logo"></img>
          <p className={classes.address}>Los Angeles, California</p>
          <p className={classes.email}>info@artmint.com</p>
        </div>
        <div className={classes.copyright}>© 2021 ArtMint Inc.</div>
      </div>
    </div>
  );
};
export default Footer;
