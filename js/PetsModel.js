let pets =(function(){
    let myPets= [];
    let myObservers = [];


    function notifySubscribers() {
        myObservers.forEach(function (observer) {
            if (typeof observer.notify === "function") {
                observer.notify(myPets);
            }
        });
    }

    return{
        addPet: function(){ 
            myPets.push(createTamagotchi());
        }, 
        addFood:  function(petName){
            let foundPet = myPets.find(function(element)  {
                if(element.getName() === petName){
                    return true;
                }
                return false;
            });
            foundPet.eat();
        },
        addSleep:  function(petName){
            let foundPet = myPets.find(function(element)  {
                if(element.getName() === petName){
                    return true;
                }
                return false;
            });
            foundPet.rest();
        },
        addHappiness:  function(petName){
            let foundPet = myPets.find(function(element)  {
                if(element.getName() === petName){
                    return true;
                }
                return false;
            });
            foundPet.play();
        },
        subscribe(observer) {
            myObservers.push(observer);
            observer.notify(myPets);
        }
    }
})();