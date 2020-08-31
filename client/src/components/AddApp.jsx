import React from "react";

const AddApp = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Image" />
          </div>
          <div className="col">
            <select className="custom-select my-1 mr-sm-2">
              <option disabled>Price</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <button className="btn btn-primary">Add</button>
          <div className="col">
            <input type="text" className="form-control" placeholder="Price" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddApp;
