
const labels = document.querySelectorAll('.form-control label')


// input.addEventListener('click', () => {
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter,idx) => `<span style="transition-delay:${idx *50}ms">${letter}</span>`)
        .join('')
})


// })

// labels.forEach(label => {
//     label.innerHTML = label.innerText
//         .split('')
//         .map((letter,idx) => `<span style="transition-delay:${idx *50}">${letter}</span>`)
//         .join('')
// })


