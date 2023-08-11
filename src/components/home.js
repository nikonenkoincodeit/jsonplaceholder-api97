import { getData } from "../api";
import { usersWrapperEl, loader } from "../refs";
import { addMarkup } from "../helpers";
import { markupUsers } from "../markup";

async function onLoaded() {
  try {
    loader.classList.remove("is-hidden");
    const arr = await getData("users");

    addMarkup(usersWrapperEl, markupUsers(arr));
  } catch (err) {
    console.log(err.message);
  } finally {
    loader.classList.add("is-hidden");
  }
}

onLoaded();
