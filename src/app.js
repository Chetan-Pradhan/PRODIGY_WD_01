window.addEventListener("load", () => {
  setTimeout(() => {
    const carCards = document.querySelectorAll(".car");
    const carImg = document.querySelectorAll(".carImg");
    const carText = document.querySelectorAll(".texts");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active"); // Remove active class on scroll back
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    carCards.forEach((card) => observer.observe(card));
    carImg.forEach((img) => observer.observe(img));
    carText.forEach((text) => observer.observe(text));
  }, 300); // 300ms delay to ensure DOM and styles are fully loaded
});

export default "./app.js";
