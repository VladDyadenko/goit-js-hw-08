// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import templateFunction from "../templates/templateItem.hbs" ;
const  listImag = document.querySelector(".gallery");

const addImagesToList = galleryItems
.map(({preview, original, description}) => `<a class="gallery__item" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  alt="${description}"
/>
</a>`)
.join("");

listImag.insertAdjacentHTML('beforeend', addImagesToList);



const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    
});
