// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Show a success or error message after form submission
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const messageElement = document.getElementById('form-message');
    messageElement.textContent = "Thank you for contacting us! We'll get back to you soon.";
    messageElement.style.color = "green";
});
