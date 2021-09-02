import React from "react";
import MegaItem from "./MegaItem";
import CartNavbar from "./CartNavbar";
import NavbarUserStatus from "./NabvarUserStatus";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarUserStatus />
      <CartNavbar />
      <MegaItem
        label="دورهمی هامون"
        items={[
          { label: "تست یک", link: "#" },
          { label: "تست دو", link: "#" },
          { label: "تست سه", link: "#" },
        ]}
      />
      <MegaItem label="سفارش اختصاصی" />
      <MegaItem
        label="اکانت بازی"
        items={[
          { label: "اکانت ولورنت", link: "#" },
          { label: "اکانت سی‌اس گو", link: "#" },
          { label: "اکانت فیفا", link: "#" },
        ]}
      />
      <MegaItem
        label="گیفت کارت"
        items={[
          { label: "گیفت کارت استیم", link: "#" },
          { label: "گیفت کارت اسپاتیفای", link: "#" },
          { label: "گیفت کارت اپل", link: "#" },
        ]}
      />
      <img src="./logo.png" alt="logo" className="navbar__logo" />
    </nav>
  );
};

export default Navbar;
