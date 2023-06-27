const book_button = document.getElementById('book-button')
const booking_container = document.getElementById('booking-container')
const submit_button = document.getElementById('submit-button')
const exit_button = document.getElementById('exit-button')

book_button.addEventListener('click', e => {
    booking_container.classList.add('show')
})

submit_button.addEventListener('click', e => {
    booking_container.classList.remove('show')
})

exit_button.addEventListener('click', e => {
    booking_container.classList.remove('show')
})