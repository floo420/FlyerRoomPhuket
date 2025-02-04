document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('laundryModal');
    const btn = document.getElementById('laundryBtn');
    const span = document.getElementsByClassName('close')[0];

    if (btn) {
        btn.onclick = function () {
            modal.style.display = 'flex'; // Opens the modal
        };
    }

    if (span) {
        span.onclick = function () {
            modal.style.display = 'none'; // Closes the modal when 'X' is clicked
        };
    }

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Closes modal when clicking outside
        }
    };
});




// Sticky Navbar on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
