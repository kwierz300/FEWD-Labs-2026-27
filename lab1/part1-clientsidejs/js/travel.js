document.querySelectorAll("button[aria-controls]").forEach(button => {
    button.addEventListener("click", () => {
        const details = document.getElementById(button.getAttribute("aria-controls"));
        details.hidden = !details.hidden;
        button.setAttribute("aria-expanded", String(!details.hidden));
    });
});