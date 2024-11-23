import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6">
          <form>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="col-md-6">
          <div className="mb-4">
            <h5>Our Address</h5>
            <p>1234 Street Name, City, Country</p>
          </div>
          <div className="mb-4">
            <h5>Email</h5>
            <p>contact@example.com</p>
          </div>
          <div className="mb-4">
            <h5>Phone</h5>
            <p>+123 456 7890</p>
          </div>
          <div className="mb-4">
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="btn btn-primary btn-sm me-2">
                Facebook
              </a>
              <a href="#" className="btn btn-info btn-sm me-2">
                Twitter
              </a>
              <a href="#" className="btn btn-danger btn-sm">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
