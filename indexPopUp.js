/////////////////////////////////CLASSE////////////////////////////
//Données d'une bière pression
class dataDraft{
    constructor(name,description,degrees,color,flag,price1,price2,size1,size2,flagValid){
        this.name=name;
        this.description=description;
        this.degrees=degrees;
        this.color=color;
        this.flag=flag;
        this.price1=price1;
        this.price2=price2;
        this.size1=size1;
        this.size2=size2;
        this.flagValid=flagValid;
    }
}

/////////////////////////////DECLARATION///////////////////////////
let dataDraft1 = new dataDraft;
let dataDraft2 = new dataDraft;
let dataDraft3 = new dataDraft;
let dataDraft4 = new dataDraft;
let dataDraft5 = new dataDraft;
let dataDraft6 = new dataDraft;
let dataDraft7 = new dataDraft;
let dataDraft8 = new dataDraft;

//Pastilles
const pastille1 = document.querySelector("#pastille1");
const pastille2 = document.querySelector("#pastille2");
const pastille3 = document.querySelector("#pastille3");
const pastille4 = document.querySelector("#pastille4");
const pastille5 = document.querySelector("#pastille5");
const pastille6 = document.querySelector("#pastille6");
const pastille7 = document.querySelector("#pastille7");
const pastille8 = document.querySelector("#pastille8");
//Nom
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const name3 = document.querySelector("#name3");
const name4 = document.querySelector("#name4");
const name5 = document.querySelector("#name5");
const name6 = document.querySelector("#name6");
const name7 = document.querySelector("#name7");
const name8 = document.querySelector("#name8");
//Description
const description1 = document.querySelector("#description1");
const description2 = document.querySelector("#description2");
const description3 = document.querySelector("#description3");
const description4 = document.querySelector("#description4");
const description5 = document.querySelector("#description5");
const description6 = document.querySelector("#description6");
const description7 = document.querySelector("#description7");
const description8 = document.querySelector("#description8");
//Degrés
const degrees1 = document.querySelector("#degrees1");
const degrees2 = document.querySelector("#degrees2");
const degrees3 = document.querySelector("#degrees3");
const degrees4 = document.querySelector("#degrees4");
const degrees5 = document.querySelector("#degrees5");
const degrees6 = document.querySelector("#degrees6");
const degrees7 = document.querySelector("#degrees7");
const degrees8 = document.querySelector("#degrees8");
//Drapeau
const flag1 = document.querySelector("#flag1");
const flag2 = document.querySelector("#flag2");
const flag3 = document.querySelector("#flag3");
const flag4 = document.querySelector("#flag4");
const flag5 = document.querySelector("#flag5");
const flag6 = document.querySelector("#flag6");
const flag7 = document.querySelector("#flag7");
const flag8 = document.querySelector("#flag8");
//Tailles
const size1_1 = document.querySelector("#size1-1");
const size1_2 = document.querySelector("#size1-2");
const size1_3 = document.querySelector("#size1-3");
const size1_4 = document.querySelector("#size1-4");
const size1_5 = document.querySelector("#size1-5");
const size1_6 = document.querySelector("#size1-6");
const size1_7 = document.querySelector("#size1-7");
const size1_8 = document.querySelector("#size1-8");

const size2_1 = document.querySelector("#size2-1");
const size2_2 = document.querySelector("#size2-2");
const size2_3 = document.querySelector("#size2-3");
const size2_4 = document.querySelector("#size2-4");
const size2_5 = document.querySelector("#size2-5");
const size2_6 = document.querySelector("#size2-6");
const size2_7 = document.querySelector("#size2-7");
const size2_8 = document.querySelector("#size2-8");
//Prix
const price1_1 = document.querySelector("#price1-1");
const price1_2 = document.querySelector("#price1-2");
const price1_3 = document.querySelector("#price1-3");
const price1_4 = document.querySelector("#price1-4");
const price1_5 = document.querySelector("#price1-5");
const price1_6 = document.querySelector("#price1-6");
const price1_7 = document.querySelector("#price1-7");
const price1_8 = document.querySelector("#price1-8");

const price2_1 = document.querySelector("#price2-1");
const price2_2 = document.querySelector("#price2-2");
const price2_3 = document.querySelector("#price2-3");
const price2_4 = document.querySelector("#price2-4");
const price2_5 = document.querySelector("#price2-5");
const price2_6 = document.querySelector("#price2-6");
const price2_7 = document.querySelector("#price2-7");
const price2_8 = document.querySelector("#price2-8");



