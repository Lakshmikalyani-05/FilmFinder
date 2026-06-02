let allMovies = [];
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

    let filteredMovies = allMovies.filter(movie =>
        movie.name.toLowerCase().includes(input)
    );

    displayMovies(filteredMovies);
}

    if (visibleCount === 0) {
        document.getElementById("noMovies").style.display = "block";
    } else {
        document.getElementById("noMovies").style.display = "none";
    }
}
function filterMovies() {

    let selectedLanguage =
        document.getElementById("languageFilter").value;

    let selectedCategory =
        document.getElementById("categoryFilter").value;

    let filteredMovies = allMovies.filter(movie => {

        let languageMatch =
            selectedLanguage === "All" ||
            movie.language === selectedLanguage;

        let categoryMatch =
            selectedCategory === "All" ||
            movie.category === selectedCategory;

        return languageMatch && categoryMatch;
    });

    displayMovies(filteredMovies);
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
    allMovies = await response.json();
    displayMovies(allMovies);

    let container = document.getElementById("backendMovieContainer");

    container.innerHTML = "";

    movies.forEach(movie => {

        container.innerHTML += `
        <div class="movie-card ${movie.language} ${movie.category}">

            <img src="${movie.poster}" alt="${movie.name}">

            <h3>${movie.name}</h3>

            <p><b>Language:</b> ${movie.language}</p>

            <p><b>Genre:</b> ${movie.category}</p>

            <p><b>Rating:</b> ⭐ ${movie.rating}/10</p>

            <p class="short-description">
                ${movie.shortDescription}
            </p>

            <p class="full-description">
                ${movie.fullDescription}
            </p>

            <button class="details-btn" onclick="toggleDescription(this)">
                Read More
            </button>

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
function displayMovies(movies) {

    let container = document.getElementById("movieContainer");

    container.innerHTML = "";

    movies.forEach(movie => {

        container.innerHTML += `
        <div class="movie-card ${movie.language} ${movie.category}">

            <img src="${movie.poster}" alt="${movie.name}">

            <h3>${movie.name}</h3>

            <p><b>Language:</b> ${movie.language}</p>

            <p><b>Genre:</b> ${movie.genre}</p>

            <p><b>Rating:</b> ⭐ ${movie.rating}/10</p>

            <p class="short-description">${movie.shortDescription}</p>

            <p class="full-description">${movie.fullDescription}</p>

            <button class="details-btn" onclick="toggleDescription(this)">
                Read More
            </button>

        </div>
        `;
    });
}