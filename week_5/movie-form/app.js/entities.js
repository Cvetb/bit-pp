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
    var totalLengthMovies = 0;
    var numOfMovies = allMovies.length;

    for (var i = 0; i < allMovies.length; i++) {

        totalLengthMovies +=  allMovies[i].length;
        var totaLL = document.querySelector('#allmoviel');
        totaLL.textContent =  totalLengthMovies;
    }

    return this.date + " , " + numOfMovies + " movies, " + " duration: " + totalLengthMovies + " min";
}