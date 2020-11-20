import Axios from "axios";
import React from "react";
import config from "../../config.js";

const Button = () => {
  const apiUrl = `${config.API_URL_WITH_KEY}/applyScene`;

  // truning lights on handle event

  let handleOn = (e) => {
    e.preventDefault();
    Axios.post(apiUrl, {
      id: "allOn",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // truning lights off handle event

  let handleOff = (e) => {
    e.preventDefault();
    Axios.post(apiUrl, {
      id: "allOff",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Lights Off");
  };

  //setting the lights to 70% handle event

  let handleLowerLight = (e) => {
    e.preventDefault();
    Axios.post(apiUrl, {
      id: "578e7d3b-7d4e-4b00-ae65-e0a14c3ac45d",
      state: {
        on: true,
        bri: 157,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("70 % dim");
  };

  // truning lights to 30%  handle event

  let handleLesserLight = (e) => {
    e.preventDefault();
    Axios.post(apiUrl, {
      id: "578e7d3b-7d4e-4b00-ae65-e0a14c3ac45d",
      state: {
        on: true,
        bri: 68,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("30% lights");
  };

  return (
    <div className="button-container">
      <div className="button-div">
        <button className="on" onClick={handleOn}>
          <p>All on</p>
        </button>
      </div>
      <div className="button-div">
        <button className="on-70" onClick={handleLowerLight}>
          <p>70 %</p>
        </button>
      </div>
      <div className="button-div">
        <button className="on-30" onClick={handleLesserLight}>
          <p>30 %</p>
        </button>
      </div>
      <div className="button-div">
        <button className="off" onClick={handleOff}>
          <p>Lights off</p>
        </button>
      </div>
    </div>
  );
};

export default Button;
