// Ảnh Slide
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Chuyển slide mỗi 5 giây
showSlide(currentSlide);

// Hiệu ứng mượt mà với GSAP (có thể thay đổi thêm)
gsap.from(".header", { opacity: 0, y: -50, duration: 1 });
gsap.from(".slide img", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });
gsap.from(".product-info", { opacity: 0, x: -100, duration: 1 });
gsap.from(".office-support", { opacity: 0, x: 100, duration: 1 });
gsap.from(".payment-method", { opacity: 0, y: 50, duration: 1 });
gsap.from(".contact-info", { opacity: 0, y: 50, duration: 1 });

// Lấy phần tử menu và menu toggle
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Thêm sự kiện khi nhấn vào menu toggle
menuToggle.addEventListener("click", function () {
  menu.classList.toggle("show");
});
