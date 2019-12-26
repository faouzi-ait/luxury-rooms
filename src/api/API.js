import axios from "axios";

const API = async url => {
  return await axios
    .get(url)
    .then(data => data)
    .catch(error => console.log(error));
};

export default API;
