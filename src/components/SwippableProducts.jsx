import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Product from "./Product";

const SwippableProducts = ({ label, products, subLabel, link }) => {
  const [sliderRef] = useKeenSlider({
    slidesPerView: 4,
    spacing: 25,
    loop: true,
    rtl: true,
    // rtl: true,
  });
  return (
    <section className="swippableProducts">
      <div>
        <p className="swippableProducts__title">----------{label}----------</p>
      </div>
      <div className="swippableProducts__itemsContainer">
        <div className="swippableProducts__next">next</div>
        <div className="swippableProducts__fwd">fwd</div>
        <div ref={sliderRef} className="keen-slider swippableProducts__items">
          <Product className="keen-slider__slide" />
          <Product className="keen-slider__slide" />
          <Product className="keen-slider__slide" />
          <Product className="keen-slider__slide" />
          <Product className="keen-slider__slide" />
          <Product className="keen-slider__slide" />
          <Product className="keen-slider__slide" />
          <Product className="keen-slider__slide" />
          <Product className="keen-slider__slide" />
        </div>
      </div>
      {subLabel && link && (
        <p className="swippableProducts__subTitle">
          برای دیدن همه {subLabel} اینجا{" "}
          <a className="swippableProducts__link" href="/">
            کلیک
          </a>{" "}
          کنید
        </p>
      )}
    </section>
  );
};

export default SwippableProducts;
