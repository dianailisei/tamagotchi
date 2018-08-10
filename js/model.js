function createTamagotchi(onUpdate,myPetName){
    let petName;
    let userName;
    let age;
    let foodLevel=13;
    let happinessLevel=13;
    let sleepLevel=13;

    petName=myPetName;
    
    let myObservers=[];

    function dropFood() {
        if(foodLevel > 0) {
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

    return {
        eat: () => {
            if(foodLevel < 20) {
                foodLevel +=1;
            }
            else {
                // m-am saturat
            }
        },
        rest:  () => {
            if(sleepLevel < 20) {
                sleepLevel +=1;
            }
            else {
                // m-am odihnit destul
            }
        },
        play:  () => {
            if(happinessLevel < 20) {
                happinessLevel +=1;
            }
            else {
                // m-am jucat destul

            }
        },
        setNames: (petNameParam, userNameParam) =>{
          this.userName=userNameParam;
          this.petName=petNameParam;
        },
        setFoodMeter(foodLevelParam){
            this.foodLevel = foodLevelParam;
        },
        setSleepMeter(sleepLevelParam){
            this.sleepLevel = sleepLevelParam;
        },
        happinessLevel(happinessLevelParam){
            this.happinessLevel =  happinessLevelParam;
        },
        // getAttr: function(attr){
        //     return pet[attr];
        // }
        getFoodMeter:() => foodLevel,
        getSleepMeter: () => sleepLevel,
        getHappinessMeter: () => happinessLevel,
        getName: () => petName 
        //  getName : () => {
        //     return petName;
        //  }
    }
   
};