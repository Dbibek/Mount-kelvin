import React, { useState, useEffect } from "react";
import Axios from "axios";
import config from '../../config.js';

const Data = () => {
  const [appState, setAppState] = useState({
    name: "",
    scenes: [],
  });

  useEffect(() => {
    Axios.get(config.API_URL_WITH_KEY)
      .then((fetchdata) => {
        const result = fetchdata.data;
        setAppState(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setAppState]);

  return (
    <div>
      <h1>{appState.name}</h1>
    </div>
  );
};

export default Data;
