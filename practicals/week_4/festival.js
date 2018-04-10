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
        this.getData = function () {
            return this.title + ' , ' + this.length + ' min, ' + genre.getData();
        }
    }

    function Program(date) {
        this.listOfMovies = [];
        this.date = new Date(date);
        this.totalNumOfMovies = 0;
        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
            this.totalNumOfMovies++;
        }
        this.getData = function () {
            var lengthOfAll = 0;
            var dataAboutMovies = '';
            for (var i = 0; i < this.listOfMovies.length; i++) {
                lengthOfAll += parseInt(this.listOfMovies[i].length);
                dataAboutMovies += this.listOfMovies[i].getData() + '\n';
            }


            return this.date + ', program duration ' + lengthOfAll + '\n' + dataAboutMovies;

        }

    }


    function Festival(nameFest) {
        this.listOfPrograms = [];
        this.nameFest = nameFest;
        this.numAllPr = 0;
        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
            this.numAllPr++;
        }
        this.getData = function () {
            var numOfAllMovies = 0;
            var allPrListed = '';

            for (var i = 0; i < this.listOfPrograms.length; i++) {
                numOfAllMovies += this.listOfPrograms[i].totalNumOfMovies;
                allPrListed += this.listOfPrograms[i].getData() + '\n';

            }

            return this.nameFest + ' has ' + numOfAllMovies + ' movie titles \n' + allPrListed;
        }

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
    var program1 = new Program('2017 10 25');
    var program2 = createProgram('2017 10 26');

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