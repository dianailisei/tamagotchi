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

function checkLevel() {
    var sum = 0;
    for(var i=0; i<3; i++)
    {
        sum += parseInt(document.getElementsByTagName("meter")[i].getAttribute("value"));
    }
    if(sum >= 18) {
        document.getElementById("poza_caracter").setAttribute("src", "happy1.png");
    }
    for(var i=0; i<3; i++)
    {
        var level = parseInt(document.getElementsByTagName("meter")[i].getAttribute("value"));
        
        if(level<=6) {
            document.getElementById("poza_caracter").setAttribute("src", "sad.png");
            if(i==2){
                document.getElementById("dialog").setAttribute("visibility", "visible");
                document.getElementById("dialog1").setAttribute("src", "dialog2.png");
            }
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
lap(dropHappiness, 1000);
lap(checkLevel, 100);