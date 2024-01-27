import { getData } from "../api";
import { markupByUserId, createListAlbum } from "../markup";
import { addmarkup } from "../helpers";
import { jsTrEl, albumEl } from "../refs";
const paramsString = location.search;
const searchParams = new URLSearchParams(paramsString);
const userId = searchParams.get("userid");
async function start() {
    try {
        const [data] = await getData("users?id=" + userId);
        const markup = markupByUserId(data);
        addmarkup(jsTrEl, markup);
    } catch (error) {
        console.log(error.message);
    }
}
start();
async function init() {
    try {
        const data = await getData("albums?userId=" + userId);
        const markup = createListAlbum(data);
        addmarkup(albumEl, markup);
    } catch (error) {
        console.log(error.message);
    }
}
init();