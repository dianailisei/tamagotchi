function createTamagotchi (inputName, inputUserName, foodLevel = 13, sleepLevel = 13, happinessLevel = 13, years = 22) {
    let tamagotchi = {
        name:inputName,
        userName:inputUserName,
        age: years,
        food: foodLevel,
        happiness: happinessLevel,
        sleep: sleepLevel,

        eat: function() {
            var level = parseInt(foodMeter.getAttribute("value"));
            if(level < 20) {
                level +=1;
                foodMeter.setAttribute("value", level);
            }
            else {
                //m-am saturat
            }
        },
        rest: function() {
            var level = parseInt(sleepMeter.getAttribute("value"));
            if(level < 20) {
                level +=1;
                sleepMeter.setAttribute("value", level);
            }
            else {
                //m-am odihnit destul
            }
        },
        play: function() {
            var level = parseInt(happinessMeter.getAttribute("value"));
            if(level < 20) {
                level +=1;
                happinessMeter.setAttribute("value", level);
            }
            else {
                //m-am jucat destul

            }
        },
        dropFood: function() {
            var level = parseInt(foodMeter.getAttribute("value"));
            if(level > 0) {
                level -=1;
                foodMeter.setAttribute("value", level);
            }
        },
        dropSleep: function() {
            var level = parseInt(sleepMeter.getAttribute("value"));
            if(level > 0) {
                level -=1;
                sleepMeter.setAttribute("value", level);
            }
        },
        dropHappiness: function() {
            var level = parseInt(happinessMeter.getAttribute("value"));
            if(level > 0) {
                level -=1;
                happinessMeter.setAttribute("value", level);
            }
        }
    }
    return tamagotchi;
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
let dialogText = document.getElementById("dialog-text");
let characterImage = document.getElementById("character-img");
let characterSpace = document.getElementById("character");
let featuresImg =document.getElementsByClassName("features"); 
let pet2 =document.getElementById("pet2"); 

document.getElementById("food-img").addEventListener("click", myPet.eat);
document.getElementById("sleep-img").addEventListener("click", myPet.rest);
document.getElementById("game-img").addEventListener("click", myPet.play);
characterImage.addEventListener("click", setNames);

document.getElementById("add-pet").addEventListener("click", addPet);

function addPet(){
    characterSpace.style.left="15%";
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

    // var myPet2=createTamagotchi();

    pet2.style.display="inline";
}

// function addCharacteristic(){

//     // var chImg=document.createElement("div");
//     // chImg.classList.add("features");
//     // var food-img-new=document
// }

function checkLevel() {
    var sum = 0;
    dialogText.style.display="none";
    for(var i=0; i<3; i++)
    {
        sum = parseInt(foodMeter.getAttribute("value")) + parseInt(sleepMeter.getAttribute("value")) + parseInt(happinessMeter.getAttribute("value"));
        if(sum >= 18) {
            characterImage.setAttribute("src", "./images/happy1.png");
        }
        var level = parseInt(document.getElementsByTagName("meter")[i].getAttribute("value"));
            
        if(level<=6) {
            characterImage.setAttribute("src", "./images/sad.png");
            switch(i) {
                case 0: {
                    addWarning("Mi-e foame", "food");
                    setTimeout(hideWarning(), 100);
                    break;
                }
                case 1: {
                    addWarning("Mi-e somn", "sleep");
                    setTimeout(hideWarning(), 100);
                    break;
                }
                case 2: {
                    addWarning("Vreau sa ma joc", "play");
                    setTimeout(hideWarning(), 100);
                    break;
                }
            }
        }
        
        if(level>6 && level<=12) {
                characterImage.setAttribute("src", "./images/meh.png");
        }        
    }
}

function addWarning(warningText, typeOfWarning) {
    dialogText.style.display="block";
    var element = document.querySelector(`[data-type=${typeOfWarning}]`);
    if(element === null) {
        element = document.createElement("p");
        element.setAttribute("data-type", typeOfWarning);
        var elementText = document.createTextNode(warningText);
        element.appendChild(elementText);
        dialogText.appendChild(element);
        //setTimeout(hideWarning(typeOfWarning), 100);
    }
    
}

function hideWarning(typeOfWarning) {
    // document.querySelector(`[data-type=${typeOfWarning}]`).setAttribute("display", "none");
}
setInterval(myPet.dropFood, 1000);
setInterval(myPet.dropSleep, 3000);
setInterval(myPet.dropHappiness, 2000);
setInterval(checkLevel, 100);