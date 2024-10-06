const imgUploadOverlay = document.querySelector(".img-upload__overlay");
const btnUploadCancel = document.querySelector("#upload-cancel");
const hashTags = document.getElementsByName("hashtags")[0];
const form = document.querySelector("#upload-select-image");
const btnUploadSubmit = document.querySelector("#upload-submit");
const smallerButton = document.querySelector(".scale__control--smaller");
const biggerButton = document.querySelector(".scale__control--bigger");
const scaleValueInput = document.querySelector(".scale__control--value");
const image = document.querySelector(".img-upload__preview");

let currentScale = 100;

export function uploadFile(file) {
  showBigPicture();
}

function showBigPicture() {
  imgUploadOverlay.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

btnUploadCancel.addEventListener("click", () => {
  closeBigPicture();
});

btnUploadSubmit.addEventListener("click", (event) => {
  validateInputHashTags();
  if (!form.checkValidity()) {
    event.preventDefault();
  } else console.log("good");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !isHasFocusInput()) {
    closeBigPicture();
  }
});

function closeBigPicture() {
  imgUploadOverlay.classList.add("hidden");
  document.body.classList.remove("modal-open");

  currentScale = 100;
  scaleValueInput.value = `${currentScale}%`;
  scaleValueInput.setAttribute("value", `${currentScale}%`);
  image.style.transform = `scale(${1})`;
}

smallerButton.addEventListener("click", () => {
  if (currentScale > 25) {
    currentScale -= 25;
    updateScaleValue();
  }
});

biggerButton.addEventListener("click", () => {
  if (currentScale < 100) {
    currentScale += 25;
    updateScaleValue();
  }
});

function updateScaleValue() {
  const newValue = `${currentScale}%`;
  scaleValueInput.value = newValue;
  scaleValueInput.setAttribute("value", newValue);
  updateImageScale(currentScale);
}

function updateImageScale(scale) {
  image.style.transform = `scale(${scale / 100})`;
}

function isHasFocusInput() {
  const description = document.getElementsByName("description")[0];

  return (
    document.activeElement === hashTags ||
    document.activeElement === description
  );
}

function validateInputHashTags() {
  const valueHashTag = hashTags.value.trim().toLowerCase();
  const tags = valueHashTag.split(" ");
  const hashtagPattern = /^#[a-zA-Zа-яА-Я0-9]+$/;
  const tagsMaxCount = 5;
  const oneTagMaxLength = 20;

  const uniqueTags = new Set();
  let errorMessage = "";

  if (tags.length > tagsMaxCount) {
    errorMessage = "You cannot specify more than five hashtags.";
  } else {
    for (let tag of tags) {
      if (!tag.startsWith("#")) {
        errorMessage = "A hashtag must begin with a symbol #.";
        break;
      }
      if (tag.length === 1) {
        errorMessage = "A hashtag cannot consist of only one character #.";
        break;
      }
      if (tag.length > oneTagMaxLength) {
        errorMessage = "The maximum length of one hashtag is 20 characters.";
        break;
      }
      if (!hashtagPattern.test(tag)) {
        errorMessage =
          "A hashtag must contain only letters and numbers, without spaces or special characters.";
        break;
      }
      if (uniqueTags.has(tag)) {
        errorMessage = "The same hashtag cannot be used twice.";
        break;
      }
      uniqueTags.add(tag);
    }
  }

  if (errorMessage) {
    hashTags.setCustomValidity(errorMessage);
  } else {
    hashTags.setCustomValidity("");
  }

  hashTags.reportValidity();
}
