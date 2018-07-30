function createTamagotchi(){
    let petName, userName, age, food=13, happiness=13, sleep=13;
    
    let myObservers=[];
    
    console.log("Am ajuns la createTama");

    return {
        eat: function() {
            if(food < 20) {
                food +=1;
            }
            else {
                //m-am saturat
            }
        },
        rest: function() {
            if(sleep < 20) {
                sleep +=1;
                notifySubscribers();
            }
            else {
                //m-am odihnit destul
            }
        },
        play: function() {
            if(happiness < 20) {
                happiness +=1;
                notifySubscribers();
            }
            else {
                //m-am jucat destul

            }
        },
        dropFood: function() {
            if(food > 0) {
                food -=1;
                notifySubscribers();
            }
        },
        dropSleep: function() {
            if(sleep > 0) {
                sleep -=1;
                notifySubscribers();
            }
        },
        dropHappiness: function() {
            if(happiness > 0) {
                happiness -=1;
                notifySubscribers();
            }
        },
        setNames: function(petName, userName){
          userName=userName;
          petName=petName;
        },
        setFoodMeter: function(foodLevel){
           food = foodLevel;
        },
        setSleepMeter: function(sleepLevel){
            sleep = sleepLevel;
        },
        setHappinessMeter: function(happinessLevel){
            happiness =  happinessLevel;
        },
        getFoodMeter: function(){
          return foodLevel;
         },
         getSleepMeter: function(){
            return sleepLevel;
         },
         getHappinessMeter: function(){
            return  happinessLevel;
         },
         getName : function(){
            return petName;
         }
    }
    // setInterval(dropFood, 1000);
    // setInterval(dropSleep, 3000);
    // setInterval(dropHappiness, 2000);
};