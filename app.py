from flask import Flask

app = Flask(__name__)

movies = [
    {
        "name": "Sita Ramam",
        "language": "Telugu",
        "category": "Romance",
        "rating": 8.5
    },
    {
        "name": "RRR",
        "language": "Telugu",
        "category": "Action",
        "rating": 8.0
    },
    {
        "name": "Dangal",
        "language": "Hindi",
        "category": "Sports Drama",
        "rating": 8.3
    }
]

@app.route("/")
def home():
    return "FilmFinder Backend is Working!"

@app.route("/movies")
def get_movies():
    return movies

if __name__ == "__main__":
    app.run(debug=True)