function createPetsView(myModel, onAddFoodcb, onAddSleepcb, onAddPlaycb) {
  let div = document.createElement('div');
  let foodType = 'food';
  let sleepType = 'sleep';
  let happyType = 'happy';

  let foodImgNr = document.getElementsByClassName('food-img');
  let sleepImgNr = document.getElementsByClassName('sleep-img');
  let gameImgNr = document.getElementsByClassName('game-img');
  let characterImage = document.getElementById('character-img');

  div.addEventListener('click', e => {
    let elementClicked = e.target;

    if (elementClicked.dataset.type === 'food') {
      onAddFoodcb(elementClicked.dataset.name);
    }
    if (elementClicked.dataset.type === 'sleep') {
      onAddSleepcb(elementClicked.dataset.name);
    }
    if (elementClicked.dataset.type === 'happy') {
      onAddPlaycb(elementClicked.dataset.name);
    }
  });

  div.notify = function(myPets) {
    div.innerHTML = null;

    myPets.forEach(element => {
      // console.log('Am intrat');

      let chImg = document.createElement('div');
      chImg.classList.add('features');
      div.appendChild(chImg);

      let foodImgNew = document.createElement('span');
      chImg.appendChild(foodImgNew);

      let meterNew = document.createElement('meter');
      meterNew.value = element.getFoodMeter();
      meterNew.min = '-1';
      meterNew.low = '6';
      meterNew.high = '13';
      meterNew.optimum = '18';
      meterNew.max = '20';

      // console.log(element.getFoodMeter());

      meterNew.classList.add('meter--new');
      foodImgNew.appendChild(meterNew);

      let foodImg = document.createElement('img');
      foodImg.setAttribute('data-type', foodType);
      foodImg.setAttribute('data-name', element.getName());

      // console.log(element.getName());

      foodImg.src = './images/mancare.png';
      foodImg.classList.add('width-13');
      foodImgNew.insertBefore(foodImg, meterNew);

      let chImg1 = document.createElement('div');
      chImg1.classList.add('features');
      div.appendChild(chImg1);

      let sleepImgNew = document.createElement('span');
      chImg1.appendChild(sleepImgNew);

      let meterNew1 = document.createElement('meter');
      meterNew1.value = element.getSleepMeter();
      meterNew1.min = '-1';
      meterNew1.low = '6';
      meterNew1.high = '13';
      meterNew1.optimum = '18';
      meterNew1.max = '20';

      // console.log(element.getSleepMeter());

      meterNew1.classList.add('meter--new');
      sleepImgNew.appendChild(meterNew1);

      let sleepImg = document.createElement('img');
      sleepImg.setAttribute('data-type', sleepType);
      sleepImg.setAttribute('data-name', element.getName());
      sleepImg.src = './images/pat.png';
      sleepImg.classList.add('width-13');
      sleepImgNew.insertBefore(sleepImg, meterNew1);

      let chImg2 = document.createElement('div');
      chImg2.classList.add('features');
      div.appendChild(chImg2);

      let happyImgNew = document.createElement('span');
      chImg2.appendChild(happyImgNew);

      let meterNew2 = document.createElement('meter');
      meterNew2.value = element.getHappinessMeter();
      meterNew2.min = '-1';
      meterNew2.low = '6';
      meterNew2.high = '13';
      meterNew2.optimum = '18';
      meterNew2.max = '20';

      // console.log(element.getSleepMeter());

      meterNew2.classList.add('meter--new');
      happyImgNew.appendChild(meterNew2);

      let happyImg = document.createElement('img');
      happyImg.setAttribute('data-type', happyType);
      happyImg.setAttribute('data-name', element.getName());
      happyImg.src = './images/joc.png';
      happyImg.classList.add('width-13');
      happyImgNew.insertBefore(happyImg, meterNew2);

      let x = Math.floor(Math.random() * (1280 - 10) + 10);
      let characterNew = document.createElement('div');
      characterNew.classList.add('character');
      characterNew.style.left = `${x}px`;

      let characterNewImage = document.createElement('img');
      characterNewImage.setAttribute('data-name', element.getName());
      characterNewImage.classList.add('character-img');
      characterNewImage.src = './images/happy1.png';

      characterNew.appendChild(characterNewImage);
      div.appendChild(characterNew);
    });
  };

  myModel.subscribe(div);
  return div;
}
