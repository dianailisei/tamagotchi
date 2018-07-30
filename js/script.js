var pets = [];

function createTamagotchi (inputName, inputUserName, foodLevel = 13, sleepLevel = 13, happinessLevel = 13, years = 22) {
        let name=inputName;
        let userName=inputUserName;
        let age= years;
        let food=foodLevel;
        let happiness=happinessLevel;
        let sleep=sleepLevel;
        let foodMeter = parseInt(document.getElementsByTagName("meter")[0].getAttribute("value"));
        let sleepMeter = parseInt(document.getElementsByTagName("meter")[1].getAttribute("value"));
        let happinessMeter = parseInt(document.getElementsByTagName("meter")[2].getAttribute("value"));
    
       
        let publicAPI = {
            eat: function() {
                if(foodMeter < 20) {
                    foodMeter +=1;
                }
                else {
                    //m-am saturat
                }
            },
            rest: function() {
                if(sleepMeter < 20) {
                    sleepMeter +=1;
                }
                else {
                    //m-am odihnit destul
                }
            },
            play: function() {
                if(happinessMeter < 20) {
                    happinessMeter +=1;
                }
                else {
                    //m-am jucat destul
    
                }
            },
            dropFood: function() {
                if(foodMeter > 0) {
                    foodMeter -=1;
                }
            },
            dropSleep: function() {
                if(sleepMeter > 0) {
                    sleepMeter -=1;
                }
            },
            dropHappiness: function() {
                if(happinessMeter > 0) {
                    happinessMeter -=1;
                }
            }
        }      
        setInterval(publicAPI.dropFood, 1000);
        setInterval(publicAPI.dropSleep, 3000);
        setInterval(publicAPI.dropHappiness, 2000);
        // setInterval(function(){
        //     updateUI(foodMeter,sleepMeter,happinessMeter)
        // }, 100);  
    return publicAPI;
}
var myPet = createTamagotchi();
function setNames() {
    if(myPet.name === undefined)
    {
        var name=prompt("Please, give me a name", "Tammy");
        var userName=prompt("What's your name?", "User");
        alert("Hello, "+userName+"! Welcome to my world!");
    }
    else {
        if(userName === undefined) {
            userName=prompt("What's your name?", "");
        }
        alert("Hello, "+userName+"! My name is "+name);
    }
    myPet = createTamagotchi(name, userName);
}

let foodMeter = document.getElementsByTagName("meter")[0];
let sleepMeter = document.getElementsByTagName("meter")[1];
let happinessMeter = document.getElementsByTagName("meter")[2];
// let dialogText = document.getElementById("dialog-text");
let characterImage = document.getElementById("character-img");
let characterSpace = document.getElementsByClassName("character");
let featuresImg =document.getElementsByClassName("features"); 
let pet2 =document.getElementById("pet2"); 
let foodImgNr=document.getElementsByClassName("food-img");
let sleepImgNr=document.getElementsByClassName("sleep-img");
let gameImgNr=document.getElementsByClassName("game-img");

for(var i=0;i<foodImgNr.length;i++){
    foodImgNr[i].addEventListener("click", myPet.eat);    
}
for(var i=0;i<sleepImgNr.length;i++){
    sleepImgNr[i].addEventListener("click", myPet.rest);    
}
for(var i=0;i<gameImgNr.length;i++){
    gameImgNr[i].addEventListener("click", myPet.play);    
}

// document.getElementsByClassName("sleep-img")[i].addEventListener("click", myPet.rest);
//     document.getElementsByClassName("game-img")[i].addEventListener("click", myPet.play);
    // characterImage.addEventListener("click", setNames);



document.getElementById("add-pet").addEventListener("click", addPet);

function addPet(){
    characterSpace[0].style.left="15%";
    for(var i=0; i< featuresImg.length;i++){
        featuresImg[i].style.width = "15%";
    }
    foodMeter.style.height="40px";
    foodMeter.style.marginBottom="5px";
    foodMeter.style.marginTop="5px";

    sleepMeter.style.height="40px";
    sleepMeter.style.marginBottom="5px";
    sleepMeter.style.marginTop="5px";

    happinessMeter.style.height="40px";
    happinessMeter.style.marginBottom="5px";
    happinessMeter.style.marginTop="5px";
    addCharacteristic();
    var myPet = createTamagotchi();
    pets.push(myPet);
    console.log("hello",pets);
}

