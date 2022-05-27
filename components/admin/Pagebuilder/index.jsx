import { useState } from "react";
import SidePanel from "../SidePanel";
import SlateEditor from "../SlateEditor";

const Pagebuilder = () => {
  const [slateValue, setSlateValue] = useState([]);

  return (
    <div className="columns" style={{ height: "100vh" }}>
      <div className="column is-one-fifth">
        <SidePanel slateValue={slateValue} />
      </div>
      <div className="column">
        <SlateEditor setSlateValue={setSlateValue} />
      </div>
    </div>
  );
};

export default Pagebuilder;
