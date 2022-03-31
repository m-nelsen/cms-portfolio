import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";

const Header = ({ header }) => {
  return (
    <div id="header">
      {header.map((e, i) => {
        const { feature } = e;
        switch (feature) {
          case "Banner":
            return <Banner key={`header-feature-${i}`} props={e} />;
          case "NavBar":
            return <NavBar key={`header-feature-${i}`} props={e} />;
          default:
            return <p key={`header-feature-${i}`}>No header feature found</p>;
        }
      })}
    </div>
  );
};

export default Header;
