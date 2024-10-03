/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://project/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i);\n\n//# sourceURL=webpack://project/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\n\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://project/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  //\n  // Note to future-self: No, you can't remove the `toLowerCase()` call.\n  // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\nfunction stringify(arr, offset = 0) {\n  var uuid = unsafeStringify(arr, offset);\n  // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n  return uuid;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://project/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80;\n\n  // Copy bytes to buffer, if provided\n  if (buf) {\n    offset = offset || 0;\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n    return buf;\n  }\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://project/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://project/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/js/util.js\");\n/* harmony import */ var _render_picture_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-picture.js */ \"./src/js/render-picture.js\");\n/* harmony import */ var _render_big_picture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-big-picture.js */ \"./src/js/render-big-picture.js\");\n/* harmony import */ var _upload_file_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-file.js */ \"./src/js/upload-file.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst picture = document.querySelector(\".pictures\");\r\n\r\nlet generatedPhotos = [];\r\nlet messagePhotos = [];\r\nlet descriptions = [];\r\nlet authorNames = [];\r\n\r\nasync function loadData() {\r\n  try {\r\n    const data = await fetch(\"./js/constants.json\").then((response) =>\r\n      response.json()\r\n    );\r\n\r\n    messagePhotos = data.commentsMessages;\r\n    descriptions = data.photoDescriptions;\r\n    authorNames = data.authorNames;\r\n\r\n    generatedPhotos = createPhotoObject();\r\n\r\n    (0,_render_picture_js__WEBPACK_IMPORTED_MODULE_1__.renderPicture)(generatedPhotos);\r\n  } catch (error) {\r\n    console.error(\"Ошибка при загрузке JSON:\", error);\r\n  }\r\n}\r\n\r\nfunction createComment() {\r\n  return {\r\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\r\n    avatar: `img/avatar-${(0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)(1, 6)}.svg`,\r\n    message: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayComments)(messagePhotos),\r\n    name: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayItem)(authorNames),\r\n  };\r\n}\r\n\r\nfunction createPhotoObject() {\r\n  return Array(25)\r\n    .fill()\r\n    .map((_, index) => ({\r\n      id: index + 1,\r\n      url: `photos/${index + 1}.jpg`,\r\n      description: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayItem)(descriptions),\r\n      likes: (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)(15, 200),\r\n      comments: [createComment()],\r\n    }));\r\n}\r\nloadData();\r\n\r\npicture.addEventListener(\"click\", (e) => {\r\n  const id = +e.target.dataset.id;\r\n  if (isNaN(id)) {\r\n    return;\r\n  }\r\n  (0,_render_big_picture_js__WEBPACK_IMPORTED_MODULE_2__.renderBigPicture)(id, generatedPhotos);\r\n});\r\n\r\ndocument.getElementById(\"upload-file\").onchange = function () {\r\n  const file = document.getElementById(\"upload-file\").files[0];\r\n  if (file) {\r\n    const typeUploadFile = file.type;\r\n\r\n    if (typeUploadFile.startsWith(\"image/\")) {\r\n      (0,_upload_file_js__WEBPACK_IMPORTED_MODULE_3__.uploadFile)(file);\r\n    } else {\r\n      alert(\"Please upload an image file\");\r\n    }\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://project/./src/js/main.js?");

/***/ }),

