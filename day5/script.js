const img = document.querySelector('.img')
const content = document.querySelector('.content')


let load = 0

let interval = setInterval(blur,30)
function blur() {
    load++;

    if (load > 99) {
        clearInterval(interval)
    }

    content.innerText = `Loading...${load}%`
    content.style.opacity = scale(load, 0, 100, 1, 0)
    img.style.filter = `blur(${scale(load,0 , 100, 100, 0)}px)`
    
    
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
