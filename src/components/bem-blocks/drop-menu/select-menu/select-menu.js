export default function selctMenu() {
    const optionMenu = document.querySelector(".select-menu");
    
    if (optionMenu) {
        const selectBtn = optionMenu.querySelector(".select-menu__btn"),
            options = optionMenu.querySelectorAll(".select-menu__option"),
            sBtn_text = optionMenu.querySelector(".select-menu__btn-text");

        selectBtn.addEventListener("click", () =>
            optionMenu.classList.toggle("active")
        );

        options.forEach((option) => {
            option.addEventListener("click", () => {
                let selectedOption = option.querySelector(
                    ".select-menu__option-txt"
                ).innerText;
                sBtn_text.innerText = selectedOption;

                optionMenu.classList.remove("active");
            });
        });
    }
}
