import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#5e595928",
        marginTop: "20px",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "start" }}>
        <h6>ABOUT US</h6>
        <br />
        <p>
          Rubixe™ is a global technology company specializing in disruptive
          <br></br>
          technologies – Artificial Intelligence (AI), Machine Learning, Robotic
          Process <br /> Automation (RPA), BlockChain and Internet of Things
          (IoT). Rubixe mission
          <br></br> to enable businesses to leverage the full potential of
          disruptive
          <br></br>technologies to stay competitive in the market.
        </p>
      </div>
      <div style={{ textAlign: "start" }}>
        <h6>MENUS</h6>
        <ul style={{ listStyle: "none" }}>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>services</a>
          </li>
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Career</a>
          </li>
        </ul>
      </div>
      <div style={{ textAlign: "start" }}>
        <h6>Learn more</h6>
        <ul style={{ listStyle: "none" }}>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div style={{ textAlign: "start" }}>
        <h6>Address</h6>
        <div>
          Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka
          560068
          <br />
          Phone: 0804-717-8999
          <br />
          Email: hi@rubixe.com
        </div>
        <h6>Social Media</h6>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "40px",
          }}
        >
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-linkedin"></a>
        </div>
      </div>
    </div>
  );
}
