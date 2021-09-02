import React from "react";

const MegaItem = ({ label, items }) => {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        {label}
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        {items && items.map((i) => <a href={i.link}>{i.label}</a>)}
      </div>
    </div>
  );
};

export default MegaItem;
