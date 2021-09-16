import React from "react";
import classes from "./Product.module.css";
import image from "../assets/images/products/charles.png";
const Product = () => {
  return (
    <div className={classes.productWrapper}>
      <div className={classes.image}>
        <img src={image} alt="coin" />
      </div>
      <div className={classes.details}>
        <div className={classes.titleAuthor}>
          <p className={classes.author}>Artist - Henry Vincent</p>
          <p className={classes.title}>.9999 fine gold 1/2 oz coin</p>
        </div>
        <div className={classes.priceAndAdd}>
          <p className={classes.price}>$3000</p>
          <button className={classes.cartButton}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
