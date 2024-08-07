document.addEventListener("DOMContentLoaded", () => {
  let slideIndex = 1;
  const slides = document.querySelectorAll(".mySlides");
  const dots = document.querySelectorAll(".dot");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const totalSlides = slides.length;

  const showSlide = (n) => {
    slideIndex = Math.max(1, Math.min(n, totalSlides));

    slides.forEach((slide, index) => {
      slide.style.display = index + 1 === slideIndex ? "block" : "none";
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index + 1 === slideIndex);
    });

    updateButtons();
  };

  const updateButtons = () => {
    prevButton.style.display = slideIndex === 1 ? "none" : "block";
    nextButton.style.display = slideIndex === totalSlides ? "none" : "block";
  };

  const changeSlide = (n) => {
    showSlide(slideIndex + n);
  };

  const setSlide = (n) => {
    showSlide(n);
  };

  prevButton.addEventListener("click", () => {
    changeSlide(-1);
  });

  nextButton.addEventListener("click", () => {
    changeSlide(1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      setSlide(index + 1);
    });
  });

  showSlide(slideIndex);
});
