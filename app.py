from flask import Flask
import json

app = Flask(__name__)

@app.route("/")
def home():
    return "FilmFinder Backend is Working!"

@app.route("/movies")
def get_movies():
    with open("backend/movies.json", "r") as file:
        movies = json.load(file)

    return movies

if __name__ == "__main__":
    app.run(debug=True)