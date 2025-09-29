// Project Image Modal
const img = document.getElementById('clinic-img');
const modal = document.getElementById('img-modal');
img.onclick = function() {
    modal.style.display = "flex";
}
modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}

// Hire Modal
const hireBtn = document.getElementById('hireBtn');
const hireModal = document.getElementById('hire-modal');
const closeHireModal = document.getElementById('close-hire-modal');
hireBtn.onclick = function() {
    hireModal.style.display = "flex";
}
closeHireModal.onclick = function() {
    hireModal.style.display = "none";
}
hireModal.onclick = function(e) {
    if (e.target === hireModal) {
        hireModal.style.display = "none";
    }
}

// Profile Image Modal
const pfpImg = document.getElementById('pfp-img');
const pfpModal = document.getElementById('pfp-modal');
pfpImg.onclick = function() {
    pfpModal.style.display = "flex";
}
pfpModal.onclick = function(e) {
    if (e.target === pfpModal) {
        pfpModal.style.display = "none";
    }
}