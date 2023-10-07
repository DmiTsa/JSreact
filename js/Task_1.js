"use strict";

let numberOfFilms = prompt("Сколько фильмов вы просмотрели?", "");

const personalMovieDB = {
    coont: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

let lastFilm = prompt("Один из последних просмотренных фильмов?","");
let ratingFilm = prompt("На сколько вы его оцените?","");

personalMovieDB.movies[lastFilm] = ratingFilm;

lastFilm = prompt("Один из последних просмотренных фильмов?","");
ratingFilm = prompt("На сколько вы его оцените?","");

personalMovieDB.movies[lastFilm] = ratingFilm;

console.log(personalMovieDB);
