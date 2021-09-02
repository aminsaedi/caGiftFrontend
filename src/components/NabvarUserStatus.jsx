import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const NavbarUserStatus = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  if (false)
    return (
      <div className="navbarUserStatus__loggedOut">
        <a href="/">وارد شوید</a>
        <p className="navbarUserStatus__loggedOut__spacer">|</p>
        <a href="/">عضویت</a>
      </div>
    );
  else
    return (
      <div
        className="navbarUserStatus__loggedIn"
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isExpanded ? (
          <FontAwesomeIcon
            color={isHovered ? "#606cec" : "#32325D"}
            icon={faChevronUp}
          />
        ) : (
          <FontAwesomeIcon
            color={isHovered ? "#606cec" : "#32325D"}
            icon={faChevronDown}
          />
        )}
        <p className="navbarUserStatus__loggedIn__title">حساب کاربری</p>
        <div
          className={
            !isExpanded
              ? "navbarUserStatus__loggedIn__content"
              : "navbarUserStatus__loggedIn__content navbarUserStatus__loggedIn__content--visible"
          }
        >
          <div className="navbarUserStatus__loggedIn__menuItem">
            <p className="navbarUserStatus__loggedIn__menuItem__text navbarUserStatus__loggedIn__menuItem__userName">
              امین ساعدی
            </p>
            <p className="navbarUserStatus__loggedIn__menuItem__email">
              amin.di.sam@gmail.com
            </p>
          </div>
          <div className="navbarUserStatus__loggedIn__menuItem">
            <p className="navbarUserStatus__loggedIn__menuItem__text navbarUserStatus__loggedIn__menuItem__orders">
              سفارشات
            </p>
          </div>
          <div className="navbarUserStatus__loggedIn__menuItem">
            <p className="navbarUserStatus__loggedIn__menuItem__text navbarUserStatus__loggedIn__menuItem__logout">
              خروج
            </p>
          </div>
        </div>
      </div>
    );
};

export default NavbarUserStatus;
