import React, { useEffect, useContext } from "react";
import AppFinder from "../apis/AppFinder";
import { AppsContext } from "../context/AppsContext";
import { useHistory } from "react-router-dom";

const AppList = (props) => {
  const { apps, setApps } = useContext(AppsContext);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AppFinder.get("/");
        setApps(response.data.data.apps);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await AppFinder.delete(`/${id}`);
      setApps(
        apps.filter((app) => {
          return app.id_app !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    history.push(`/App/${id}/update`);
  };

  return (
    <div className="list-group">
      <table className="table table-hover">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Logo</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {apps &&
            apps.map((app) => {
              return (
                <tr key={app.id_app}>
                  <td>{app.image}</td>
                  <td>{app.name_app}</td>
                  <td>{app.id_category}</td>
                  <td>{app.price_app}</td>
                  <td>
                    <button
                      onClick={() => handleUpdate(app.id_app)}
                      className="btn. btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(app.id_app)}
                      className="btn. btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                  <td></td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AppList;
