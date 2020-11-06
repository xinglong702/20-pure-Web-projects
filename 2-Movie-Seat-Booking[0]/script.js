const container = document.getElementsByClassName('container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

populateUI()

let ticketPrice = movieSelect.value

function setMovieDate(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex)
    localStorage.setItem('selectedMoviePrice', moviePrice)
}

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex))

    const selectedSeatCount = selectedSeats.length

    count.innerText = selectedSeatCount.toString()
    total.innerText = (selectedSeatCount * ticketPrice).toString()

    setMovieDate(movieSelect.selectedIndex, movieSelect.value)

}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex
    }
}

movieSelect.addEventListener('change', e => {
    ticketPrice = movieSelect.value
    setMovieDate(movieSelect.selectedIndex, movieSelect.value)
    updateSelectedCount()
});

container[0].addEventListener('click', e => {
    if (
        e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected')

        updateSelectedCount()
    }
});

updateSelectedCount()
