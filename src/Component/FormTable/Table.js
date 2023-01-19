import React, { useRef } from "react";
import "./Table.css";

function Table() {
  const nameInputref = useRef();
  const emailInputref = useRef();
  const mobileInputref = useRef();

  const submitInfromation = (e) => {
    e.preventDefault();
    const name = nameInputref.current.value;
    const email = emailInputref.current.value;
    const mobile = mobileInputref.current.value;
    if (name === "" || email === "" || mobile === "") {
      alert("please enter the infromation ");
      return;
    }
    if (!email.includes("@") || !email.includes(".com")) {
      alert("email is Invalid");
      return;
    }
    if (mobile.length !== 10) {
      alert("Phone number should be of 10 digit only");
      return;
    }

    alert(`My name is ${name} my email is ${email} my number is ${mobile}`);
  };

  return (
    <div className="container parent">
      <div className="row">
        <div className="col-sm first">
          <h1>GET IN TOUCH </h1>
          <h5>
            Please complete the form we will
            <br /> get back to you
          </h5>
        </div>
        <div className="col-sm second div">
          <form onSubmit={submitInfromation}>
            <label htmlFor="name">Name*</label>
            <br></br>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              ref={nameInputref}
            />
            <br></br>
            <label htmlFor="email">Email*</label>
            <br></br>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              ref={emailInputref}
            />
            <br></br>
            <label htmlFor="phone">Mobile Number*</label>
            <br></br>
            <input
              type="number"
              placeholder="Enter your mobile nubmer"
              ref={mobileInputref}
            />
            <br></br>
            {/* <input type="submit" value="Register Now" /> */}
            <button className="submit">Register Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Table;
