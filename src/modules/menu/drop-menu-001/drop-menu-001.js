export default function dropMenu001() {
    const navButton = document.querySelector(".nav-button");

    if (navButton) {
        navButton.addEventListener("click", () => {
            navButton.parentNode.parentNode.classList.toggle("closed");
        });
    }
}
