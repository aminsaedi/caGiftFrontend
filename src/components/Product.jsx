import React from "react";

const Product = ({ product, className = "" }) => {
  return (
    <div className={"product " + className}>
      <div className="product__imageContainer">
        <img
          src="./images/samples/productOne.png"
          alt=""
          className="product__image"
        />
        <div className="product__addToCartContainer">
          <p>+</p>
        </div>
      </div>
      <div className="product__detail">
        <p className="product__name">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "}
        </p>
        <p className="product__price">49000 تومان</p>
      </div>
    </div>
  );
};

export default Product;
