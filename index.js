//-------------------------------------DECLARATION-----------------------------------------------
//INPUTS
//DRAFT1
const inputName1 = document.querySelector("#name1");
const inputDescription1 = document.querySelector("#description1");
const inputDegrees1 = document.querySelector("#degrees1");
const inputColor1 = document.querySelector("#color1");
const inputCheckboxColor1 = document.querySelector("#checkbox-color1");
const inputOtherColor1 = document.querySelector("#other-color1"); 
const inputFlag1 = document.querySelector("#flag1");
const inputPrice1_1 = document.querySelector("#price1-1");
const inputPrice2_1 = document.querySelector("#price2-1");
//DRAFT2
const inputName2 = document.querySelector("#name2");
const inputDescription2 = document.querySelector("#description2");
const inputDegrees2 = document.querySelector("#degrees2");
const inputColor2 = document.querySelector("#color2");
const inputCheckboxColor2 = document.querySelector("#checkbox-color2");
const inputOtherColor2 = document.querySelector("#other-color2"); 
const inputFlag2 = document.querySelector("#flag2");
const inputPrice1_2 = document.querySelector("#price1-2");
const inputPrice2_2 = document.querySelector("#price2-2");
//DRAFT3
const inputName3 = document.querySelector("#name3");
const inputDescription3 = document.querySelector("#description3");
const inputDegrees3 = document.querySelector("#degrees3");
const inputColor3 = document.querySelector("#color3");
const inputCheckboxColor3 = document.querySelector("#checkbox-color3");
const inputOtherColor3 = document.querySelector("#other-color3"); 
const inputFlag3 = document.querySelector("#flag3");
const inputPrice1_3 = document.querySelector("#price1-3");
const inputPrice2_3 = document.querySelector("#price2-3");
//DRAFT4
const inputName4 = document.querySelector("#name4");
const inputDescription4 = document.querySelector("#description4");
const inputDegrees4 = document.querySelector("#degrees4");
const inputColor4 = document.querySelector("#color4");
const inputCheckboxColor4 = document.querySelector("#checkbox-color4");
const inputOtherColor4 = document.querySelector("#other-color4"); 
const inputFlag4 = document.querySelector("#flag4");
const inputPrice1_4 = document.querySelector("#price1-4");
const inputPrice2_4 = document.querySelector("#price2-4");
//DRAFT5
const inputName5 = document.querySelector("#name5");
const inputDescription5 = document.querySelector("#description5");
const inputDegrees5 = document.querySelector("#degrees5");
const inputColor5 = document.querySelector("#color5");
const inputCheckboxColor5 = document.querySelector("#checkbox-color5");
const inputOtherColor5 = document.querySelector("#other-color5"); 
const inputFlag5 = document.querySelector("#flag5");
const inputPrice1_5 = document.querySelector("#price1-5");
const inputPrice2_5 = document.querySelector("#price2-5");
//DRAFT6
const inputName6 = document.querySelector("#name6");
const inputDescription6 = document.querySelector("#description6");
const inputDegrees6 = document.querySelector("#degrees6");
const inputColor6 = document.querySelector("#color6");
const inputCheckboxColor6 = document.querySelector("#checkbox-color6");
const inputOtherColor6 = document.querySelector("#other-color6"); 
const inputFlag6 = document.querySelector("#flag6");
const inputPrice1_6 = document.querySelector("#price1-6");
const inputPrice2_6 = document.querySelector("#price2-6");
//DRAFT7
const inputName7 = document.querySelector("#name7");
const inputDescription7 = document.querySelector("#description7");
const inputDegrees7 = document.querySelector("#degrees7");
const inputColor7 = document.querySelector("#color7");
const inputCheckboxColor7 = document.querySelector("#checkbox-color7");
const inputOtherColor7 = document.querySelector("#other-color7"); 
const inputFlag7 = document.querySelector("#flag7");
const inputPrice1_7 = document.querySelector("#price1-7");
const inputPrice2_7 = document.querySelector("#price2-7");
//DRAFT8
const inputName8 = document.querySelector("#name8");
const inputDescription8 = document.querySelector("#description8");
const inputDegrees8 = document.querySelector("#degrees8");
const inputColor8 = document.querySelector("#color8");
const inputCheckboxColor8 = document.querySelector("#checkbox-color8");
const inputOtherColor8 = document.querySelector("#other-color8"); 
const inputFlag8 = document.querySelector("#flag8");
const inputPrice1_8 = document.querySelector("#price1-8");
const inputPrice2_8 = document.querySelector("#price2-8");

//Boutons
const imageCheck1 = document.querySelector("#imageCheck1");
const imageCheck2 = document.querySelector("#imageCheck2");
const imageCheck3 = document.querySelector("#imageCheck3");
const imageCheck4 = document.querySelector("#imageCheck4");
const imageCheck5 = document.querySelector("#imageCheck5");
const imageCheck6 = document.querySelector("#imageCheck6");
const imageCheck7 = document.querySelector("#imageCheck7");
const imageCheck8 = document.querySelector("#imageCheck8");
const createBtn = document.querySelector("#createBtn");

