import Default from "../layout/Default";

const Layout = ({ props }) => {
  const { layout } = props;

  switch (layout) {
    case "default":
      return <Default template={props} />;
    default:
      return <p>No layout found</p>;
  }
};

export default Layout;
