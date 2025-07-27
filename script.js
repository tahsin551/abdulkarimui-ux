// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form validation (simple)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="_replyto"]');
    const message = form.querySelector('textarea[name="message"]');

    if (!name.value || !email.value || !message.value) {
      e.preventDefault();
      alert('Please fill in all fields before submitting.');
    }
  });
}

// (Optional) Dark mode toggle — uncomment to enable
/*
const darkToggle = document.createElement('button');
darkToggle.textContent = "🌙";
darkToggle.classList.add('dark-toggle');
document.body.appendChild(darkToggle);

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
*/

// You can add scroll-triggered animations later with AOS or ScrollReveal.js
const scrollBtn = document.getElementById("scrollToTop");

// Show/hide button on scroll
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Smooth scroll to top
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


  const scrollContainer = document.getElementById("certScroll");
  const scrollLeftBtn = document.getElementById("scroll-left");
  const scrollRightBtn = document.getElementById("scroll-right");

  scrollLeftBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
  });

