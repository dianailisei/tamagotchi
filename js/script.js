function createTamagotchi (inputName, inputUserName, foodLevel = 13, sleepLevel = 13, happinessLevel = 13, years = 22) {
    let tamagotchi = {
        name:inputName,
        userName:inputUserName,
        age: years,
        food: foodLevel,
        happiness: happinessLevel,
        sleep: sleepLevel,
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

document.getElementById("food-img").addEventListener("click", giveFood);
document.getElementById("sleep-img").addEventListener("click", giveSleep);
document.getElementById("game-img").addEventListener("click", giveHappiness);
document.getElementById("character-img").addEventListener("click", setNames);

function giveFood() {
    var level = parseInt(foodMeter.getAttribute("value")) +1;
    foodMeter.setAttribute("value", level);
}

function giveSleep() {
    var level = parseInt(sleepMeter.getAttribute("value")) +1;
    sleepMeter.setAttribute("value", level);
}

function giveHappiness() {
    var level = parseInt(happinessMeter.getAttribute("value")) +1;
    happinessMeter.setAttribute("value", level);
}

function dropFood() {
    var level = parseInt(foodMeter.getAttribute("value")) -1;
    foodMeter.setAttribute("value", level);
}

function dropSleep() {
    var level = parseInt(sleepMeter.getAttribute("value")) -1;
    sleepMeter.setAttribute("value", level);
}

function dropHappiness() {
    var level = parseInt(happinessMeter.getAttribute("value")) -1;
    happinessMeter.setAttribute("value", level);
}

function checkLevel() {
    var sum = 0;
    for(var i=0; i<3; i++)
    {
        sum = parseInt(foodMeter.getAttribute("value")) + parseInt(sleepMeter.getAttribute("value")) + parseInt(happinessMeter.getAttribute("value"));
        if(sum >= 18) {
            document.getElementById("character-img").setAttribute("src", "./images/happy1.png");
        }
        var level = parseInt(document.getElementsByTagName("meter")[i].getAttribute("value"));
            
        if(level<=6) {
            document.getElementById("character-img").setAttribute("src", "./images/sad.png");
        }
        if(level>6 && level<=12) {
                document.getElementById("character-img").setAttribute("src", "./images/meh.png");
        }
    }
}

setInterval(dropFood, 9000);
setInterval(dropSleep, 10000);
setInterval(dropHappiness, 7000);
setInterval(checkLevel, 100);