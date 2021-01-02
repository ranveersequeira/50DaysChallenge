

const  panels = document.querySelectorAll('.panel')


panels.forEach((panel) => {
    panel.addEventListener('click' , () => {
        removeActiveClasses() // removing rest of active classes to get only one expand at once 
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

