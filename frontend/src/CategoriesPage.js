import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CategoriesPage.js"; 
import Navbar from "./navigation/Navbar"

const CategoriesPage = () => {
  return (
   <div className="navbar">
   <Navbar/>
    <div className="container mt-5">
      <h1 className="text-center mb-4">Categories</h1>
      <div className="row">



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
       </div>

  );
};

export default CategoriesPage;