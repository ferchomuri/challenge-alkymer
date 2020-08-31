import React, { useEffect, useContext } from "react";
import AppFinder from "../apis/AppFinder";
import { AppsContext } from "../context/AppsContext";

const AppList = (props) => {
  const { apps, setApps } = useContext(AppsContext);
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
          <tr>
            <td>free</td>
            <td>frefrire</td>
            <td>1</td>
            <td>5.22</td>
            <td>
              <button className="btn btn-warning">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>free</td>
            <td>frefrire</td>
            <td>1</td>
            <td>5.22</td>
            <td>
              <button className="btn btn-warning">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AppList;
