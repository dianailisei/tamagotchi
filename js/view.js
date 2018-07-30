function createPetsView(myModel, onAddFoodcb, onAddSleepcb, onAddPlaycb) {
    let div = document.createElement("div");
    let foodType="food";
    let sleepType="sleep";
    let happyType="happy";
    console.log("Am intrat in view");
   
    let foodImgNr=document.getElementsByClassName("food-img");
    let sleepImgNr=document.getElementsByClassName("sleep-img");
    let gameImgNr=document.getElementsByClassName("game-img");
    let characterImage = document.getElementById("character-img");

    div.addEventListener("click", function(e) {
        let elementClicked = e.target;

        if(elementClicked.dataset["food"]) { 
            onAddFoodcb(elementClicked.dataset["food"]);
        }
        if(elementClicked.dataset["sleep"]) {
            onAddSleepcb(elementClicked.dataset["sleep"]);
        }
        if(elementClicked.dataset["play"]) {
            onAddPlaycb(elementClicked.dataset["play"]);
        }
        
    });
    console.log("Oare ajung vreodata aici?");
    div.notify = function(myPets) {
        div.innerHTML = null;
        console.log("Am notificat");
        console.log(myPets);


        myPets.forEach(function(element) {
            console.log("Am intrat");
            
            var chImg=document.createElement("div");
            chImg.classList.add("features");
            document.getElementById("background").appendChild(chImg);

            var foodImgNew=document.createElement("span");
            chImg.appendChild(foodImgNew);

            var meterNew=document.createElement("meter");
            meterNew.value=element.getFoodMeter();
            meterNew.classList.add("meter--new");
            foodImgNew.appendChild(meterNew);

            var foodImg=document.createElement("img");
            foodImg.setAttribute("data-type",foodType);
            foodImg.setAttribute("data-name",element.getName());
            foodImg.src="./images/mancare.png";  
            foodImg.classList.add("width-13");
            foodImgNew.insertBefore(foodImg,meterNew);

            var chImg1=document.createElement("div");
            chImg1.classList.add("features");
            document.getElementById("background").appendChild(chImg1);

            var sleepImgNew=document.createElement("span");
            chImg1.appendChild(sleepImgNew);

            var meterNew1=document.createElement("meter");
            meterNew.value=element.getSleepMeter();
            meterNew1.classList.add("meter--new");
            sleepImgNew.appendChild(meterNew1);

            var sleepImg=document.createElement("img");
            sleepImg.setAttribute("data-type",sleepType);
            sleepImg.setAttribute("data-name",element.getName());
            sleepImg.src="./images/pat.png";
            sleepImg.classList.add("width-13");
            sleepImgNew.insertBefore(sleepImg,meterNew1);
        

            var chImg2=document.createElement("div");
            chImg2.classList.add("features");
            document.getElementById("background").appendChild(chImg2);

            var happyImgNew=document.createElement("span");
            chImg2.appendChild(happyImgNew);

            var meterNew2=document.createElement("meter");
            meterNew.value=element.getHappinessMeter();
            meterNew2.classList.add("meter--new");
            happyImgNew.appendChild(meterNew2);

            var happyImg=document.createElement("img");
            happyImg.setAttribute("data-type",happyType);
            happyImg.setAttribute("data-name",element.getName());
            happyImg.src="./images/joc.png";
            happyImg.classList.add("width-13");
            happyImgNew.insertBefore(happyImg,meterNew2);

            let x = Math.floor(Math.random() * (1280 - 10) + 10);
            var characterNew=document.createElement("div");
            characterNew.classList.add("character");
            characterNew.style.left = `${x}px`;
            document.getElementById("background").appendChild(characterNew);

            var characterNewImage=document.createElement("img");
            characterNewImage.setAttribute("data-name", element.getName());
            characterNewImage.classList.add("character-img");
            characterNewImage.src="./images/happy1.png";

            characterNew.appendChild(characterNewImage);          

        }); 
    }

    myModel.subscribe(div);
    return div;  
}
