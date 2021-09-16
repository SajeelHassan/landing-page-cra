import React from "react";
import classes from "./Product.module.css";

const Product = ({ title, price, artist, front, back }) => {
  return (
    <div className={classes.productWrapper}>
      <div className={classes.image}>
        <img src={`/coins/${front}`} alt="coin" />
      </div>
      <div className={classes.details}>
        <div className={classes.titleAuthor}>
          <p className={classes.author}>Artist - {artist}</p>
          <p className={classes.title}>{title}</p>
        </div>
        <div className={classes.priceAndAdd}>
          <p className={classes.price}>{price}</p>
          <button className={classes.cartButton}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
