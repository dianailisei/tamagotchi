let tamagotchi = (function() {
    let name, userName, age, food=13, happiness=13, sleep=13, foodMeter, sleepMeter, happinessMeter;

    return {
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
        },
        setNames: function(){
            if(name === undefined)
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
        },
        setFoodMeter: function(foodLevel){
            foodMeter = foodLevel;
        },
        setSleepMeter: function(sleepLevel){
            sleepMeter = sleepLevel;
        },
        setHappinessMeter: function(happinessLevel){
            happinessMeter = happinessLevel;
        }
    }
}());