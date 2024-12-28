const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;

        img.src = img.dataset.src;

        img.onload = () => {
          img.classList.add("loaded");
        };

        observer.unobserve(img);
      }
    });
  },
  {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }
);

const lazyImages = document.querySelectorAll("img[data-src]");

lazyImages.forEach((img) => observer.observe(img));

// const button = document.getElementById("loadImagesButton");
// if (button) {
//   button.addEventListener("click", () => {
//     lazyImages.forEach((img) => {
//       if (!img.src) {
//         img.src = img.dataset.src;
//         img.onload = () => img.classList.add("loaded");
//         observer.unobserve(img);
//       }
//     });
//   });
// }

// Покращення - додати будь-яку анімацію
// Додати кнопку завантаження всіх картинок
// Динамічно масштабувати зображення на основі розмірів Viewport.
