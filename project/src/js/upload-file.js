const imgUploadOverlay = document.querySelector(".img-upload__overlay");
const btnUploadCancel = document.querySelector("#upload-cancel");
const hashTags = document.getElementsByName("hashtags")[0];
const form = document.querySelector("#upload-select-image");
const btnUploadSubmit = document.querySelector("#upload-submit");

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

  const uniqueTags = new Set();
  let errorMessage = "";

  if (tags.length > 5) {
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
      if (tag.length > 20) {
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
