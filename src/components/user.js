import { getParam, addMarkup } from "../helpers";
import { getData } from "../api";
import { markupByUserId, createListAlbum } from "../markup";
import { userEl, albumEl, loader } from "../refs";

const param = location.search;
console.log(loader)

const id = getParam('userid', param);

getAllData();

albumEl.addEventListener('click', onClick);

function onClick(evt){
    
    const id = evt.target.closest('.js-list-user-album').dataset.id;
    console.dir(evt.target)
  location.href = `album.html?albumid=${id}`;
}

async function getAllData(){
    try{
        loader.classList.remove('is-hidden')
       await Promise.all([getUserByID(id), getAlbumByUserId(id)])

    }
    catch(err){
        console.log(err.message)
    }
    finally{loader.classList.add('is-hidden') }
}


async function getUserByID(id){
try{

    const user = await getData(`users/${id}`)
    addMarkup(userEl, markupByUserId(user) )
    return user;
}
catch(err){
    console.log(err.message)
}

}

async function getAlbumByUserId(id){
    try{

        const albums = await getData(`albums?userId=${id}`)
        addMarkup(albumEl, createListAlbum(albums) )
        return albums;
    }
    catch(err){
        console.log(err.message)
    }
}