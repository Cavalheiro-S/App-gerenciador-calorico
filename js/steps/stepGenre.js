const btnGenderMan = document.querySelector("[data-btnGender='man']");
const btnGenderWoman = document.querySelector("[data-btnGender='woman']");


function genderSelected(item){
    let btnManClicked = false;
    let btnWomanClicked = false;
    if(item.dataset.gender == "man"){
        if(btnGenderWoman.classList.contains("btn-active")){
            btnGenderWoman.classList.remove("btn-active");
            btnGenderMan.classList.add("btn-active");
            btnManClicked = true;
            btnWomanClicked = false;
        }
        else{
            btnGenderMan.classList.add("btn-active");
            btnManClicked = true;
            btnWomanClicked = false;
        }
    }
    else if(item.dataset.gender == "woman"){
        if(btnGenderMan.classList.contains("btn-active")){
            btnGenderMan.classList.remove("btn-active");
            btnGenderWoman.classList.add("btn-active");
            btnWomanClicked = true;
            btnManClicked = false;
        }
        else{
            btnGenderWoman.classList.add("btn-active");
            btnWomanClicked = true;
            btnManClicked = false;
        }
    }

    if(btnManClicked){
        return "man";
    }
    else if(btnWomanClicked){
        return "woman";
    }

    return "empty";
}

export {genderSelected}