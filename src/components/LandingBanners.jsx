import React from "react";

const LandingBanners = () => {
  return (
    <div className="bannersContainer">
      <div className="a">
        <img src="./images/banners/a.png" alt="orderTracking" />
        <p className="bannersContainer__itemTitle">پیگیری سفارش</p>
      </div>
      <div className="b">
        <div>
          <img src="./images/banners/b.png" alt="sittingOnChair" />
        </div>
        <div className="bannersContainer__doubleHorizontalText">
          <p className="bannersContainer__itemSubtitle">اگر اهل استیم هستی</p>
          <p className="bannersContainer__itemTitle">
            ما خیلی گیفت کارت براتون داریم
          </p>
          <button className="bannersContainer__button">
            مخصوص استیم باز ها
          </button>
        </div>
      </div>
      <div className="c">
        <div className="bannersContainer__doubleVerticalText">
          <p className="bannersContainer__itemSubtitle">
            محصولت و توی سایت پیدا نکردی ؟
          </p>
          <p className="bannersContainer__itemTitle">
            ما هرچیزی که بخوایی رو براتون میخریم حتی ی دونه
          </p>
        </div>
        <img src="./images/banners/c.png" alt="" />
        <button className="bannersContainer__button">سفارش اختصاصی</button>
      </div>
      <div className="d">
        <img src="./images/banners/d.png" alt="" />
        <div className="bannersContainer__doubleVerticalText">
          <p className="bannersContainer__itemSubtitle">اهل استیم هستی ؟ </p>
          <p className="bannersContainer__itemTitle">
            پس حتما گیفت کارت هاش به دردت میخوره
          </p>
        </div>
      </div>
      <div className="e">
        <div>
          <img src="./images/banners/e.png" alt="sittingOnChair" />
        </div>
        <div className="bannersContainer__doubleHorizontalText">
          <p className="bannersContainer__itemSubtitle">
            اگر تازه باهامون آشنا شدی
          </p>
          <p className="bannersContainer__itemTitle">
            حتما اینجا رو ی نگاه بنداز
          </p>
          <button className="bannersContainer__button">بریم نگاه کنیم</button>
        </div>
      </div>
      <div className="f">
        <div>
          <img src="./images/banners/f.png" alt="sittingOnChair" />
        </div>
        <div className="bannersContainer__doubleHorizontalText">
          <p className="bannersContainer__itemSubtitle">
            اگه دوست داری کیفیت بازی کردنتو ارتقا بدی حتما
          </p>
          <p className="bannersContainer__itemTitle">
            پک گیفت کارت های مارو نگاه کن
          </p>
          <button className="bannersContainer__button">بریم ببینیم</button>
        </div>
      </div>
      <div className="g">
        <img src="./images/banners/g.png" alt="" />
        <div className="bannersContainer__doubleVerticalText">
          <p className="bannersContainer__itemSubtitle">
            میخوایی لول اکانتتو زیاد کنی ؟
          </p>
          <p className="bannersContainer__itemTitle">اکانت های مارو نگاه کن</p>
        </div>
      </div>
      <div className="h">
        <img src="./images/banners/h.png" alt="" />
        <div className="bannersContainer__doubleVerticalText">
          <p className="bannersContainer__itemSubtitle">
            حیف که نمیشه از استیم خرید کرد
          </p>
          <p className="bannersContainer__itemTitle">
            بجاش میشه گیفت کارت هاشو خرید
          </p>
        </div>
      </div>
      <div className="i">
        <div>
          <img src="./images/banners/i.png" alt="sittingOnChair" />
        </div>
        <div className="bannersContainer__doubleHorizontalText">
          <p className="bannersContainer__itemSubtitle">
            اگه دوست داری کیفیت بازی کردنتو ارتقا بدی حتما
          </p>
          <p className="bannersContainer__itemTitle">
            پک گیفت کارت های مارو نگاه کن
          </p>
          <button className="bannersContainer__button">You Can Do It!</button>
        </div>
      </div>
    </div>
  );
};

export default LandingBanners;
