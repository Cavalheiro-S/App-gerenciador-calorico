import {inputValues} from "../takeValues.js"


function takeValuesTMB(){
    let kcal = 0;
    let textTMB = "Sua necessidade calórica é ";
    kcal = calcTMB();

    return [kcal,textTMB];
}

function calcTMB(){
    let tmb,multiply,kcal,weight,height,age = 0;
    let gender,activity = "";
    
    [weight,height,age,gender,activity] = inputValues();
    if(gender == "man"){
        tmb = (13.75*weight) + (5*height) - (6.76 * age) + 66.5;
    }
    else if(gender == "woman"){
        tmb = (13.75*weight) + (5*height) - (6.76 * age) + 665;
    }
    multiply = activityLevel(activity);

    kcal = tmb*multiply;
    
    return kcal.toFixed(2);
}

function activityLevel(activity){
    let multiply = 0;
    if(activity == "sedentary"){
        multiply = 1.2;
        return multiply
    }
    else if(activity == "little active"){
        multiply = 1.375;
        return multiply
    }
    else if(activity == "moderate active"){
        multiply = 1.55;
        return multiply
    }
    else if(activity == "very active"){
        multiply = 1.725;
        return multiply
    }
    else if(activity == "extremely active"){
        multiply = 1.9;
        return multiply
    }
}

export {takeValuesTMB}