//Textes à remplir
const imageChecked1 = document.querySelector("#imageChecked1");
const imageChecked2 = document.querySelector("#imageChecked2");
const imageChecked3 = document.querySelector("#imageChecked3");
const imageChecked4 = document.querySelector("#imageChecked4");
const imageChecked5 = document.querySelector("#imageChecked5");
const imageChecked6 = document.querySelector("#imageChecked6");
const imageChecked7 = document.querySelector("#imageChecked7");
const imageChecked8 = document.querySelector("#imageChecked8");

//Preview
const previewFlag1 = document.querySelector("#previewFlag1");
const previewFlag2 = document.querySelector("#previewFlag2");
const previewFlag3 = document.querySelector("#previewFlag3");
const previewFlag4 = document.querySelector("#previewFlag4");
const previewFlag5 = document.querySelector("#previewFlag5");
const previewFlag6 = document.querySelector("#previewFlag6");
const previewFlag7 = document.querySelector("#previewFlag7");
const previewFlag8 = document.querySelector("#previewFlag8");

//Div Draft
const divDraft1 = document.querySelector("#draft1");
const divDraft2 = document.querySelector("#draft2");
const divDraft3 = document.querySelector("#draft3");
const divDraft4 = document.querySelector("#draft4");
const divDraft5 = document.querySelector("#draft5");
const divDraft6 = document.querySelector("#draft6");
const divDraft7 = document.querySelector("#draft7");
const divDraft8 = document.querySelector("#draft8");

//-----------------------------------------FONCTIONS----------------------------
//Gestion de la couleur
const getColor = function(inputColor,inputOtherColor,inputCheckboxColor){
    let output;

    if(inputCheckboxColor.checked===true){
        output=inputOtherColor.value;
    }else{
        switch (inputColor.value){
            case "Blonde":
                output = "#dfab0e";
                break;
            case "Blanche":
                output = "white";
                break;
            case "Brune":
                output = "#3a1f00";
                break;
            case "Rousse":
                output = "#cf5e0b";
                break;
            case "Fruits Rouges":
                output = "#ce2488";
                break;
            default:}
        }
        return output;
};

//Gestion Taille
const getSize = function(inputDegrees){
    let output1;
    let output2;

    if (inputDegrees.value >= 8){
        output1 = "25 cl";
        output2 = "33 cl";

    }else{
        output1 = "33 cl";
        output2 = "50 cl";
    }
    return {output1,output2};
};

//Gestion des données
const getData = function(inputName,inputDescription,inputDegrees,inputColor,inputOtherColor,inputCheckboxColor,inputFlag,inputPrice1,inputPrice2,dataDraft){
    //Nom
    window.localStorage.setItem(`${dataDraft}_name`,inputName.value);
    //Description
    window.localStorage.setItem(`${dataDraft}_description`,inputDescription.value);
    //Degrés
    window.localStorage.setItem(`${dataDraft}_degrees`,inputDegrees.value);
    //Couleur
    window.localStorage.setItem(`${dataDraft}_color`,getColor(inputColor,inputOtherColor,inputCheckboxColor));
    //Drapeau
    if(inputFlag.value!=""){//Si le fichier est renseigné
        window.localStorage.setItem(`${dataDraft}_flag`,inputFlag.files[0].name);
       
        //Gestion Drapeau Valide
       let xhr = new XMLHttpRequest();
        xhr.open('HEAD', `./img/${inputFlag.files[0].name}`, false);
        xhr.send();
    
        if (xhr.status == "404") {
            window.localStorage.setItem(`${dataDraft}_flagValid`,"false");
        } else {
            window.localStorage.setItem(`${dataDraft}_flagValid`,"true");
        } 
    }else{
        window.localStorage.setItem(`${dataDraft}_flag`,"");
        window.localStorage.setItem(`${dataDraft}_flagValid`,"Non renseigné");
    }
    //Prix 1
    window.localStorage.setItem(`${dataDraft}_price1`,inputPrice1.value);
    //Prix 2
    window.localStorage.setItem(`${dataDraft}_price2`,inputPrice2.value);
    //Taille 1
    window.localStorage.setItem(`${dataDraft}_size1`,getSize(inputDegrees).output1);
    //Taille 2
    window.localStorage.setItem(`${dataDraft}_size2`,getSize(inputDegrees).output2);
};

