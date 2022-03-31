import React from "react";
import SiteLinks from "./SiteLinks";

const Footer = ({ footer }) => {
  return (
    <div id="footer">
      {footer.map((e, i) => {
        const { feature } = e;
        switch (feature) {
          case "SiteLinks":
            return <SiteLinks key={`footer-feature-${i}`} props={e} />;
          default:
            return <p key={`footer-feature-${i}`}>No footer feature found</p>;
        }
      })}
    </div>
  );
};

export default Footer;
