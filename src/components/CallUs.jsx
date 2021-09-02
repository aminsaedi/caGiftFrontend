import React from "react";

const CallUs = () => {
  return (
    <div className="callUs">
      <p className="callUs__title">----------تماس با ما----------</p>
      <p className="callUs__description">
        برای ارتباط با تیم پشتیبانی ما شما میتونید از طریق تلگرام با{" "}
        <a className="callUs__link" href="/">
          کلیلک
        </a>{" "}
        کردن روی این لینک و همجنین میتونین توی{" "}
        <a className="callUs__link" href="/">
          توییتر
        </a>{" "}
        تگمون کنین.بچه های تیم فنی در حال کار بر روی اضافه کردن بخش تیکتینگ به
        سی‌ای گیفت هستن
      </p>
    </div>
  );
};

export default CallUs;
