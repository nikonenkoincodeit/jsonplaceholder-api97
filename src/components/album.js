import { getParam, addMarkup } from "../helpers";
import { getData } from "../api";
import {  createCardMarkup } from "../markup";
import {  loader, galleryEl } from "../refs";

const param = location.search;
console.log(loader)

const id = getParam('albumid', param);


getAlbumById(id);

async function getAlbumById(id){
    try {
        loader.classList.remove('is-hidden')
        const photos = await getData(`photos?albumId=${id}`)
        addMarkup(galleryEl,createCardMarkup(photos) )

    } catch (error) {
        console.log(error.message)
    }
    finally{
        loader.classList.add('is-hidden')
    }
}