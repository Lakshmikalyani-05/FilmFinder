function showMovies(language) {
    let movies = document.querySelectorAll(".movie-card");

    movies.forEach(function(movie) {
        if (language === "All" || movie.classList.contains(language)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
}