/***/ "./src/js/render-big-picture.js":
/*!**************************************!*\
  !*** ./src/js/render-big-picture.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBigPicture: () => (/* binding */ renderBigPicture)\n/* harmony export */ });\nconst bigPicture = document.querySelector(\"#big-picture\");\r\nconst btnCloseBigPicture = document.querySelector(\"#picture-cancel\");\r\nconst btnLoadMoreComments = document.querySelector(\".social__comments-loader\");\r\n\r\nfunction renderBigPicture(id, photos) {\r\n  const focusedElement = document.querySelector(\".picture:focus\");\r\n  removeFocus(focusedElement);\r\n\r\n  const photoData = photos.find((photo) => photo.id === id);\r\n  if (isBigPictureHidden()) {\r\n    showBigPicture();\r\n    setDataImg(photoData);\r\n  }\r\n}\r\n\r\nfunction removeFocus(element) {\r\n  if (element) {\r\n    element.blur();\r\n  }\r\n}\r\n\r\nfunction isBigPictureHidden() {\r\n  return bigPicture.classList.contains(\"hidden\");\r\n}\r\n\r\nbtnCloseBigPicture.addEventListener(\"click\", () => {\r\n  closeBigPicture();\r\n});\r\n\r\ndocument.addEventListener(\"keydown\", (event) => {\r\n  if (event.key === \"Escape\") {\r\n    closeBigPicture();\r\n  }\r\n});\r\n\r\nfunction showBigPicture() {\r\n  bigPicture.classList.remove(\"hidden\");\r\n  document.body.classList.add(\"modal-open\");\r\n}\r\n\r\nfunction closeBigPicture() {\r\n  bigPicture.classList.add(\"hidden\");\r\n  document.body.classList.remove(\"modal-open\");\r\n}\r\n\r\nfunction setDataImg(photoData) {\r\n  const bigPictureImg = bigPicture.querySelector(\".big-picture__img img\");\r\n  const likesCount = bigPicture.querySelector(\".likes-count\");\r\n  const commentsCount = bigPicture.querySelector(\".comments-count\");\r\n\r\n  bigPictureImg.src = photoData.url;\r\n  likesCount.textContent = photoData.likes;\r\n  commentsCount.textContent = photoData.comments.length;\r\n\r\n  renderComments(photoData.comments);\r\n}\r\n\r\nfunction renderComments(comments) {\r\n  const commentsList = bigPicture.querySelector(\".social__comments\");\r\n  commentsList.innerHTML = \"\";\r\n\r\n  const commentElements = comments.map(createCommentElement);\r\n  commentsList.append(...commentElements);\r\n}\r\n\r\nfunction createCommentElement(comment) {\r\n  const li = document.createElement(\"li\");\r\n  li.classList.add(\"social__comment\");\r\n\r\n  const img = document.createElement(\"img\");\r\n  img.classList.add(\"social__picture\");\r\n  img.src = comment.avatar;\r\n  img.alt = comment.name;\r\n  img.width = 35;\r\n  img.height = 35;\r\n\r\n  const p = document.createElement(\"p\");\r\n  p.classList.add(\"social__text\");\r\n  p.textContent = comment.message;\r\n\r\n  li.append(img, p);\r\n  return li;\r\n}\r\n\n\n//# sourceURL=webpack://project/./src/js/render-big-picture.js?");

/***/ }),

/***/ "./src/js/render-picture.js":
/*!**********************************!*\
  !*** ./src/js/render-picture.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderOnePicture: () => (/* binding */ renderOnePicture),\n/* harmony export */   renderPicture: () => (/* binding */ renderPicture)\n/* harmony export */ });\nconst sectionRenderPhoto = document.querySelector(\".pictures\");\r\n\r\nconst pictureTemplate = `        \r\n  <a href=\"#\" class=\"picture\">\r\n    <img\r\n      class=\"picture__img\"\r\n      src=\"\"\r\n      width=\"182\"\r\n      height=\"182\"\r\n      alt=\"Випадкова фотографія\"\r\n    />\r\n    <p class=\"picture__info\">\r\n      <span class=\"picture__comments\"></span>\r\n      <span class=\"picture__likes\"></span>\r\n    </p>\r\n  </a>`;\r\n\r\nfunction createPictureElement(photo) {\r\n  const tempDiv = document.createElement(\"div\");\r\n  tempDiv.innerHTML = pictureTemplate.trim();\r\n  const pictureElement = tempDiv.firstChild;\r\n  const imgElement = pictureElement.querySelector(\".picture__img\");\r\n\r\n  imgElement.setAttribute(\"data-id\", photo.id);\r\n  imgElement.src = photo.url;\r\n  imgElement.alt = `Photo ${photo.id}`;\r\n  pictureElement.querySelector(\".picture__likes\").textContent = photo.likes;\r\n  pictureElement.querySelector(\".picture__comments\").textContent =\r\n    photo.comments[0].message.length;\r\n\r\n  return pictureElement;\r\n}\r\n\r\nfunction renderOnePicture(photo) {\r\n  const pictureElement = createPictureElement(photo);\r\n  sectionRenderPhoto.appendChild(pictureElement);\r\n}\r\n\r\nfunction renderPicture(photos) {\r\n  const fragment = document.createDocumentFragment();\r\n\r\n  photos.map((photo) => {\r\n    const pictureElement = createPictureElement(photo);\r\n    fragment.appendChild(pictureElement);\r\n  });\r\n\r\n  sectionRenderPhoto.appendChild(fragment);\r\n}\r\n\n\n//# sourceURL=webpack://project/./src/js/render-picture.js?");

/***/ }),

