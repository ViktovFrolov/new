"use strict";

/*let numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`,`` );

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

const first = prompt(`Один из последних просмотренных фильмов?`,),
      first_1 = prompt(`На сколько оцените его?`,),
      second = prompt(`Один из последних просмотренных фильмов?`,),
      second_1 = prompt(`На сколько оцените его?`,);

personalMovieDB.movies = {
    first: first_1,
    second: second_1
};

console.log(personalMovieDB);*/
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
