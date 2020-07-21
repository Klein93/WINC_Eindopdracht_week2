const avengersbutton = document.getElementById("avengers");
const batmanbutton = document.getElementById("batman");
const xmenbutton = document.getElementById("xmen");
const newmoviesbutton = document.getElementById("newest");
const princessbutton = document.getElementById("princess");
const filteredMovielist = document.getElementById("filteredList");
const searchbutton = document.getElementById("searchbutton");
const searchinput = document.getElementById("inputfield");


const filterMoviebyTitle = function (titlepart) {
    const moviesWithTitlePart = allMovies.filter(movie => movie.Title.includes(titlepart));
    addMoviesToDom(moviesWithTitlePart);
}

const filterNewMovies = function () {
    const newMovies = allMovies.filter(movie => movie.Year > 2014);
    addMoviesToDom(newMovies);
}


const searchByTitlepart = function (titlestring) {
    const result = allMovies.filter(movie => movie.Title.toLowerCase().match(titlestring));
    addMoviesToDom(result);
}

const addMoviesToDom = function (movies) {
    filteredMovielist.innerHTML = "";
    movies.forEach(movie => {
        const newitem = document.createElement("li");
        const newimg = document.createElement("img");
        const newa = document.createElement("a");
        newimg.src = movie.Poster;
        newa.href = `https://www.imdb.com/title/${movie.imdbID}/`
        newa.appendChild(newimg);
        newitem.appendChild(newa);
        filteredMovielist.appendChild(newitem);

    });
};

document.addEventListener("DOMContentLoaded", function () {
    addMoviesToDom(allMovies);
    avengersbutton.addEventListener("click", function () { filterMoviebyTitle(avengersbutton.value) })
    batmanbutton.addEventListener("click", function () { filterMoviebyTitle(batmanbutton.value) })
    xmenbutton.addEventListener("click", function () { filterMoviebyTitle(xmenbutton.value) })
    newmoviesbutton.addEventListener("click", function () { filterNewMovies() });
    princessbutton.addEventListener("click", function () { filterMoviebyTitle(princessbutton.value) })
    searchbutton.addEventListener("click", function () { searchByTitlepart(searchinput.value) })

})

