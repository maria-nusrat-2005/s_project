// Contact Form Validation and Submission
document.getElementById("inquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your inquiry has been sent successfully.`);
    this.reset(); // Clear the form
  } else {
    alert("Please fill out all fields.");
  }
});

// Navigation background change on scroll
window.addEventListener("scroll", function () {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.style.background = "#222";
  } else {
    nav.style.background = "#333";
  }
});
const modal = document.getElementById("packageModal");
const closeBtn = document.querySelector(".close-btn");
const inquiryBtn = document.getElementById("closeAndInquiry");

// Open Modal and Populate Data
document.querySelectorAll(".view-details").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("modalTitle").innerText =
      button.getAttribute("data-title");
    document.getElementById("modalDesc").innerText =
      button.getAttribute("data-desc");
    document.getElementById("modalDuration").innerText =
      button.getAttribute("data-duration");
    document.getElementById("modalPrice").innerText =
      button.getAttribute("data-price");

    modal.style.display = "block";
  });
});

// Close Modal when clicking (x)
closeBtn.onclick = () => (modal.style.display = "none");

// Close Modal when clicking "Inquiry Now"
inquiryBtn.onclick = () => (modal.style.display = "none");

// Close Modal when clicking outside the box
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};
