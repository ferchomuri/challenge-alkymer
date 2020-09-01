import React, { useState, useContext } from "react";
import AppFinder from "../apis/AppFinder";
import { AppsContext } from "../context/AppsContext";

const AddApp = () => {
  const { addApps } = useContext(AppsContext);
  const [name_app, setName] = useState("");
  const [image, setImage] = useState("");
  const [id_category, setCategory] = useState("Category");
  const [price_app, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AppFinder.post("/", {
        name: name_app,
        image,
        category: id_category,
        price: price_app,
      });
      addApps(response.data.data.app);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input
              value={name_app}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col">
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Image"
            />
          </div>
          <div className="col">
            <select
              value={id_category}
              onChange={(e) => setCategory(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Category</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="col">
            <input
              value={price_app}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Price"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddApp;
