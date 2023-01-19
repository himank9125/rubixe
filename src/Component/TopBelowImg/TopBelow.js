import React from "react";
import image from "../../Utils/picture2.jpg";
import classes from "./TopBelow.module.css";

export default function TopBelow() {
  return (
    <div className={classes.parent}>
      <div className={classes.child1}>
        <h3>WHO WE ARE</h3>
        <p>
          Rubixe™ is a global technology company specializing in disruptive
          technologies-Artificial Intelligence (AI) ,Machine Learning,Robotic
          process Automation (RPA),BlockChain, and Internet of Things(IoT).
          <br></br>
          Rubixe™ mission is to enable businesses to leverage the full potential
          of disruptive. technologies and stay competitve in the market,turning
          complex challenges into solution,providing a strategic competitive
          advantage that are more efficient, effective and predictable.
        </p>
      </div>
      <div>
        <img src={`${image}`} width="500px" alt="hs" />
      </div>
    </div>
  );
}
