const programMenu = document.querySelectorAll('.program')
const programDetails = document.querySelector('.programDetails')

.programMenu.forEach(program => {
    program.addEventListener('click', () => {
        if(program.classList.contains('express')) {
            programDetails.innerHTML = `express details`
        }
    })
})