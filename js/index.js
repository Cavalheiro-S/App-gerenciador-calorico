const divGender = document.querySelectorAll("[data-gender]");
const inputHeight = document.querySelector("[data-input='height']");

import {genderSelected} from "./steps/stepGenre.js";
import {addResult} from "./imc.js";


divGender.forEach((item) =>{
    item.addEventListener("click", () =>{
        console.log(genderSelected(item)); 
    })
})

inputHeight.addEventListener("focusout", (e) => {
    addResult();
})

