import React, { useState, useContext, useEffect } from "react";
import { AppsContext } from "../context/AppsContext";
import AppFinder from "../apis/AppFinder";
import { useParams, useHistory } from "react-router-dom";

const UpdateApp = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const { apps } = useContext(AppsContext);
  const [name_app, setName] = useState("");
  const [image, setImage] = useState("");
  const [id_category, setCategory] = useState("");
  const [price_app, setPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await AppFinder.get(`/${id}`);
      console.log(response.data.data);
      setName(response.data.data.app.name_app);
      setPrice(response.data.data.app.price_app);
      setImage(response.data.data.app.image);
      setCategory(response.data.data.app.id_category);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateApp = await AppFinder.put(`/${id}`, {
      name: name_app,
      image,
      category: id_category,
      price: price_app,
    });
    history.push("/");
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            value={image}
            id="image"
            onChange={(e) => setImage(e.target.value)}
            className="form-control"
            type="text"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name_app}
            onChange={(e) => setName(e.target.value)}
            id="name_app"
            className="form-control"
            type="text"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            value={id_category}
            onChange={(e) => setCategory(e.target.value)}
            id="category_app"
            className="form-control"
            type="text"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            value={price_app}
            onChange={(e) => setPrice(e.target.value)}
            id="price_app"
            className="form-control"
            type="number"
          ></input>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateApp;
