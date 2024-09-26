const sectionRenderPhoto = document.querySelector(".pictures");

// Шаблон как HTML строка
const pictureTemplate = `        
  <a href="#" class="picture">
    <img
      class="picture__img"
      src=""
      width="182"
      height="182"
      alt="Випадкова фотографія"
    />
    <p class="picture__info">
      <span class="picture__comments"></span>
      <span class="picture__likes"></span>
    </p>
  </a>`;

function createPictureElement(photo) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = pictureTemplate.trim();
  const pictureElement = tempDiv.firstChild;

  pictureElement.querySelector(".picture__img").src = photo.url;
  pictureElement.querySelector(".picture__likes").textContent = photo.likes;
  pictureElement.querySelector(".picture__comments").textContent =
    photo.comments.length;

  return pictureElement;
}

export function renderOnePicture(photo) {
  const pictureElement = createPictureElement(photo);
  sectionRenderPhoto.appendChild(pictureElement);
}

export function renderPicture(photos) {
  const fragment = document.createDocumentFragment();

  photos.map((photo) => {
    const pictureElement = createPictureElement(photo);
    fragment.appendChild(pictureElement);
  });

  sectionRenderPhoto.appendChild(fragment);
}
