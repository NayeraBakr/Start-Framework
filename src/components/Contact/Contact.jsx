import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-vh-100 d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="title">
          <h1 className="text-center display-6 fw-bold t-color ">
            CONTACT SECTION
          </h1>

          <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div id="line"></div>
            <i className="fa fa-solid fa-star t-color"></i>
            <div id="line"></div>
          </div>
        </div>

        <div className="w-50 mx-auto">
          <div className="input-container">
            <input
              id="uName"
              type="text"
              className="form-control mt-5 mb-5 border-0 border-bottom"
              placeholder="User Name"
            />
            <label htmlFor="uName" className="input-label">
              User Name :
            </label>
          </div>

          <div className="input-container">
            <input
              id="uAge"
              type="text"
              className="form-control mb-5 border-0 border-bottom"
              placeholder="User Age"
            />
            <label htmlFor="uAge" className="input-label">
              User Age :
            </label>
          </div>

          <div className="input-container">
            <input
              id="uEmail"
              type="email"
              className="form-control mb-5 border-0 border-bottom"
              placeholder="User Email"
            />
            <label htmlFor="uEmail" className="input-label">
              User Email :
            </label>
          </div>

          <div className="input-container">
            <input
              id="uPass"
              type="password"
              className="form-control mb-4 border-0 border-bottom"
              placeholder="User Password"
            />
            <label htmlFor="uPass" className="input-label">
              User Password :
            </label>
          </div>

          <button className="btn  ">send Message</button>
        </div>
      </div>
    </section>
  );
}