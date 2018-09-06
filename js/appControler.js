let petView = createPetsView(pets, onAddFood, onAddSleep, onAddPlay);

document.getElementById("background").appendChild(petView);

console.log(petView);

document.getElementById("add-pet").addEventListener("click", function () {
    var petName = prompt("Please enter pet's name", "Harry Potter");
    pets.addPet(petName);
});

function onAddFood(petName) {
    pets.addFood(petName);
}

function onAddSleep(petName) {
    pets.addSleep(petName);
}

function onAddPlay(petName) {
    pets.addHappiness(petName);
}

let body = document.getElementById("background");

// body.style.backgroundImage = " url(https://picsum.photos/200/300/?random)";

// ImageService.getImage(
//     function (resp) {
//         let imageurl = resp.post_url;
//         // console.log(imageurl , "fdsf");
//         // body.style.backgroundImage = `url(${imageurl})`;
//     },
//     function (err) {
//         alert('Unauthorized');
//     }
// );

let jokeBut = document.getElementById("add-joke");
let joke = document.getElementById("joke-p");
jokeBut.addEventListener("click" , function(){    
    joke.innerText = "";
    // JokeService.getJoke(
    //     function (resp) {
    //         joke.innerText = resp.value.joke;
    //     },
    //     function (err) {
    //         alert('Unauthorized');
    //     }
    // );
    JokeService.getJoke(resp).then(
        resp => {   joke.innerText = resp.value.joke;},
        err => { alert('Unauthorized');}
      );
})




