function updateView() {
    createHtml();
    winOrLose();
    setInterval(decreaseHunger, 100);
    setInterval(decreaseThirst, 100);
    setInterval(addEgg, 5000);
    setInterval(removeEggs, 8000);
    winOrLose();
}

function decreaseHunger(){
    if (easterBunny.hunger > 0){
        easterBunny.hunger -=1;
        updateStats();
    }
}

function decreaseThirst(){
    if (easterBunny.thirst > 0){
        easterBunny.thirst -=1;
        updateStats();
    }
}

function fillHunger() {
    easterBunny.hunger += 10;
    if (easterBunny.hunger > 100){
        easterBunny.hunger = 100;
    }
    updateStats();
}

function fillThirst() {
    easterBunny.thirst += 10;
    if (easterBunny.thirst > 100){
        easterBunny.thirst = 100;
    }
    updateStats();
}

function updateStats() {
    const hungerProgress = document.getElementById('hunger');
    const thirstProgress = document.getElementById('thirst');

    hungerProgress.style.width = `${easterBunny.hunger}%`;
    thirstProgress.style.width = `${easterBunny.thirst}%`;
    winOrLose();
}

function addEgg() {
    const eggContainer = document.getElementById("egg-container");
    const eggy = document.createElement('img');
    const randomIndex = getNumber();
    eggy.src = images[randomIndex + 3];
    eggy.className = 'eggy';

    if (randomIndex === 1) { 
        eggy.addEventListener("click", function(event) {
            easterBunny.eggs--;
            document.getElementById('eggs').textContent = easterBunny.eggs;
            eggy.remove(); 
            console.log(easterBunny.eggs)
        });
    } else {
        eggy.addEventListener("click", collectEgg);
    }

    const positionX = Math.floor(Math.random() * 3) * 100;
    const positionY = Math.floor(Math.random() * 3) * 100;
    eggy.style.left = `${positionX}px`;
    eggy.style.top = `${positionY}px`;

    eggContainer.appendChild(eggy);

    setTimeout(() => {
        eggy.remove();
    }, 8000);
}


function removeEggs(){
    const eggContainer = document.getElementById('egg-container');
    const firstEgg = eggContainer.querySelector('.eggy');
    if (firstEgg) {
        firstEgg.remove();
    }
}


function collectEgg(event) {
    easterBunny.eggs++;
    const collectedEgg = event.target;
    collectedEgg.remove();
    document.getElementById('eggs').textContent = easterBunny.eggs;
    console.log(easterBunny.eggs)
}


function getNumber() {
    return Math.floor(Math.random() * 2);
}

function winOrLose() {
    const bunnyImage = document.getElementById('bunnyImage');
    if (easterBunny.hunger <= 0) {
        document.getElementById("stats").innerHTML = `<p>You forgot to feed the easter bunny, so now you are his lunch.</p>`;
        bunnyImage.src = images[1];
    } else if (easterBunny.thirst <= 0) {
        document.getElementById("stats").innerHTML = `<p>You forgot to give water to the easter bunny, so he will drink your blood.</p>`;
        bunnyImage.src = images[1];
    } else if (easterBunny.eggs >= 10) {
        document.getElementById("stats").innerHTML = `<p>The easter bunny has now locked and loaded his bazooka with easter eggs and is ready to give it to the people!</p>`;
        bunnyImage.src = images[2];
    } else bunnyImage.src = images[0];

}