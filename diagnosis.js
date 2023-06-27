const quiz_button = document.getElementById('quiz-button')
const quiz_container = document.getElementById('quiz-container')

quiz_button.addEventListener('click', e => {
    quiz_container.classList.add('show')
})
