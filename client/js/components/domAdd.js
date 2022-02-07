const divResult = document.querySelector("[data-result]");
const textIMC = document.querySelector("[data-div='textIMC']");
const valueIMC = document.querySelector("[data-div='valueIMC']");
const textTMB = document.querySelector("[data-div='textTMB']");
const valueTMB = document.querySelector("[data-div='valueTMB']");


function appendResult(text){
    const value = document.createElement("span");
    value.textContent = text;
    divResult.appendChild(value);
}

function appendResultIMC(value, text){
    textIMC.classList.add("textResult");
    valueIMC.classList.add("valueResult");
    textIMC.textContent = text;
    valueIMC.textContent = `IMC ${value}`;
}

function appendResultTMB(value, text){
    textTMB.classList.add("textResult");
    valueTMB.classList.add("valueResult");
    textTMB.textContent = text;
    valueTMB.textContent = `${value} kcal`;
}

export {appendResult,appendResultIMC,appendResultTMB}
