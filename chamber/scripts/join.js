
document.getElementById("timestamp").value = new Date().toISOString();

const modals = document.querySelectorAll(".modal");
const links = document.querySelectorAll(".card a");
const closeButtons = document.querySelectorAll(".close");

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const modal = document.querySelector(link.getAttribute("href"));
        modal.style.display = "block";
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.closest(".modal").style.display = "none";
    });
});

window.onclick = function (event) {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
