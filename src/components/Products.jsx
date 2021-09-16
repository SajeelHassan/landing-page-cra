import React from "react";
import classes from "./Products.module.css";
import Product from "./Product";
const Products = () => {
  return (
    <div className={classes.container}>
      <div className={classes.product}>
        <Product />
      </div>
      <div className={classes.product}>
        <Product />
      </div>
      <div className={classes.product}>
        <Product />
      </div>
      <div className={classes.product}>
        <Product />
      </div>
      <div className={classes.product}>
        <Product />
      </div>
      <div className={classes.product}>
        <Product />
      </div>
    </div>
  );
};
export default Products;
