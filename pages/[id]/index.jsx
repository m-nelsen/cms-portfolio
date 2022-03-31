import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import template from "../../components/pagebuilder/template.json";
import Layout from "../../components/layout";

/*
  This will be the main entry point for end users. All pages and content will be viewed from here.

  Goal with this page:
  --------------------
    - Get URL 'id' from router.query
    - Pass URL to resolver to determine page template and associated content
    - Build page with layout and content
*/

const PageById = () => {
  const [state, setState] = useState();

  const router = useRouter();
  const { id } = router.query;

  const mockContent = {
    _id: {
      $oid: "622d4f402ec0293ea7e90094",
    },
    contentElements: [
      {
        type: "text",
        content:
          "This is the homepage for my portfolio. Most of my general information will display here, including projects and past experience as a web developer.",
        _id: {
          $oid: "622d4f402ec0293ea7e90095",
        },
      },
      {
        type: "text",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus et molestie ac feugiat sed lectus vestibulum mattis.",
        _id: {
          $oid: "622d4f402ec0293ea7e90096",
        },
      },
    ],
    description: "Portfolio by me",
    title: "Homepage",
    layout: "Default",
    __v: 0,
  };

  useEffect(() => {
    if (id && id !== "test") {
      const data = fetch(`http://localhost:3000/api/contentById/${id}`)
        .then((res) => res.json())
        .then(({ data }) => {
          setState(data);
        });
    }
  }, [id]);

  return (
    <>
      <Layout template={template} />
    </>
  );
};

export default PageById;
