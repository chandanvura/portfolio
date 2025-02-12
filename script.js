// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Page Transition Effect
document.querySelectorAll('a').forEach(link => {
  if (link.href.includes('.html')) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.body.classList.add('page-transition');
      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    });
  }
});

// Intersection Observer for All Pages
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.experience-item, .certification-card, .achievement-card').forEach(element => {
  element.classList.add('pre-animate');
  observer.observe(element);
});

// Hover Effect for Achievement Cards
document.querySelectorAll('.achievement-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// Modal Functionality
const projects = document.querySelectorAll('.project');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// Open Modal
projects.forEach(project => {
  project.addEventListener('click', () => {
    const modalId = project.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

// Close Modal
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none';
  });
});

// Close Modal When Clicking Outside
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});