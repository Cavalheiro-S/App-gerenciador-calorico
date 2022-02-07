import {takeValuesIMC} from "../functionalities/imc.js";
import {takeValuesTMB} from "../functionalities/tmb.js";
import {appendResultIMC,appendResultTMB} from "../components/domAdd.js";

const btnActivity = document.querySelectorAll("[data-activity]");

function eventActivity(e){
    let activity = "";
    activity = e.target.dataset.activity;
    console.log(activity);
    return activity;
}

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

export {eventActivity}