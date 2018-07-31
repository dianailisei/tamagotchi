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
        addPet: function(name){ 
            console.log("Am ajuns la model");
            myPets.push(createTamagotchi(notifySubscribers,name));
            notifySubscribers();
        }, 
        addFood:  function(petName){
            let foundPet = myPets.find(function(element)  {
                if(element.getName() === petName){
                    return true;
                }
                return false;
            });
            foundPet.eat();
            notifySubscribers();
        },
        addSleep:  function(petName){
            let foundPet = myPets.find(function(element)  {
                if(element.getName() === petName){
                    return true;
                }
                return false;
            });
            foundPet.rest();
            notifySubscribers();
        },
        addHappiness:  function(petName){
            let foundPet = myPets.find(function(element)  {
                if(element.getName() === petName){
                    return true;
                }
                return false;
            });
            foundPet.play();
            notifySubscribers();
        },
        
        subscribe(observer) {
            myObservers.push(observer);
            observer.notify(myPets);
        }
    }
})();