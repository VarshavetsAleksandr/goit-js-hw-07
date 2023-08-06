import { galleryItems } from "./gallery-items.js";
// Change code below this line

// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
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

// 2.Реалізація делегування на ul.gallery і отримання url великого зображення.
gallery.addEventListener("click", handlerClickImg);

function handlerClickImg(evt) {
  if (evt.target === evt.currentTarget) {
    return;
  }
  // Зверни увагу на те, що зображення обгорнуте посиланням,
  // отже по кліку за замовчуванням користувач буде перенаправлений на іншу сторінку.
  // Заборони цю поведінку за замовчуванням.
  evt.preventDefault();

  // 4.Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
  const instance = basicLightbox.create(`
	<img src="${evt.target.dataset.source}" alt="${evt.target.alt}" />
`);
  instance.show();
  // 6. Закриття модального вікна клавішою Ескейп
  gallery.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
