import "./scss/main.scss";

import IMask from "imask";

document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.querySelector("#tel");
    const nameInput = document.querySelector("#name");

    if (phoneInput) {
        IMask(phoneInput, {
            mask: "+{7} (000) 000-00-00",
        });
    }

    if (nameInput) {
        IMask(nameInput, {
            mask: /^[A-Za-zА-Яа-яЁё\s]*$/,
            lazy: false,
        });
    }
});
