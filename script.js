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

document.querySelector('.scroll-indicator').addEventListener('click', function () {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent page reload

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                alert("Your message has been sent successfully! We'll get back to you soon.");
                form.reset(); // Clear the form after submission
            } else {
                alert("There was an error sending your message. Please try again.");
            }
        } catch (error) {
            alert("Something went wrong. Please check your internet connection and try again.");
        }
    });
});
