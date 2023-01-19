import React from "react";
import classes from "./Rubixe.module.css";
import image1 from "./Utils/01.jpg";
import image2 from "./Utils/02.jpg";
import image3 from "./Utils/03.jpg";
import image4 from "./Utils/04.jpg";
import image5 from "./Utils/05.jpg";

export default function RubixeInitiative() {
  return (
    <div>
      <h3 style={{ margin: "20px" }}>TECH FOR TEENS-A RUBIXE ® INITIATIVE</h3>
      <div className={classes.parent}>
        <div className={classes.child2}>
          <div style={{ justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: "#132743",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                zIndex: "3",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className={classes.circle} style={{ color: "#132743" }}>
                <b>01</b>
              </div>
            </div>
          </div>
          <div>
            <img src={`${image1}`} alt="01" />
            <b>
              <p>Intruducing AI to children in an age appropriate manner</p>
            </b>
          </div>
        </div>
        <div className={classes.child1}>
          <div>
            <b>
              <p>
                Gain awareness on AI and build an interactivee story around it
              </p>
            </b>
            <img src={`${image2}`} alt="02" />
          </div>
          <div style={{ justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: "#c3195d",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                zIndex: "3",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className={classes.circle} style={{ color: "#c3195d" }}>
                <b>02</b>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.child2}>
          <div style={{ justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: "#d55b3e",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                zIndex: "3",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className={classes.circle} style={{ color: "#d55b3e" }}>
                <b>03</b>
              </div>
            </div>
          </div>
          <div>
            <img src={`${image3}`} alt="03" />
            <b>
              <p>Acquire programming skills in a use-friendly format</p>
            </b>
          </div>
        </div>
        <div className={classes.child1}>
          <div>
            <b>
              <p>Exposure to mini projects on diverse topics</p>
            </b>
            <img src={`${image4}`} alt="04" />
          </div>
          <div style={{ justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: "green",
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                zIndex: "3",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className={classes.circle} style={{ color: "green" }}>
                <b>04</b>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.child2}>
          <div style={{ justifyContent: "center" }}>
            <div
              style={{
                backgroundColor: "#e94822",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                zIndex: "3",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className={classes.circle} style={{ color: "#e94822" }}>
                <b>05</b>
              </div>
            </div>
          </div>
          <div>
            <img src={`${image5}`} alt="05" />
            <b>
              <p>Train the teachers programme</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
