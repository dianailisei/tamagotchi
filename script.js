function createTamagotchi (inputName, inputUserName, foodLevel = 13, sleepLevel = 13, happinessLevel = 13, years = 22) {
    var tamagotchi = {
        name:inputName,
        userName:inputUserName,
        age: years,
        food: foodLevel,
        happiness: happinessLevel,
        sleep: sleepLevel
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
        sum = foodLvl + sleepLvl + happinessLvl;
        if(sum >= 18) {
            document.getElementById("poza_caracter").setAttribute("src", "happy1.png");
        }
        var level = parseInt(document.getElementsByTagName("meter")[i].getAttribute("value"));
            
        if(level<=6) {
            document.getElementById("poza_caracter").setAttribute("src", "sad.png");
        }
        if(level>6 && level<=12) {
                document.getElementById("poza_caracter").setAttribute("src", "meh.png");
        }
    }
}

function lap(cb, nr) {
    setTimeout(recursiveTimeout, nr);

    function recursiveTimeout() {
        cb();
        setTimeout(recursiveTimeout, nr);
    }
}

lap(dropFood, 9000);
lap(dropSleep, 10000);
lap(dropHappiness, 7000);
lap(checkLevel, 100);