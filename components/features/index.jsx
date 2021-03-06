import Banner from "./Banner";
import ImageTag from "./ImageTag";
import NavBar from "./NavBar";
import SiteLinks from "./SiteLinks";
import Text from "./Text";

export const Features = ({ props }) => {
  return (
    <div>
      {props.map((e, i) => {
        const { feature } = e;
        switch (feature) {
          case "Banner":
            return <Banner key={`feature-${i}`} props={e} />;
          case "Image":
            return <ImageTag key={`feature-${i}`} props={e} />;
          case "NavBar":
            return <NavBar key={`feature-${i}`} props={e} />;
          case "SiteLinks":
            return <SiteLinks key={`feature-${i}`} props={e} />;
          case "Text":
            return <Text key={`feature-${i}`} props={e} />;
          default:
            return <p key={`feature-${i}`}>No body feature found</p>;
        }
      })}
    </div>
  );
};

export const featuresList = [Banner, ImageTag, NavBar, SiteLinks, Text];

// eslint-disable-next-line import/no-anonymous-default-export
export default {};
