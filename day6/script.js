const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()



// const checkBoxes = () => {
//     const triggerB = window.innerHeight / 5 * 4
//     boxes.forEach(box => {
//         const boxT = box.getBoundingClientRect().top
//         if (boxT < triggerB) {
//             box.classList.add('show')
//         } else {
//             box.classList.remove('show')
//         }
//     })
// }
function checkBoxes() {
    
    const triggerB = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxT = box.getBoundingClientRect().top
        if (boxT < triggerB) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}