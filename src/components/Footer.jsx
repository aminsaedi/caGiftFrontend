import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerDetailContainer">
        <div className="enamadContainer">
          <img src="./images/samples/enamad.png" alt="" />
        </div>
        <div className="footer__categoriesContainer">
          <div className="footer__categoryContainer">
            <p className="footer__category__header">بچه های تیممون</p>
            <a className="footer__category__item" href="/">
              امین (برنامه نویس تیم)
            </a>
            <a className="footer__category__item" href="/">
              ممد (مدیر خرید و فروش)
            </a>
            <a className="footer__category__item" href="/">
              امیر (مدیر پشتیبانی)
            </a>
            <a className="footer__category__item" href="/">
              حسین (مدیر UI/UX تیم)
            </a>
          </div>
          <div className="footer__categoryContainer">
            <p className="footer__category__header">اکانت هامون</p>
            <a className="footer__category__item" href="/">
              اکانت CS Go
            </a>
            <a className="footer__category__item" href="/">
              اکانت Valorant
            </a>
            <a className="footer__category__item" href="/">
              اکانت Leage of Legends
            </a>
          </div>
          <div className="footer__categoryContainer">
            <p className="footer__category__header">گیفت کارت هامون</p>
            <a className="footer__category__item" href="/">
              گیفت کارت استیم
            </a>
            <a className="footer__category__item" href="/">
              گیفت کارت اپل
            </a>
            <a className="footer__category__item" href="/">
              گیفت کارت اسپتایفای
            </a>
          </div>
        </div>
        <div className="footerDetail__textsContainer">
          <img src="./logo.png" alt="logo" className="footer__logo" />
          <div className="footer__mobileContainer">
            <FontAwesomeIcon icon={faPhone} />
            <p>+1 (384) 123-456</p>
          </div>
          <div className="footer__socialMediaContainer">
            <div className="footer__socialMedia">1</div>
            <div className="footer__socialMedia">2</div>
            <div className="footer__socialMedia">3</div>
          </div>
        </div>
      </div>
      <div className="footerCopyrightContainer">
        <p className="footerCopyrightText">
          ۱۴۰۰ - کلیه حقوق این فروشگاه محفوظ است
        </p>
      </div>
    </footer>
  );
};

export default Footer;
