// JavaScript for the "Fun Fact" button
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("revealFact");
    const funFact = document.getElementById("funFact");

    button.addEventListener("click", () => {
        if (funFact.classList.contains("hidden")) {
            funFact.classList.remove("hidden");
            button.textContent = "Hide the fun fact";
        } else {
            funFact.classList.add("hidden");
            button.textContent = "Click to reveal a fun fact about me!";
        }
    });
});
