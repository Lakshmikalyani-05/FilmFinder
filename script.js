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
function searchMovies() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let movies = document.querySelectorAll(".movie-card");

    movies.forEach(function(movie) {
        let movieName = movie.querySelector("h3").innerText.toLowerCase();

        if (movieName.includes(input)) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
}