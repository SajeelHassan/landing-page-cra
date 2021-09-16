import React from "react";
import classes from "./Products.module.css";
import Product from "./Product";

const MY_PRODUCTS = [
  {
    title: "Chuck 24k Gold",
    front: "Chuck-24kgold-front-1.jpg",
    back: "chuck-24kgold-back-1.jpg",
    price: "$6000",
    artist: "Chuck",
  },
  {
    title: "Chuck Plated 1",
    front: "Chuck-plated-front-1.jpg",
    back: "Chuck-plated-back-1.jpg",
    price: "$6000",
    artist: "Chuck",
  },
  {
    title: "Chuck Plated 2",
    front: "Chuck-plated-front-2.jpg",
    back: "Chuck-plated-back-2.jpg",
    price: "$6000",
    artist: "Chuck",
  },
  {
    title: "Chuck Silver 1",
    front: "Chuck-silver-front-1.jpg",
    back: "Chuck-silver-back-1.jpg",
    price: "$6000",
    artist: "Chuck",
  },
  {
    title: "Chuck Silver 2",
    front: "Chuck-silver-front-2.jpg",
    back: "Chuck-silver-back-2.jpg",
    price: "$6000",
    artist: "Chuck",
  },
  {
    title: "Henry 24k Gold",
    front: "Henry-24kgold-front.jpg",
    back: "Henry-24kgold-back.jpg",
    price: "$6000",
    artist: "Henry",
  },
  {
    title: "Henry Plated",
    front: "Henry-plated-front.jpg",
    back: "Henry-plated-back.jpg",
    price: "$6000",
    artist: "Henry",
  },
  {
    title: "Henry Silver",
    front: "Henry-silver-front.jpg",
    back: "Henry-silver-back.jpg",
    price: "$6000",
    artist: "Henry",
  },
  {
    title: "Lita 24k Gold",
    front: "Lita-24kgold-front.jpg",
    back: "Lita-24kgold-back.jpg",
    price: "$6000",
    artist: "Lita",
  },
  {
    title: "Lita Plated",
    front: "Lita-plated-front.jpg",
    back: "Lita-plated-back.jpg",
    price: "$6000",
    artist: "Lita",
  },
  {
    title: "Lita Silver",
    front: "Lita-silver-front.jpg",
    back: "Lita-silver-back.jpg",
    price: "$6000",
    artist: "Lita",
  },
  {
    title: "Ry 24k Gold",
    front: "Ry-24kgold-front.jpg",
    back: "Ry-24kgold-back.jpg",
    price: "$6000",
    artist: "Ry",
  },
  {
    title: "Ry Plated",
    front: "Ry-plated-front-1.jpg",
    back: "Ry-plated-back-1.jpg",
    price: "$6000",
    artist: "Ry",
  },
  {
    title: "Ry Silver",
    front: "Ry-silver-front-1.jpg",
    back: "Ry-silver-back-1.jpg",
    price: "$6000",
    artist: "Ry",
  },
];
const Products = () => {
  return (
    <div className={classes.container}>
      {MY_PRODUCTS.map((prod) => (
        <div className={classes.product}>
          <Product
            title={prod.title}
            price={prod.price}
            front={prod.front}
            back={prod.back}
            artist={prod.artist}
          />
        </div>
      ))}
    </div>
  );
};
export default Products;
