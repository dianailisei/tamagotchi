let petView = createPetsView(pets , onAddFood, onAddSleep, onAddPlay); 

document.getElementById("background").appendChild(petView);

console.log(petView);
 
 document.getElementById("add-pet").addEventListener("click",function(){
    var petName = prompt("Please enter pet's name", "Harry Potter");
     pets.addPet(petName);
});

function onAddFood(petName){
    pets.addFood(petName);
}

function onAddSleep(petName){
    pets.addSleep(petName);
}

function onAddPlay(petName){
    pets.addHappiness(petName);
}

let petView = createPetsView(pets , onAddFood, onAddSleep, onAddPlay); 

document.getElementById("background").appendChild(petView);

// console.log(petView);
 
 document.getElementById("add-pet").addEventListener("click", ()=>{
    let petName = prompt("Please enter pet's name", "Harry Potter");
     pets.addPet(petName);
});


ImageService.getImage(
    function(resp) {

      console.log(resp , "Hello");
    },
    function(err) {
        alert('Unauthorized');
    }
);