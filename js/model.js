function createTamagotchi(onUpdate,myPetName){
    let petName, userName, age, foodLevel=13, happinessLevel=13, sleepLevel=13;

    petName=myPetName;
    
    let myObservers=[];

    function dropFood() {
        if(foodLevel > 0) {
            console.log("Scad viata");
            foodLevel -=1;
            onUpdate();
        }
    }
    function dropSleep() {
        if(sleepLevel > 0) {
            sleepLevel -=1;
            onUpdate();
        }
    }
    function dropHappiness() {
        if(happinessLevel > 0) {
            happinessLevel -=1;
            onUpdate();
        }
    }

    setInterval(dropFood, 1000);
    setInterval(dropSleep, 3000);
    setInterval(dropHappiness, 2000);
    
    console.log("Am ajuns la createTama");

    return {
        eat: () => {
            if(foodLevel < 20) {
                foodLevel +=1;
            }
            else {
                //m-am saturat
            }
        },
        rest:  () => {
            if(sleepLevel < 20) {
                sleepLevel +=1;
            }
            else {
                //m-am odihnit destul
            }
        },
        play:  () => {
            if(happinessLevel < 20) {
                happinessLevel +=1;
            }
            else {
                //m-am jucat destul

            }
        },
        setNames: (petName ,userName) =>{
          userName=userName;
          petName=petName;
        },
        setFoodMeter(foodLevel){
            foodLevel = foodLevel;
        },
        setSleepMeter(sleepLevel){
            sleepLevel = sleepLevel;
        },
        happinessLevel(happinessLevel){
            happiness =  happinessLevel;
        },
        // getAttr: function(attr){
        //     return pet[attr];
        // }
        getFoodMeter:() =>{
          return foodLevel;
         },
         getSleepMeter: () => {
            return sleepLevel;
         },
         getHappinessMeter: () => {
            return  happinessLevel;
         },
         getName : () => {
            return petName;
         }
    }
   
};