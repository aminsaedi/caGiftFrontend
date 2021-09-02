import React from "react";

const TextedBanner = ({ imageOnLeft = false }) => {
  return (
    <div
      className={
        imageOnLeft ? "textedBanner textedBanner__reverse" : "textedBanner "
      }
    >
      <div className="textedBanner__detailsContainer">
        <h2 className="textedBanner__title">گیفت کارت های تحویل فوری</h2>
        <p className="textedBanner__subtitle">
          گیفت کارت های تحویل فوری ما ی محصول جدیده که برای شما فراهم کردیم تا
          بتونین خیلی سریع به محض ثبت موفق سفارشتون گیفت کارت رو دریافت کنید و
          لذتشو ببرین. دلیل قیمت بالاتر این گیفا کارت ها اینه که بچه های تیم ما
          باید از قبل وقت بزارن و گیفت کارت های فیزیکی برای شما بخرن <br />
          راستی یادت نره!!! این گیفت کارت ها بهترین انتخاب توی مواقع نواسان های
          ارزیه چون با قیمت قبل خریداری شدن و توی انبار سی‌ای گیفت موجودن
        </p>
        <button className="textedBanner__button">سریع گیفت کارت بخر</button>
      </div>
      <div className="textedBanner__imageContainer">
        <img
          src="./images/samples/textedBannerRight.png"
          alt=""
          className="textedBanner__image"
        />
      </div>
    </div>
  );
};

export default TextedBanner;
