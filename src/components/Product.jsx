import React from "react";
import classes from "./Product.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../theme.css";

const addToCart = (e) => {
  e.preventDefault();
};
const Product = ({ id, title, price, artist, front, back }) => {
  return (
    <div className={classes.productWrapper}>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        className={classes.image}
      >
        <img src={`/coins-small/${front}`} alt="coin" />
        <img src={`/coins-small/${back}`} alt="coin" />
      </Carousel>
      <div className={classes.details}>
        <div className={classes.titleAuthor}>
          <p className={classes.author}>Artist - {artist}</p>
          <p className={classes.title}>{title}</p>
        </div>
        <div className={classes.priceAndAdd}>
          <p className={classes.price}>{price}</p>
          <button
            className={`snipcart-add-item ${classes.cartButton}`}
            data-item-id={title}
            data-item-price={price.slice(1)}
            data-item-url="https://artmint.com/"
            data-item-description="High-quality gold products"
            data-item-image={`/coins-small/${front}`}
            data-item-name={title}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
export default Product;
