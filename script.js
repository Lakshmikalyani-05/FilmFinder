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
    let visibleCount = 0;

    movies.forEach(function(movie) {
        let movieName = movie.querySelector("h3").innerText.toLowerCase();

        if (movieName.includes(input)) {
            movie.style.display = "block";
            visibleCount++;
        } else {
            movie.style.display = "none";
        }
    });

    if (visibleCount === 0) {
        document.getElementById("noMovies").style.display = "block";
    } else {
        document.getElementById("noMovies").style.display = "none";
    }
}
function filterMovies() {
    let selectedLanguage = document.getElementById("languageFilter").value;
    let selectedCategory = document.getElementById("categoryFilter").value;
    let movies = document.querySelectorAll(".movie-card");

    movies.forEach(function(movie) {
        let languageMatch = selectedLanguage === "All" || movie.classList.contains(selectedLanguage);
        let categoryMatch = selectedCategory === "All" || movie.classList.contains(selectedCategory);

        if (languageMatch && categoryMatch) {
            movie.style.display = "block";
        } else {
            movie.style.display = "none";
        }
    });
}
function toggleDescription(button) {

    let shortDescription = button.previousElementSibling.previousElementSibling;
    let fullDescription = button.previousElementSibling;

    if (fullDescription.style.display === "none" || fullDescription.style.display === "") {

        shortDescription.style.display = "none";
        fullDescription.style.display = "block";
        button.innerText = "Show Less";

    } else {

        shortDescription.style.display = "block";
        fullDescription.style.display = "none";
        button.innerText = "Read More";

    }
}