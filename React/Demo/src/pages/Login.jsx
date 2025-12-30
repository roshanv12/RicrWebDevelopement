import React, { useState } from "react";
import { data } from "react-router-dom";

const Contact = () => {
  const [contactData, setContactData] = useState({
    Username: "",
    email: "",
    contact: "",
    password: "",
    confirm: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = () => {
    setContactData({
      username: "",
      email: "",
      contact: "",
      password: "",
      confirm: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(contactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
    _;
  };

  return (
    <>
      <div className="text-center d-flex flex-column w-auto gap-2 p-3 border bg-info-subtle align-items-center justify-content-center shadow">
        <h1 className=" w-25 d-flex align-items-center justify-content-center bg-warning-subtle shadow p-2 rounded-5">
          Login Form
        </h1>
        <div className="container w-auto fw-bold fs-5 bg-whiteo rounded bg-white p-3">
          <form
            onReset={handleClearForm}
            onSubmit={handleSubmit}
            className="text-center d-flex flex-column  w-auto gap-2 p-3 w-25 rounded p-4"
          >
            <div>
              <label htmlFor="username" className="fs-5">
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={contactData.username}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="text-primary ms-3 fs-5 border-0 rounded shadow p-2 mt-2"
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="text-primary ms-3  border-0 rounded shadow p-2 mt-2"
              />
            </div>

            <div>
              <label htmlFor="contact">Contact No.</label>
              <input
                type="number"
                name="contact"
                id="contact"
                value={contactData.contact}
                onChange={handleChange}
                placeholder="Enter your contact"
                className="text-primary ms-3 border-0 rounded shadow p-2"
              />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={contactData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="text-primary ms-3 border-0 rounded shadow p-2"
              />
            </div>

            <div>
              <label htmlFor="subject">Conform Password</label>
              <input
                type="password"
                name="confirm"
                id="confirm"
                value={contactData.confirm}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="text-primary ms-3 border-0 rounded shadow p-2"
              />
            </div>

            <div className="d-flex  justify-content-center gap-3 rounded-4 p-3 bg-warning-subtle">
              <button
                type="reset"
                className="btn btn-danger bg-danger-subtle fw-bold fs-5 text-black"
              >
                Clear Form
              </button>
              <button
                type="submit"
                className="btn fw-bold fs-5 shadow border border-black text-black bg-info-subtle"
              >
                {isLoading ? "Loading" : "Login Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
