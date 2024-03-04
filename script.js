// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill out all fields.');
            return;
        }

        // You can add AJAX request or form submission logic here
        alert('Form submitted successfully!');
        form.reset();
    });
});
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    navList.classList.toggle('active');
});

// Close navigation menu when a link is clicked (for smaller screens)
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', function () {
        navList.classList.remove('active');
    });
});