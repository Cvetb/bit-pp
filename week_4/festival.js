'use strict';
(function () {

    console.log('Hi!');


    function Genre(name) {
        this.name = name;
        this.getData = function () {
            return (this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase());
        }
    }

    function Movie(title, length, genre) {
        this.title = title;
        this.length = parseInt(length);
        this.genre = genre;
        this.getData = function () {
            return this.title + ' , ' + this.length + ' min, ' + this.genre.getData();
        }
    }

    function Program(date) {
        this.listOfMovies = [];
        this.date = new Date(date);
        this.movieCounter = 0;

        this.addMovie = function (movie) {
            var counter = 0;
            this.listOfMovies.forEach(function (item) {
                if (item.genre == movie.genre) {
                    counter++;
                }

            });
            (movie);
            if (this.totalLength() + movie.length <= 480 && counter < 4) {
                this.listOfMovies.push(movie);
                this.movieCount++;

            } else if (this.totalLength() + movie.length > 480) {
                console.log('Too long!');
            } else {
                console.log('There are already 4 movies of this genre in this program!');
            }

            this.totalLength = function () {
                var m = 0;
                this.list.forEach(function (movie, i) {
                    m += movie.length;
                });
                return m;
            }

            this.getData = function () {
                var s = '\t' + this.date.getDate() + ' ' + (this.date.getMonth() + 1) + ' ' + this.date.getFullYear() + ', program duration ' + this.totalLength() + 'min';
                this.list.forEach(function (movie, i) {
                    s += '\n\t\t' + movie.getData();
                });
                return s;
            }
        }

    }

    function Festival(nameFest, numOfMovies) {
        this.listOfPrograms = [];
        this.nameFest = nameFest;
        this.numOfMovies = parseInt(numOfMovies);
        this.totalMovieCount = function () {
            var n = 0;
            this.listOfPrograms.forEach(function (program, i) {
                n += program.movieCount;
            });
            return n;
        }
        this.addProgram = function (program) {
            if ((this.totalMovieCount() + program.movieCount) <= this.numOfMovies) {
                this.listOfPrograms.push(program);
            } else {
                console.log('Maximum number of allowed movies exceeded!');
            }

        }
        this.getData = function () {

        }
        if (this.listOfPrograms.length != 0) {
            var s = this.nameFest + ' has ' + this.totalMovieCount() + ' movie titles';
            this.listOfPrograms.forEach(function (program, i) {
                s += '\n' + program.getData();
            });
        } else {
            var s = this.nameFest + '\n\t Program to be announced';
        }
        return s;
    }

    var action = new Genre("Action");
    var drama = new Genre("Drama");
    var comedy = new Genre("Comedy");
    var scifi = new Genre("Science fiction");

    function createMovie(title, length, genre) {
        return new Movie(title, length, genre);
    }
var movie1 = new Movie('The Shawshank Redemption',130, action);
var movie2 = new Movie('Spider-Man',133, action);
var movie3 = new Movie('War for the Planet of the Apes',140, drama);
var movie4 = new Movie('The Dark Tower', 95, scifi);
var movie5 = new Movie('Deadpool',108, comedy);

    function createProgram(date) {
        return new Program(date);
    }
    var program1 = new Program('28.10.2017');
    var program2 = createProgram('28.10.2017');

    var fest1 = new Festival('Weekend festival');

    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program2.addMovie(movie3);
    program2.addMovie(movie4);
    program2.addMovie(movie5);

    fest1.addProgram(program1);
    fest1.addProgram(program2);

    console.log(fest1.getData());


})();