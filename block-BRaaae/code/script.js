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
        createMovieUI(allMovies, rootElm);
    }
})

function handleChange(event) {
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched;
    createMovieUI(allMovies, rootElm);
}

// function elm(type, attr = {}, ...children) {
//     let element = document.createElement(type);
//     for(let key in attr) {
//         element[key] = attr[key];
//     }
//     children.forEach((child) => {
//         if(typeof child === "object") {
//             element.append(child);
//         }
//         if(typeof child === "string") {
//             let node = documnet.createTextNode(child);
//             element.append(node);
//         }
//     })
//     return element;
// }

let elm = React.createElement

function createMovieUI(data, root) {
    // root.innerHTML = '';
   let ui = data.map((movie, i) => {
    console.log(movie);
        let li = elm('li', {},
        elm('label', {
            for: i, 
        }, movie.name),
        
        elm('button', {
            id : i,
            function: addEventListener('click', handleChange),
        }, movie.watched ? 'Watched' : 'To Watch'),   
        );
        return li;
    })
    ReactDOM.render(ui, root);
}

createMovieUI(allMovies, rootElm);