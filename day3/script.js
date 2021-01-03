const open = document.getElementById('open');
const container = document.querySelector('.container')
const close = document.getElementById('close')


open.onclick = () => {
    container.classList.add('show-nav')

}

close.onclick = () => {
    container.classList.remove('show-nav')
}