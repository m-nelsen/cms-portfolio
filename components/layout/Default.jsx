import { Features } from "../features/index";

const DefaultLayout = ({ template }) => {
  const { components } = template;
  const { body, footer, header } = components;

  return (
    <div className="container">
      <div className="notification is-primary"></div>
      <Features props={header} />
      <Features props={body} />
      <Features props={footer} />
    </div>
  );
};

export default DefaultLayout;
