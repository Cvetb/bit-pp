'use strict';
(function () {

    console.log('Hi!');


    function Genre(name) {
        this.name = name;

        this.getData = function () {
           return (this.name.charAt(0).toUpperCase() + this.name.charAt(this.name.length - 1).toUpperCase());
         
        }

    }
    var action = new Genre("Action");
    var drama = new Genre("Drama");
    var comedy = new Genre("Comedy");

    console.log(action.getData());


    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
        this.getData = function () {
            return (this.title + ' , ' + this.length + ' , ' + this.genre);
        }
    }
    var fullNameMovie = new Movie("The Shawshank Redemption", 130, drama);
   


    function Program() {
        this.listOfMovies = [];

        this.addMovie = function (movie) {
            return this.listOfMovies.push(movie);
        }
      /* this.getData = function () {

        }*/
    }
    var movieProgram = new Program ();
    movieProgram .addMovie("The Shawshank Redemption", 130, drama);
   /* movieProgram .addMovie("Spider-Man", 133, action);
    movieProgram.addMovie("War for the Planet of the Apes", 140, comedy);
    movieProgram.addMovie("The Dark Tower", 95,  drama);*/


    console.log(movieProgram.addMovie(fullNameMovie));
    console.log(movieProgram.listOfMovies);



    function Festival(nameFest, listOfPrograms, numOfMovies) {
        this.listOfPrograms = [];
       /* this.nameFest = nameFest;
        this.numOfMovies = numOfMovies;*/
        this.addProgram = function (program) {
            return this.listOfPrograms.push(program);

        }
        /*this.getData = function () {

    }*/
    }
    var festProgram = new Festival ( );
    festProgram.addProgram ();


    
    console.log(festProgram.addProgram(movieProgram));
    console.log(festProgram.listOfPrograms);


   /* function createMovie(title, length, genre) {

    }

    function createProgram(date) {

    }
*/




})();