const sendData = function(){
    getData(inputName1,inputDescription1,inputDegrees1,inputColor1,inputOtherColor1,inputCheckboxColor1,inputFlag1,inputPrice1_1,inputPrice2_1,"Draft1");
    getData(inputName2,inputDescription2,inputDegrees2,inputColor2,inputOtherColor2,inputCheckboxColor2,inputFlag2,inputPrice1_2,inputPrice2_2,"Draft2");
    getData(inputName3,inputDescription3,inputDegrees3,inputColor3,inputOtherColor3,inputCheckboxColor3,inputFlag3,inputPrice1_3,inputPrice2_3,"Draft3");
    getData(inputName4,inputDescription4,inputDegrees4,inputColor4,inputOtherColor4,inputCheckboxColor4,inputFlag4,inputPrice1_4,inputPrice2_4,"Draft4");
    getData(inputName5,inputDescription5,inputDegrees5,inputColor5,inputOtherColor5,inputCheckboxColor5,inputFlag5,inputPrice1_5,inputPrice2_5,"Draft5");
    getData(inputName6,inputDescription6,inputDegrees6,inputColor6,inputOtherColor6,inputCheckboxColor6,inputFlag6,inputPrice1_6,inputPrice2_6,"Draft6");
    getData(inputName7,inputDescription7,inputDegrees7,inputColor7,inputOtherColor7,inputCheckboxColor7,inputFlag7,inputPrice1_7,inputPrice2_7,"Draft7");
    getData(inputName8,inputDescription8,inputDegrees8,inputColor8,inputOtherColor8,inputCheckboxColor8,inputFlag8,inputPrice1_8,inputPrice2_8,"Draft8");
};

const imageChecker = function(imageCheck,imageChecked,inputFlag,divDraft){
    imageCheck.addEventListener('click',(e)=>{
        e.preventDefault();
    
        let xhr = new XMLHttpRequest();
        xhr.open('HEAD', `./img/${inputFlag.files[0].name}`, false);
        xhr.send();
    
        if (xhr.status == "404") {
            imageChecked.innerHTML="Fichier non valide !";
            imageCheck.innerHTML="❌";
            divDraft.style.borderColor = "#F55536";
            alert("Veuillez mettre votre image dans le dossier img");
        } else {
            imageCheck.innerHTML="✔️";
            divDraft.style.borderColor = "#CAFFB9";
            imageChecked.innerHTML="Fichier valide !";
        }
    })
}

const onChangeFlag = function(inputFlag,imageChecked,imageCheck,previewFlag){
    inputFlag.addEventListener('change',()=>{
        let file = inputFlag.files[0].name;

        imageCheck.innerHTML="❔";

        previewFlag.style.background = `url(./img/${file}) center/cover`;
        
        imageChecked.innerHTML="";

    });
}

const advert = function(){
    //Drapeaux
    let flagValids = [];
    
    flagValids.push(window.localStorage.getItem('Draft1_flagValid'));
    flagValids.push(window.localStorage.getItem('Draft2_flagValid'));
    flagValids.push(window.localStorage.getItem('Draft3_flagValid'));
    flagValids.push(window.localStorage.getItem('Draft4_flagValid'));
    flagValids.push(window.localStorage.getItem('Draft5_flagValid'));
    flagValids.push(window.localStorage.getItem('Draft6_flagValid'));
    flagValids.push(window.localStorage.getItem('Draft7_flagValid'));
    flagValids.push(window.localStorage.getItem('Draft8_flagValid'));

    if(flagValids.indexOf('false')===-1){
        
    }else{
        alert("Attention certaines images risque de ne pas s'afficher !")
    }
}


//------------------------------------------------------------CODE----------------------------------------------------
//Confirmation formulaire
createBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    //Clear local Storage
    window.localStorage.clear();
    sendData();
    advert();
    window.open('./popUp.html','newwindow');

})

//Reset "fichier valide/non valide" sur changement de fichier
onChangeFlag(inputFlag1,imageChecked1,imageCheck1,previewFlag1);
onChangeFlag(inputFlag2,imageChecked2,imageCheck2,previewFlag2);
onChangeFlag(inputFlag3,imageChecked3,imageCheck3,previewFlag3);
onChangeFlag(inputFlag4,imageChecked4,imageCheck4,previewFlag4);
onChangeFlag(inputFlag5,imageChecked5,imageCheck5,previewFlag5);
onChangeFlag(inputFlag6,imageChecked6,imageCheck6,previewFlag6);
onChangeFlag(inputFlag7,imageChecked7,imageCheck7,previewFlag7);
onChangeFlag(inputFlag8,imageChecked8,imageCheck8,previewFlag8);

//test si le fichier existe 
imageChecker(imageCheck1,imageChecked1,inputFlag1,divDraft1);
imageChecker(imageCheck2,imageChecked2,inputFlag2,divDraft2);
imageChecker(imageCheck3,imageChecked3,inputFlag3,divDraft3);
imageChecker(imageCheck4,imageChecked4,inputFlag4,divDraft4);
imageChecker(imageCheck5,imageChecked5,inputFlag5,divDraft5);
imageChecker(imageCheck6,imageChecked6,inputFlag6,divDraft6);
imageChecker(imageCheck7,imageChecked7,inputFlag7,divDraft7);
imageChecker(imageCheck8,imageChecked8,inputFlag8,divDraft8);





