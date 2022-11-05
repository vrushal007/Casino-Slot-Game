let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let inpSpeed = document.getElementById('inpSpeed')
let btnStart = document.getElementById('btnStart')
let btnStop = document.getElementById('btnStop')
let bgm = document.getElementById('bgm')
let btnMute = document.getElementById('btnMute')
let btnPlay = document.getElementById('btnPlay')

let animationId;
let values = [
    '😁', '😂', '😊', '😍', '🤔'
]

function getRandomValue() {
    return values[Math.floor(Math.random() * 5)]
}

function resetAnimation() {
    document.documentElement.style.setProperty('--speed', 0);
    document.documentElement.style.setProperty('--animc', 0);
}

function updateAnimation(newSpeed) {

    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {
        value1.innerText = getRandomValue();
        value2.innerText = getRandomValue();
        value3.innerText = getRandomValue();
        if ((value1.innerText == value2.innerText) && (value1.innerText == value3.innerText)) {
            resetAnimation();
            document.documentElement.style.setProperty('--delay', 0.5);
            clearInterval(animationId)
            setTimeout(() => {
                window.alert('You are the winner')
                document.documentElement.style.setProperty('--speed', newSpeed)
                document.documentElement.style.setProperty('--animc', 'infinite')
                document.documentElement.style.setProperty('--delay', 0)

                updateAnimation(document.documentElement.style.getPropertyValue('--speed'));
            }, 100)

        }
    }, 1000 / newSpeed)
}

window.onload = () => {
    bgm.play();
    resetAnimation();
    document.documentElement.style.setProperty('--delay', 0)
    
    btnStart.onclick = () => {
        let sp = inpSpeed.value
        document.documentElement.style.setProperty('--speed', sp)
        document.documentElement.style.setProperty('--animc', 'infinite')
        document.documentElement.style.setProperty('--delay', 0)
        updateAnimation(sp)
    }
    
    btnStop.onclick = () => {
        clearInterval(animationId)
        resetAnimation();
        document.documentElement.style.setProperty('--delay', 0)
    }

    btnMute.onclick = () => {
        bgm.pause();
    }

    btnPlay.onclick = ()=>{
        bgm.play();
    }
}