function addCharacteristic(){

    var chImg=document.createElement("div");
    chImg.classList.add("features");
    document.getElementById("background").appendChild(chImg);

    var foodImgNew=document.createElement("span");
    // foodImgNew.classList.add("food-img");
    chImg.appendChild(foodImgNew);

    var meterNew=document.createElement("meter");
    meterNew.value="0";
    meterNew.min="-1";
    meterNew.low="6";
    meterNew.high="13";
    meterNew.optimum="18";
    meterNew.max="20";
    meterNew.classList.add("meter--new");
    foodImgNew.appendChild(meterNew);

    var foodImg=document.createElement("img");
    foodImg.src="./images/mancare.png";  
    foodImg.classList.add("width-13");
    foodImgNew.insertBefore(foodImg,meterNew);

    var chImg1=document.createElement("div");
    chImg1.classList.add("features");
    document.getElementById("background").appendChild(chImg1);

    var sleepImgNew=document.createElement("span");
    // sleepImgNew.classList.add("sleep-img");
    chImg1.appendChild(sleepImgNew);

    var meterNew1=document.createElement("meter");
    meterNew1.value="0";
    meterNew1.min="-1";
    meterNew1.low="6";
    meterNew1.high="13";
    meterNew1.optimum="18";
    meterNew1.max="20";
    meterNew1.classList.add("meter--new");
    sleepImgNew.appendChild(meterNew1)

    var sleepImg=document.createElement("img");
    sleepImg.src="./images/pat.png";
    sleepImg.classList.add("width-13");
    sleepImgNew.insertBefore(sleepImg,meterNew1);
   

    var chImg2=document.createElement("div");
    chImg2.classList.add("features");
    document.getElementById("background").appendChild(chImg2);

    var happyImgNew=document.createElement("span");
    // happyImgNew.classList.add("game-img");
    chImg2.appendChild(happyImgNew);

    var meterNew2=document.createElement("meter");
    meterNew2.value="0";
    meterNew2.setAttribute("min","-1");
    meterNew2.low="6";
    meterNew2.high="13";
    meterNew2.optimum="18";
    meterNew2.max="20";
    meterNew2.classList.add("meter--new");
    happyImgNew.appendChild(meterNew2)

    var happyImg=document.createElement("img");
    happyImg.src="./images/joc.png";
    happyImg.classList.add("width-13");
    happyImgNew.insertBefore(happyImg,meterNew2);
  
    let x = Math.floor(Math.random() * (1280 - 10) + 10);
    var characterNew=document.createElement("div"); 
    characterNew.classList.add("character");
    characterNew.style.left = `${x}px`;
    document.getElementById("background").appendChild(characterNew);

    var characterNewImage=document.createElement("img");
    characterNewImage.classList.add("character-img");
    characterNewImage.src="./images/happy1.png";

    characterNew.appendChild(characterNewImage);
}

// function checkLevel() {
//     var sum = 0;
//     // dialogText.style.display="none";
//     for(var i=0; i<3; i++)
//     {
//         sum = parseInt(foodMeter.getAttribute("value")) + parseInt(sleepMeter.getAttribute("value")) + parseInt(happinessMeter.getAttribute("value"));
//         if(sum >= 18) {
//             characterImage.setAttribute("src", "./images/happy1.png");
//         }
//         var level = parseInt(document.getElementsByTagName("meter")[i].getAttribute("value"));
            
//         if(level<=6) {
//             characterImage.setAttribute("src", "./images/sad.png");
//             switch(i) {
//                 case 0: {
//                     addWarning("Mi-e foame", "food");
//                     setTimeout(hideWarning(), 100);
//                     break;
//                 }
//                 case 1: {
//                     addWarning("Mi-e somn", "sleep");
//                     setTimeout(hideWarning(), 100);
//                     break;
//                 }
//                 case 2: {
//                     addWarning("Vreau sa ma joc", "play");
//                     setTimeout(hideWarning(), 100);
//                     break;
//                 }
//             }
//         }
        
//         if(level>6 && level<=12) {
//                 characterImage.setAttribute("src", "./images/meh.png");
//         }        
//     }
// }

// function addWarning(warningText, typeOfWarning) {
//     dialogText.style.display="block";
//     var element = document.querySelector(`[data-type=${typeOfWarning}]`);
//     if(element === null) {
//         element = document.createElement("p");
//         element.setAttribute("data-type", typeOfWarning);
//         var elementText = document.createTextNode(warningText);
//         element.appendChild(elementText);
//         dialogText.appendChild(element);
//         //setTimeout(hideWarning(typeOfWarning), 100);
//     }
    
// }

function hideWarning(typeOfWarning) {
    // document.querySelector(`[data-type=${typeOfWarning}]`).setAttribute("display", "none");
}
setInterval(myPet.dropFood, 1000);
setInterval(myPet.dropSleep, 3000);
setInterval(myPet.dropHappiness, 2000);
// setInterval(checkLevel, 100);