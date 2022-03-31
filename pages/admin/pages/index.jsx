import { useState, useEffect } from "react";

const Pages = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const data = fetch("http://localhost:3000/api/content")
      .then((res) => res.json())
      .then(({ data }) => {
        setState(data);
      });
  }, []);

  return (
    <>
      <nav className="navbar is-primary">
        <div className="navbar-item">
          <h1>Pages</h1>
        </div>
      </nav>
      <div>
        <div className="columns">
          {state &&
            state.map((page) => {
              return (
                <div key={page._id} className="column card m-5">
                  <div className="card-header">
                    <div className="card-header-title">{page.title}</div>
                  </div>
                  <div className="card-content">{page.description}</div>
                  <footer className="card-footer">
                    <a href={`/admin/pages/${page._id}`} className="card-footer-item">
                      Edit
                    </a>
                    <a href="" className="card-footer-item">
                      Delete
                    </a>
                  </footer>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Pages;
