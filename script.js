var tamagotchi = {
    name:"",
    userName:"",
    age: 22,
    food: 20,
    happiness: 20,
    sleep: 20
}

function setNames() {
    if(tamagotchi.name == "")
    {
        tamagotchi.name=prompt("Please, give me a name", "Tammy");
        tamagotchi.userName=prompt("What's your name?", "User");
        alert("Hello, "+tamagotchi.userName+"! Welcome to my world!");
    }
    else {
        if(tamagotchi.userName=="") {
            tamagotchi.userName=prompt("What's your name?", "");
        }
        alert("Hello, "+tamagotchi.userName+"! My name is "+tamagotchi.name);
    }
}

function giveFood() {
    var level = parseInt(document.getElementsByTagName("meter")[0].getAttribute("value")) +1;
    document.getElementsByTagName("meter")[0].setAttribute("value", level);
}

function giveSleep() {
    var level = parseInt(document.getElementsByTagName("meter")[1].getAttribute("value")) +1;
    document.getElementsByTagName("meter")[1].setAttribute("value", level);
}

function giveHappiness() {
    var level = parseInt(document.getElementsByTagName("meter")[2].getAttribute("value")) +1;
    document.getElementsByTagName("meter")[2].setAttribute("value", level);
}

function dropFood() {
    var level = parseInt(document.getElementsByTagName("meter")[0].getAttribute("value")) -1;
    document.getElementsByTagName("meter")[0].setAttribute("value", level);
}

function dropSleep() {
    var level = parseInt(document.getElementsByTagName("meter")[1].getAttribute("value")) -1;
    document.getElementsByTagName("meter")[1].setAttribute("value", level);
}

function dropHappiness() {
    var level = parseInt(document.getElementsByTagName("meter")[2].getAttribute("value")) -1;
    document.getElementsByTagName("meter")[2].setAttribute("value", level);
}

function lap(cb, nr) {
    setTimeout(recursiveTimeout, nr);

    function recursiveTimeout() {
        cb();
        setTimeout(recursiveTimeout, nr);
    }
}
lap(dropFood, 10000);
lap(dropSleep, 15000);
lap(dropHappiness, 7000);