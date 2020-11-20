const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const config= {
  API_URL_WITH_KEY: `${API_URL}/${API_KEY}`,
  //API_URL_WITH_KEY : `https://api.mountkelvin.com/v1/site/needed-endurable-plough`,
};
export default config