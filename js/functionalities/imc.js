import {inputValues} from "../takeValues.js"

function calcIMC(weight,height){
    let imc = weight/(height*2)*100;
    return imc.toFixed(1);
}

function takeValuesIMC(){
    let weight, height = 0;
    [weight, height] = inputValues();

    let imc = calcIMC(weight,height);
    let textImc = validationIMC(imc);
    return [imc,textImc];
}

function validationIMC(imc){

    if(imc <= 16 || imc <= 16.9 ){
        return "Muito abaixo do peso";
    }
    if(imc == 17 || imc <= 18.4 ){
        return "Abaixo do peso";
    }
    if(imc == 18.5 || imc <= 24.9 ){
        return "Peso normal";
    }
    if(imc == 25 || imc <= 29.9 ){
        return "Acima do peso";
    }
    if(imc == 30 || imc <= 34.9 ){
        return "Obesidade grau 1";
    }
    if(imc == 35 || imc <= 40 ){
        return "Obesidade grau 2";
    }
    if(imc > 40 ){
        return "Obesidade grau 3";
    }
}

export{takeValuesIMC};