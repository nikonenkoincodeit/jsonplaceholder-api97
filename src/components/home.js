import { getData } from "../api";
import { markupUsers } from "../markup";
import { tbody } from "../refs";
import { addmarkup } from "../helpers";

async function start() {
    try {
        const data = await getData("users");
        const markup = markupUsers(data);
        addmarkup(tbody, markup);
    } catch (error) {
        console.log(error.message);
    }
}
start();

tbody.addEventListener('click', onClick)

function onClick(event) {
    event.preventDefault()
    location.href = "user.html?userid=" + event.target.closest('.js-tr').dataset.userid
}