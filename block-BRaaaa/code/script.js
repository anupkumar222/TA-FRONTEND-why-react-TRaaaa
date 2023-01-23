let input = document.querySelector(`input[type="text"]`);
let rootElm = document.querySelector(`.movies_list`);

let allMovies = [
    {
        name: 'Forest Gump',
        watched: false
    },
    {
        name: 'Inception',
        watched: true
    },
];

input.addEventListener('keyup', (event) => {
    if(event.keyCode === 13) {
        allMovies.push({
            name : event.target.value,
            watched : false,
        })
        event.target.value = '';
        createMovieUI();
    }
})