///////////////////////////////FONCTIONS///////////////////////////
const getData = function(draft,dataDraft){
    dataDraft.name=window.localStorage.getItem(`${draft}_name`);
    dataDraft.description=window.localStorage.getItem(`${draft}_description`);
    dataDraft.degrees=window.localStorage.getItem(`${draft}_degrees`);
    dataDraft.color=window.localStorage.getItem(`${draft}_color`);
    dataDraft.flag=window.localStorage.getItem(`${draft}_flag`);
    dataDraft.price1=window.localStorage.getItem(`${draft}_price1`);
    dataDraft.price2=window.localStorage.getItem(`${draft}_price2`);
    dataDraft.size1=window.localStorage.getItem(`${draft}_size1`);
    dataDraft.size2=window.localStorage.getItem(`${draft}_size2`);
    dataDraft.flagValid=window.localStorage.getItem(`${draft}_flagValid`);
}

const pushData = function(dataDraft,pastille,name,description,degrees,flag,size1,size2,price1,price2){
    //Couleurs Pastilles
    pastille.style.background=`${dataDraft.color}`;
    //Nom
    name.innerHTML = `${dataDraft.name}`;
    //Description
    description.innerHTML = `${dataDraft.description}`;
    //Degrés
    degrees.innerHTML = `${dataDraft.degrees}°`;
    //Drapeau
    flag.style.background = `url(./img/${dataDraft.flag}) center/cover`;
    //Tailles
    size1.innerHTML = `${dataDraft.size1}`;
    size2.innerHTML = `${dataDraft.size2}`;
    //Prix
    price1.innerHTML = `${dataDraft.price1} €`
    price2.innerHTML = `${dataDraft.price2} €`
}

////////////////////////////////CODE//////////////////////////////
getData("Draft1",dataDraft1);
getData("Draft2",dataDraft2);
getData("Draft3",dataDraft3);
getData("Draft4",dataDraft4);
getData("Draft5",dataDraft5);
getData("Draft6",dataDraft6);
getData("Draft7",dataDraft7);
getData("Draft8",dataDraft8);

pushData(dataDraft1,pastille1,name1,description1,degrees1,flag1,size1_1,size2_1,price1_1,price2_1);
pushData(dataDraft2,pastille2,name2,description2,degrees2,flag2,size1_2,size2_2,price1_2,price2_2);
pushData(dataDraft3,pastille3,name3,description3,degrees3,flag3,size1_3,size2_3,price1_3,price2_3);
pushData(dataDraft4,pastille4,name4,description4,degrees4,flag4,size1_4,size2_4,price1_4,price2_4);
pushData(dataDraft5,pastille5,name5,description5,degrees5,flag5,size1_5,size2_5,price1_5,price2_5);
pushData(dataDraft6,pastille6,name6,description6,degrees6,flag6,size1_6,size2_6,price1_6,price2_6);
pushData(dataDraft7,pastille7,name7,description7,degrees7,flag7,size1_7,size2_7,price1_7,price2_7);
pushData(dataDraft8,pastille8,name8,description8,degrees8,flag8,size1_8,size2_8,price1_8,price2_8);


if(price1_1.innerHTML.length>=6){
    price1_1.style.transform = "scale(0.75) translateX(-120px)";
};

if(price1_2.innerHTML.length>=6){
    price1_2.style.transform = "scale(0.75) translateX(-120px)";
};

if(price1_3.innerHTML.length>=6){
    price1_3.style.transform = "scale(0.75) translateX(-120px)";
};

if(price1_4.innerHTML.length>=6){
    price1_4.style.transform = "scale(0.75) translateX(-120px)";
};

if(price1_5.innerHTML.length>=6){
    price1_5.style.transform = "scale(0.75) translateX(-120px)";
};

if(price1_6.innerHTML.length>=6){
    price1_6.style.transform = "scale(0.75) translateX(-120px)";
};

if(price1_7.innerHTML.length>=6){
    price1_7.style.transform = "scale(0.75) translateX(-120px)";
};

if(price1_8.innerHTML.length>=6){
    price1_8.style.transform = "scale(0.75) translateX(-120px)";
};

if(price2_1.innerHTML.length>=6){
    price2_1.style.transform = "scale(0.75) translateX(-120px)";
};

if(price2_2.innerHTML.length>=6){
    price2_2.style.transform = "scale(0.75) translateX(-120px)";
};

if(price2_3.innerHTML.length>=6){
    price2_3.style.transform = "scale(0.75) translateX(-120px)";
};

if(price2_4.innerHTML.length>=6){
    price2_4.style.transform = "scale(0.75) translateX(-120px)";
};

if(price2_5.innerHTML.length>=6){
    price2_5.style.transform = "scale(0.75) translateX(-120px)";
};

if(price2_6.innerHTML.length>=6){
    price2_6.style.transform = "scale(0.75) translateX(-120px)";
};

if(price2_7.innerHTML.length>=6){
    price2_7.style.transform = "scale(0.75) translateX(-120px)";
};

if(price2_8.innerHTML.length>=6){
    price2_8.style.transform = "scale(0.75) translateX(-120px)";
};