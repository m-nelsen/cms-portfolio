import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Pagebuilder from "../../../components/admin/Pagebuilder/index";

export const GlobalContext = React.createContext();

const PageById = () => {
  const router = useRouter();
  const { id } = router.query;

  const [state, setState] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/contentById/${id}`)
        .then((res) => res.json())
        .then(({ data }) => {
          if (data) {
            setState(data);
          }
        });
    }
  }, [id]);

  return (
    <GlobalContext.Provider value={state}>
      {state && <Pagebuilder />}
    </GlobalContext.Provider>
  );
};

export default PageById;
