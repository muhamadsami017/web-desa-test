// Gallery functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".gallery-slide");
const dots = document.querySelectorAll(".nav-dot");

function showSlide(n) {
  slides[currentSlideIndex].classList.remove("active");
  dots[currentSlideIndex].classList.remove("active");

  currentSlideIndex = (n + slides.length) % slides.length;

  slides[currentSlideIndex].classList.add("active");
  dots[currentSlideIndex].classList.add("active");
}

function changeSlide(n) {
  showSlide(currentSlideIndex + n);
}

function currentSlide(n) {
  showSlide(n - 1);
}

// Auto slide every 15 seconds
setInterval(() => {
  changeSlide(1);
}, 15000);

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    "Terima kasih! Pesan Anda telah dikirim. Tim desa akan segera menindaklanjuti."
  );
  this.reset();
});

// Tab menu functionality
document.querySelectorAll(".tab-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((btn) => btn.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((panel) => {
      panel.classList.remove("active");
      panel.style.height = "0";
    });
    button.classList.add("active");
    const targetPanel = document.getElementById(button.dataset.tab);
    targetPanel.classList.add("active");
    const panelHeight = targetPanel.scrollHeight;
    targetPanel.style.height = panelHeight + "px";
    setTimeout(() => {
      targetPanel.style.height = "auto";
    }, 500); // Sesuai durasi transition

    // Scroll ke posisi dekat tab aktif
    const offset = document.querySelector(".tab-buttons").offsetHeight + 20; // 20px jarak
    window.scrollTo({
      top: targetPanel.offsetTop - offset,
      behavior: "smooth",
    });
  });
});

// Card accordion functionality
document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".card-header");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        const isActive = targetContent.classList.contains("active");
        accordionButtons.forEach((btn) => {
          const btnContent = document.getElementById(
            btn.getAttribute("data-target")
          );
          btnContent.classList.remove("active");
          btnContent.style.maxHeight = null;
          btn.classList.remove("active");
        });

        if (!isActive) {
          targetContent.classList.add("active");
          button.classList.add("active");
          targetContent.style.maxHeight = targetContent.scrollHeight + "px";
          setTimeout(() => {
            targetContent.style.maxHeight = "50vh"; // Sesuai CSS
          }, 500);
        }
      }
    });
  });

  // Aktifkan default (opsional)
  if (accordionButtons.length > 0) {
    accordionButtons[0].click(); // Aktifkan card pertama
  }
});

// Initialize when page loads (tambahan untuk tab default)
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelectorAll(".tab-btn").length > 0) {
    document.querySelectorAll(".tab-btn")[0].click(); // Aktifkan tab pertama
  }
});

document.addEventListener("DOMContentLoaded", function () {
  function toggleKepalaDesa() {
    const table = document.getElementById("tableKepalaDesa");
    const button = document.getElementById("KepalaDesa");

    if (table.style.display === "none" || table.style.display === "") {
      // Show table
      table.style.display = "block";
      button.classList.add("active");
    } else {
      // Hide table
      table.style.display = "none";
      button.classList.remove("active");
    }
  }

  // Attach event listener
  document.getElementById("KepalaDesa").onclick = toggleKepalaDesa;
});

document.addEventListener("DOMContentLoaded", function () {
  function toggleKepalaDesa() {
    const table = document.getElementById("tableKepalaDesa");
    const button = document.getElementById("KepalaDesa");

    if (table.style.display === "none" || table.style.display === "") {
      // Show table
      table.style.display = "block";
      button.classList.add("active");
    } else {
      // Hide table
      table.style.display = "none";
      button.classList.remove("active");
    }
  }

  // Attach event listener
  document.getElementById("KepalaDesa").onclick = toggleKepalaDesa;
});

// Toggle Sub Accordion
document.querySelectorAll(".sub-accordion-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const content = document.getElementById(targetId);
    const isActive = content.style.display === "block";

    content.style.display = isActive ? "none" : "block";
    this.classList.toggle("active");
  });
});