/***/ "./src/js/upload-file.js":
/*!*******************************!*\
  !*** ./src/js/upload-file.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   uploadFile: () => (/* binding */ uploadFile)\n/* harmony export */ });\nconst imgUploadOverlay = document.querySelector(\".img-upload__overlay\");\r\nconst btnUploadCancel = document.querySelector(\"#upload-cancel\");\r\nconst hashTags = document.getElementsByName(\"hashtags\")[0];\r\nconst form = document.querySelector(\"#upload-select-image\");\r\nconst btnUploadSubmit = document.querySelector(\"#upload-submit\");\r\n\r\nfunction uploadFile(file) {\r\n  showBigPicture();\r\n}\r\n\r\nfunction showBigPicture() {\r\n  imgUploadOverlay.classList.remove(\"hidden\");\r\n  document.body.classList.add(\"modal-open\");\r\n}\r\n\r\nbtnUploadCancel.addEventListener(\"click\", () => {\r\n  closeBigPicture();\r\n});\r\n\r\nbtnUploadSubmit.addEventListener(\"click\", (event) => {\r\n  validateInputHashTags();\r\n  if (!form.checkValidity()) {\r\n    event.preventDefault();\r\n  } else console.log(\"good\");\r\n});\r\n\r\ndocument.addEventListener(\"keydown\", (event) => {\r\n  if (event.key === \"Escape\" && !isHasFocusInput()) {\r\n    closeBigPicture();\r\n  }\r\n});\r\n\r\nfunction closeBigPicture() {\r\n  imgUploadOverlay.classList.add(\"hidden\");\r\n  document.body.classList.remove(\"modal-open\");\r\n}\r\n\r\nfunction isHasFocusInput() {\r\n  const description = document.getElementsByName(\"description\")[0];\r\n\r\n  return (\r\n    document.activeElement === hashTags ||\r\n    document.activeElement === description\r\n  );\r\n}\r\n\r\nfunction validateInputHashTags() {\r\n  const valueHashTag = hashTags.value.trim().toLowerCase();\r\n  const tags = valueHashTag.split(\" \");\r\n  const hashtagPattern = /^#[a-zA-Zа-яА-Я0-9]+$/;\r\n  const tagsMaxCount = 5;\r\n  const oneTagMaxLength = 20;\r\n\r\n  const uniqueTags = new Set();\r\n  let errorMessage = \"\";\r\n\r\n  if (tags.length > tagsMaxCount) {\r\n    errorMessage = \"You cannot specify more than five hashtags.\";\r\n  } else {\r\n    for (let tag of tags) {\r\n      if (!tag.startsWith(\"#\")) {\r\n        errorMessage = \"A hashtag must begin with a symbol #.\";\r\n        break;\r\n      }\r\n      if (tag.length === 1) {\r\n        errorMessage = \"A hashtag cannot consist of only one character #.\";\r\n        break;\r\n      }\r\n      if (tag.length > oneTagMaxLength) {\r\n        errorMessage = \"The maximum length of one hashtag is 20 characters.\";\r\n        break;\r\n      }\r\n      if (!hashtagPattern.test(tag)) {\r\n        errorMessage =\r\n          \"A hashtag must contain only letters and numbers, without spaces or special characters.\";\r\n        break;\r\n      }\r\n      if (uniqueTags.has(tag)) {\r\n        errorMessage = \"The same hashtag cannot be used twice.\";\r\n        break;\r\n      }\r\n      uniqueTags.add(tag);\r\n    }\r\n  }\r\n\r\n  if (errorMessage) {\r\n    hashTags.setCustomValidity(errorMessage);\r\n  } else {\r\n    hashTags.setCustomValidity(\"\");\r\n  }\r\n\r\n  hashTags.reportValidity();\r\n}\r\n\n\n//# sourceURL=webpack://project/./src/js/upload-file.js?");

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRandomArrayComments: () => (/* binding */ getRandomArrayComments),\n/* harmony export */   getRandomArrayItem: () => (/* binding */ getRandomArrayItem),\n/* harmony export */   getRandomNumber: () => (/* binding */ getRandomNumber)\n/* harmony export */ });\nfunction getRandomNumber(min, max) {\r\n  return Math.floor(Math.random() * (max - min)) + min;\r\n}\r\n\r\nfunction getRandomArrayItem(array) {\r\n  return array[getRandomNumber(0, array.length)];\r\n}\r\n\r\nfunction getRandomArrayComments(array) {\r\n  const endIndex = getRandomNumber(0, array.length + 1);\r\n  return array.slice(0, endIndex);\r\n}\r\n\n\n//# sourceURL=webpack://project/./src/js/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;