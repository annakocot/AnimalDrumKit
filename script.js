let audio_volume = 0.6;

const animate = (key) => {
    const currentKey = document.querySelector(`.${key}`)
    currentKey.classList.add('pressed')
    setTimeout(() => {
        currentKey.classList.remove('pressed')
    }, 250)

}

const playSound = (path) => {
    const audio = new Audio(path);
    audio.volume = audio_volume;
    audio.play();
}

document.addEventListener('keypress', (event) =>{
    const triggeredKey = event.key;
    makeSound(triggeredKey);
    animate(triggeredKey);
});



const slider = document.getElementById('volume__slider');
slider.oninput = (event) => {
    audio_volume = event.target.value / 100;
}

let autoPlayId;
let autoPlayOn = false;

const startAutoPlay = () => {
    const letters = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

    autoPlayId = setInterval(() =>{
    const current_key = letters[Math.floor(Math.random()* letters.length)];
    makeSound(current_key);
    animate(current_key);
}, 200)
}


const autoPlayButton = document.getElementById('autoplay');
autoPlayButton.addEventListener('click', () => {
    if (!autoPlayOn) {
        startAutoPlay();
        autoPlayOn = true;
        autoPlayButton.classList.add("autoPlayOn");
        autoPlayButton.innerText = "Stop That Noise";
    }

    else {
        clearInterval(autoPlayId);
        autoPlayOn = false;
        autoPlayButton.classList.remove("autoPlayOn");
        autoPlayButton.innerText = "Let Animal Play";
    }
});


const makeSound = (key) => {

    switch (key) {
        case "a":
            playSound("./sounds/sound-1.wav");
            break;
        case "s":
            playSound("./sounds/sound-2.wav");
            break;
        case "d":
            playSound("./sounds/sound-3.wav");
            break;
        case "f":
            playSound("./sounds/sound-4.wav");
            break;
        case "g":
            playSound("./sounds/sound-5.wav");
            break;
        case "h":
            playSound("./sounds/sound-6.wav");
            break;
        case "j":
            playSound("./sounds/sound-7.wav");
            break;
        case "k":
            playSound("./sounds/sound-8.wav");
            break;
        case "l":
            playSound("./sounds/sound-9.wav");
            break;
    }
}
