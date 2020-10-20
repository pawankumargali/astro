let appointmentBtn = document.getElementById('appointment-btn');
let appointmentOverlay = document.getElementById('appointment-form-overlay');
let hideOnOverlay = document.getElementById('hide-on-overlay');
let overlayCloseBtn = document.getElementById('overlay-close-btn');

appointmentBtn.onclick = function() {
    appointmentOverlay.style.display="block";
    hideOnOverlay.style.display="none";
}

overlayCloseBtn.onclick = function() {
    appointmentOverlay.style.display="none";
    hideOnOverlay.style.display="block";
}

