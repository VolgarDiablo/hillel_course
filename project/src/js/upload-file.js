const imgUploadOverlay = document.querySelector(".img-upload__overlay");
const btnUploadCancel = document.querySelector("#upload-cancel");
const hashTags = document.getElementsByName("hashtags")[0];
const form = document.querySelector("#upload-select-image");
const btnUploadSubmit = document.querySelector("#upload-submit");
const smallerButton = document.querySelector(".scale__control--smaller");
const biggerButton = document.querySelector(".scale__control--bigger");
const scaleValueInput = document.querySelector(".scale__control--value");
const image = document.querySelector(".img-upload__preview");
const classListImage = image.classList;
const effectSlider = document.querySelector(".effect-level__slider");
const effectLevelValue = document.querySelector(".effect-level__value");

if (document.querySelector(".effects__radio:checked").value === "none") {
  effectSlider.style.display = "none";
} else {
  effectSlider.style.display = "block";
}

let currentScale = 100;

export function uploadFile(file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("image-preview").src = e.target.result;

    const effectsPreviewElements =
      document.querySelectorAll(".effects__preview");
    effectsPreviewElements.forEach((element) => {
      element.style.backgroundImage = `url(${e.target.result})`;
    });
  };
  reader.readAsDataURL(file);
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
  if (
    event.key === "Escape" &&
    !isHasFocusInput() &&
    !imgUploadOverlay.classList.contains("hidden")
  ) {
    closeBigPicture();
  }
});

function closeBigPicture() {
  imgUploadOverlay.classList.add("hidden");
  document.body.classList.remove("modal-open");

  image.removeAttribute("style");

  currentScale = 100;
  scaleValueInput.value = `${currentScale}%`;
  scaleValueInput.setAttribute("value", `${currentScale}%`);
  image.style.transform = `scale(1)`;

  // classListImage.forEach((className) => {
  //   if (className.startsWith("effects__preview--")) {
  //     classListImage.remove(className);
  //   }
  // });

  if (classListImage.length > 1) {
    classListImage.remove(classListImage[1]);
  }

  effectSlider.style.display = "none";
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

// document.querySelectorAll(".effects__label").forEach((label) => {
//   label.addEventListener("click", (event) => {
//     const previewElement = event.target;
//     const classList = previewElement.classList;
//     const secondClass = classList[1];

//     if (classListImage.length > 1) {
//       classListImage.remove(classListImage[1]);
//     }
//     image.classList.add(secondClass);
//   });
// });

noUiSlider.create(effectSlider, {
  start: 100,
  range: {
    min: 0,
    max: 100,
  },
  step: 1,
  connect: "lower",
});

document.querySelectorAll(".effects__radio").forEach((radio) => {
  radio.addEventListener("change", (event) => {
    const effect = event.target.value;

    classListImage.forEach((className) => {
      if (className.startsWith("effects__preview--")) {
        classListImage.remove(className);
      }
    });

    if (effect !== "none") {
      image.classList.add(`effects__preview--${effect}`);
      effectSlider.style.display = "block";
    } else {
      effectSlider.style.display = "none";
      image.style.filter = "none";
    }

    effectSlider.noUiSlider.set(100);
    updateImageEffect(effect, 100);
  });
});

effectSlider.noUiSlider.on("update", (values) => {
  const level = values[0];
  const currentEffect = document.querySelector(".effects__radio:checked").value;
  updateImageEffect(currentEffect, level);
  effectLevelValue.value = Math.round(level);
});

function updateImageEffect(effect, level) {
  switch (effect) {
    case "chrome":
      image.style.filter = `grayscale(${(level / 100).toFixed(1)})`;
      break;
    case "sepia":
      image.style.filter = `sepia(${(level / 100).toFixed(1)})`;
      break;
    case "marvin":
      image.style.filter = `invert(${level}%)`;
      break;
    case "phobos":
      image.style.filter = `blur(${((level / 100) * 3).toFixed(1)}px)`;
      break;
    case "heat":
      image.style.filter = `brightness(${((level / 100) * 2 + 1).toFixed(1)})`;
      break;
    default:
      image.style.filter = "none";
      break;
  }
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
