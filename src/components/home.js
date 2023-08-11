import { getData } from '../api';
import { usersWrapperEl, loader } from '../refs';
import { addMarkup } from '../helpers';
import { markupUsers } from '../markup';

async function onLoaded() {
  try {
    loader.classList.remove('is-hidden');
    const arr = await getData('users');

    addMarkup(usersWrapperEl, markupUsers(arr));
  } catch (err) {
    console.log(err.message);
  } finally {
    loader.classList.add('is-hidden');
  }
}

usersWrapperEl.addEventListener('click', onClick);

function onClick(event) {
  const id = event.target.closest('tr').dataset.userid;
  location.href = `user.html?userid=${id}`;
}

onLoaded();
