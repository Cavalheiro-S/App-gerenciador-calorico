const divGender = document.querySelectorAll("[data-gender]");
const inputHeight = document.querySelector("[data-input='height']");
const btnActivity = document.querySelectorAll("[data-activity]");

import {takeValuesIMC} from "./functionalities/imc.js";
import {takeValuesTMB} from "./functionalities/tmb.js";
import {appendResult, appendResultIMC,appendResultTMB} from "./domAdds.js";



btnActivity.forEach(item => {
    item.addEventListener("click" , () => {
        let valueIMC = 0;
        let textIMC = 0;
        let valueTMB = 0;
        let textTMB = 0;
        [valueIMC,textIMC] = takeValuesIMC();
        [valueTMB,textTMB] = takeValuesTMB();
        appendResultIMC(valueIMC,textIMC);
        appendResultTMB(valueTMB,textTMB);
    })
})

/*
inputHeight.addEventListener("focusout", (e) => {
    let valueIMC = 0;
    let textIMC = 0;
    let valueTMB = 0;
    let textTMB = 0;
    [valueIMC,textIMC] = takeValuesIMC();
    [valueTMB,textTMB] = takeValuesTMB();
    appendResultIMC(valueIMC,textIMC);
    appendResultTMB(valueTMB,textTMB);
})
*/
