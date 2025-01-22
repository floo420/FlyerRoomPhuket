// Pop-Up Modal Functionality
const modal = document.getElementById('laundryModal');
const btn = document.getElementById('laundryBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = 'block';
};

span.onclick = function () {
    modal.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
