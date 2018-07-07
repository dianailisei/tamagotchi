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

document.getElementById("food-img").addEventListener("click", myPet.eat);
document.getElementById("sleep-img").addEventListener("click", myPet.rest);
document.getElementById("game-img").addEventListener("click", myPet.play);
document.getElementById("character-img").addEventListener("click", setNames);

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

setInterval(myPet.dropFood, 9000);
setInterval(myPet.dropSleep, 10000);
setInterval(myPet.dropHappiness, 7000);
setInterval(checkLevel, 100);