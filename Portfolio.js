// Simple typing animation for role
// const roles = ["Web Developer", "UI Designer", "Freelancer", "Tech Enthusiast"];
const roles = ["Web Developer", "Full Stack Developer","HYML", "CSS", "Javascript"];
let roleIndex = 0, charIndex = 0;
const roleElem = document.getElementById("role");

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        roleElem.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 1500);
    }
}
function eraseRole() {
    if (charIndex > 0) {
        roleElem.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    typeRole();

    // Simple contact form validation and message
    const form = document.getElementById("contact-form");
    const msg = document.getElementById("form-msg");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        msg.textContent = "Thank you! Your message has been sent.";
        form.reset();
        setTimeout(() => { msg.textContent = ""; }, 4000);
    });
});


