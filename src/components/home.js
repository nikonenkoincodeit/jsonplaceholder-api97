import { getData } from "../api";
import { markupUsers } from "../markup";
import { tbody } from "../refs";
import { addmarkup } from "../helpers";

getData("users").then((data) => {
	const markup = markupUsers(data);
	addmarkup(tbody, markup);
});
