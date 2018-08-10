let pets = (function() {
  let myPets = [];
  let myObservers = [];

  function notifySubscribers() {
    myObservers.forEach(observer => {
      if (typeof observer.notify === 'function') {
        observer.notify(myPets);
      }
    });
  }
  return {
    addPet: name => {
      // console.log('Am ajuns la model');
      myPets.push(createTamagotchi(notifySubscribers, name));
      notifySubscribers();
    },
    addFood: petName => {
      let foundPet = myPets.find(element => {
        if (element.getName() === petName) {
          return true;
        }
        return false;
      });
      foundPet.eat();
      notifySubscribers();
    },
    addSleep: petName => {
      let foundPet = myPets.find(element => {
        if (element.getName() === petName) {
          return true;
        }
        return false;
      });
      foundPet.rest();
      notifySubscribers();
    },
    addHappiness: petName => {
      let foundPet = myPets.find(element => {
        if (element.getName() === petName) {
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
  };
})();
