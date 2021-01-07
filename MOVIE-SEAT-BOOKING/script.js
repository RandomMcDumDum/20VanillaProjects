const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value;
// console.log(typeof ticketPrice);

// UPDATE TOTAL AND COUNT
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// MOVIE SELECT EVENT
movieSelect.addEventListener('change', function (e){
    ticketPrice = +e.target.value
    updateSelectedCount();
})

// SEAT SELECT EVENT
container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')

        updateSelectedCount();
    }
})