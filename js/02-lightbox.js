import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Створення і рендер розмітки на підставі масиву даних galleryItems і
// наданого шаблону елемента галереї.Використовуй готовий код з першого завдання.

const gallery = document.querySelector(".gallery");
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
    </li>`
    )
    .join("");
}

gallery.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

// gallery.addEventListener("click", handlerClickImg);

// function handlerClickImg(evt) {
//   if (evt.target === evt.currentTarget) {
//     return;
//   }
//   evt.preventDefault();

//   const lightbox = new SimpleLightbox(".gallery a", {
//     captionsData: "alt",
//     captionDelay: 250,
//     docClose: true,
//   });
// }

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
