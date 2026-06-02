let allMovies = [];

async function loadMovies() {
    try {
        const response = await fetch("http://127.0.0.1:5000/movies");

        if (!response.ok) {
            throw new Error("Backend response failed");
        }

        allMovies = await response.json();
        console.log("Movies loaded:", allMovies);

        displayMovies(allMovies);
    } catch (error) {
        console.log("Error loading movies:", error);
    }
}
function displayMovies(movies) {
    let container = document.getElementById("movieContainer");
    let noMovies = document.getElementById("noMovies");

    container.innerHTML = "";

    if (movies.length === 0) {
        noMovies.style.display = "block";
        return;
    } else {
        noMovies.style.display = "none";
    }

    movies.forEach(movie => {
        container.innerHTML += `
        <div class="movie-card ${movie.language} ${movie.category}">
            <div class="poster-container">
                <span class="heart-icon" onclick="toggleFavorite(this)">🤍</span>
                <img src="${movie.poster}" alt="${movie.name}">
            </div>

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

function searchMovies() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    let filteredMovies = allMovies.filter(movie =>
        movie.name.toLowerCase().includes(input)
    );

    displayMovies(filteredMovies);
}

function filterMovies() {
    let selectedLanguage = document.getElementById("languageFilter").value;
    let selectedCategory = document.getElementById("categoryFilter").value;

    let filteredMovies = allMovies.filter(movie => {
        let languageMatch =
            selectedLanguage === "All" || movie.language === selectedLanguage;

        let categoryMatch =
            selectedCategory === "All" || movie.category === selectedCategory;

        return languageMatch && categoryMatch;
    });

    displayMovies(filteredMovies);
}

function toggleDescription(button) {
    let card = button.parentElement;
    let shortDescription = card.querySelector(".short-description");
    let fullDescription = card.querySelector(".full-description");

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

function toggleFavorite(heart) {
    if (heart.innerText === "🤍") {
        heart.innerText = "❤️";
    } else {
        heart.innerText = "🤍";
    }
}

loadMovies();