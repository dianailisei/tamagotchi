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
    
    function dropFood(petName){
        let foundPet = myPets.find(function(c)  {
            if(element.getName() === petName){
                element.dropFood();
                notifySubscribers();                    
            }
        });
    }
    function dropSleep(petName){
        let foundPet = myPets.find(function(element)  {
            if(element.getName() === petName){
                element.dropSleep();
                notifySubscribers();                    
            }
        });
    }
    function dropHappiness(petName){
        let foundPet = myPets.find(function(element)  {
            if(element.getName() === petName){
                element.dropHappiness();
                notifySubscribers();                    
            }
        });
    }
          
    return{
        addPet: function(){ 
            console.log("Am ajuns la model");
            myPets.push(createTamagotchi());
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