import React, { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClearForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/jhbaskdjbf"
      );
      const data = {
        fullName,
        email,
        message,
      };
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="text-center text-danger fw-bolder ">
        <h1>Contact Us</h1>
        <div className="container mb-3 p-3 d-flex flex-column  shadow w-25  text-dark rounded shadow-lg">
          <form onReset={handleClearForm} onSubmit={handleSubmit}  >
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Enter your Name"
                className="text-primary border-0 rounded mx-2 p-2 shadow my-2"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your Email"
                className="text-primary border-0 rounded mx-2 p-2 shadow my-2"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Enter your Message"
                className="text-primary border-0 rounded mx-2 p-2 shadow my-2"
              ></textarea>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
              <button type="reset" className="btn btn-danger">
                Clear Form
              </button>
              <button type="submit" className="btn btn-success">
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
