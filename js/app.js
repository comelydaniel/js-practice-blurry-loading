const backGround = document.querySelector('.bg');
const counter = document.querySelector('.counter');

let load = 0;

let int = setInterval(blur, 30)

function blur() {
    load++

    if (load > 99) {
        clearInterval(int)
    }

    counter.innerText = `${load}%`
    counter.style.opacity = scale(load, 0, 100, 1, 0)
    backGround.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}