function Movie(movieTitle, movieLength, movieGenre) {
    this.movieTitle = movieTitle;
    this.movieLength = movieLength;
    this.movieGenre = movieGenre;

    this.genreAbb = function () {
         var firstIndex = 0;
         var lastIndex = this.movieGenre.length - 1;
         var abb = this.movieGenre.charAt(firstIndex) + this.movieGenre.charAt(lastIndex);
         return abb.toUpperCase();
     }

     this.getInfo = function () {
         return this.movieTitle + ', ' + this.movieLength + 'min, ' + this.genreAbb();
     };

     
}

function Program(date) {
    this.date = date;
    this.movies = [];

}

Program.prototype.getData = function () {
    //var numOfMovies = allPrograms.length;
    return this.date + ', TBA';
       
}
/*var numOfMovies = allMovies.length;

    var allMoviesLength = 0;
    for (var i = 0; i < allMovies.length; i++) {
        allMoviesLength += parseInt(allMovies[i].movieLength);
        var totaLL = document.querySelector('#all-movie-length');
        totaLL.textContent = allMoviesLength;
         return this.date + " , " + numOfMovies + " movies, " + " duration: " +  allMoviesLength + " min";
    }*/