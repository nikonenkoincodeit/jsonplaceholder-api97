import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com/";

axios.defaults.baseURL = BASE_URL;

async function getData(params = "") {
  const { data } = await axios.get(params);

  return data;
}

export { getData };
