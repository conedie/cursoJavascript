const apiKey = '2e746298934fde7ecd8af4fb81e8e4d4';

// function que nos permite las conexiones al API

async function getMovie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    // return fetch(url).then(response => response.json());
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getPopularMovie() {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    try {
        // return fetch(url)
        //     .then(response => response.json())
        //     .then(data => data.results);
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.log(error);
    }
}

async function getTopMoviesIds(n = 3) {
    // return getPopularMovie().then(populatMovies =>
    //     populatMovies.slice(0, n).map(movie => movie.id)
    // );
    try {
        const popularMovies = await getPopularMovie();
        const ids = popularMovies.slice(0, n).map(movies => movies.id);
        return ids;
    } catch (error) {
        console.log(`Error en getTopMovies ${error}`);
    }
}


function renderMovies(movies) {
    const movieList = document.getElementById('movies');
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" />
            <h5>${movie.title}</h5>
            <p>Released on <em>${movie.release_date}</em></p>
        `;
        movieList.appendChild(listItem);
    });
}

async function getTopMoviesInSequence() {
    const ids = await getTopMoviesIds();
    const movies = [];

    for (const id of ids) {
        const movie = await getMovie(id);
        movies.push(movie);
    }
    return movies;
}

document.getElementById('sequence').onclick = async function() {
    const movie = await getTopMoviesInSequence();
    renderMovies(movie);
}

async function getTopMoviesInParallel() {
    const ids = await getTopMoviesIds();
    const moviesPromises = ids.map(id => getMovie(id));
    const movies = await Promise.all(moviesPromises);
    return movies;
}

document.getElementById('parallel').onclick = async function() {
    const movie = await getTopMoviesInParallel();
    renderMovies(movie);
}

async function getTopMovieFasTest() {
    const ids = await getTopMoviesIds();
    const moviesPromise = ids.map(id => getMovie(id));
    const movie = await Promise.race(moviesPromise);
    return movie;
}

document.getElementById('fastest').onclick = async function() {
    const movie = await getTopMovieFasTest();
    renderMovies([movie]);
}