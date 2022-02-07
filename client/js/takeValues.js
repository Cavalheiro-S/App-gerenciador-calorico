const inputAge = document.querySelector("[data-input='age']");
const inputHeight = document.querySelector("[data-input='height']");
const inputWeight = document.querySelector("[data-input='weight']");
const divGender = document.querySelectorAll("[data-gender]");
const divActivity = document.querySelectorAll("[data-activity]");

let gender = "";
let activity = "";
import {genderSelected} from "./steps/stepGenre.js";
import {eventActivity} from "./steps/stepActivity.js";

divActivity.forEach(item => {
    item.addEventListener("click", (e) => {
        activity = eventActivity(e)   
    })
})

divGender.forEach(item => {
    item.addEventListener("click", (e) => {
        gender = genderSelected(item);
    })
})


function inputValues(){
    let age = inputAge.value;
    let weight = inputWeight.value;
    let height = inputHeight.value;
    
    return [weight,height,age,gender,activity];
}

export {inputValues};