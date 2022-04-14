"use sctrict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

personalMovieDB.movies = {
	a: prompt("Один из последних просмотренных фильмов", ""),
	b: prompt("На сколько оцените его?", ""),
	c: prompt("Один из последних просмотренных фильмов", ""),
	d: prompt("На сколько оцените его?", "")
};


alert(personalMovieDB.movies.a + " : " + personalMovieDB.movies.b);
alert(personalMovieDB.movies.c + " : " + personalMovieDB.movies.d);