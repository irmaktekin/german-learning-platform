import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CategoriesPage.js"; // Import your custom CSS for additional styling
import imageUrl2 from './assets/animalsgerman.avif'; // Adjust the path to where your logo is

const CategoriesPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Categories</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4" style={{ height: "357px" }}>
            <div className="card-body">

                <h5 className="card-text">Colors</h5>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
                <img src={imageUrl2} className="card-img-top"alt="Colors"/>
                <h5 className="card-text">Animals</h5>
            </div>
          </div>

        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Numbers</h5>
              <p className="card-text">Description for Category 3</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Alphabet</h5>
              <p className="card-text">Description for Category 4</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Months</h5>
              <p className="card-text">Description for Category 5</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Category 6</h5>
              <p className="card-text">Description for Category 6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
