import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com/";
axios.defaults.baseURL = BASE_URL;

async function getData(path) {
	const { data } = await axios.get(path);
	return data;
}

export { getData };
