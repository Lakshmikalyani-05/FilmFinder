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
    let shortDescription = button.parentElement.querySelector(".short-description");
    let fullDescription = button.parentElement.querySelector(".full-description");

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
function toggleFavorite(heart){

    if(heart.innerText === "🤍"){
        heart.innerText = "❤️";
    }
    else{
        heart.innerText = "🤍";
    }

}
async function loadMovies() {
    const response = await fetch("http://127.0.0.1:5000/movies");
    const movies = await response.json();

    let container = document.getElementById("movieContainer");

    container.innerHTML = "";

    movies.forEach(movie => {

        container.innerHTML += `
        <div class="movie-card">

            <h3>${movie.name}</h3>

            <p><b>Language:</b> ${movie.language}</p>

            <p><b>Genre:</b> ${movie.category}</p>

            <p><b>Rating:</b> ⭐ ${movie.rating}/10</p>

            <p class="short-description">
                ${movie.shortDescription}
            </p>

        </div>
        `;
    });
}

loadMovies();
async function testBackendMovies() {
    const response = await fetch("http://127.0.0.1:5000/movies");
    const movies = await response.json();

    let box = document.getElementById("backendTest");

    movies.forEach(function(movie) {
        box.innerHTML += `<p>${movie.name} - ${movie.language}</p>`;
    });
}

testBackendMovies();