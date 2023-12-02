export default function selctMenu() {
    const optionMenu = document.querySelector(".select-menu");
    
    if (optionMenu) {
        const selectBtn = optionMenu.querySelector(".select-menu__btn"),
            optionsMenu = optionMenu.querySelector(".select-menu__options"),
            options = optionMenu.querySelectorAll(".select-menu__option"),
            sBtn_text = optionMenu.querySelector(".select-menu__btn-text");

        selectBtn.addEventListener("click", () =>
            optionsMenu.classList.toggle("select-menu__options_active")
        );

        options.forEach((option) => {
            option.addEventListener("click", () => {
                let selectedOption = option.querySelector(
                    ".select-menu__option-txt"
                ).innerText;
                sBtn_text.innerText = selectedOption;

                optionsMenu.classList.remove("select-menu__options_active");
            });
        });
    }
}
