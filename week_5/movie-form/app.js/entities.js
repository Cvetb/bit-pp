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

function Program() {
    this.date = new Date(date);
    this.movies = [];

}
Program.prototype.getData = function () {
    var totalNumOfMovies = 0;
    var numOfMovies = allMovies.length;
    var d = this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear();

    for (var i = 0; i < allMovies.length; i++) {

        totalNumOfMovies += parseInt(allMovies[i].length);
    }

    return d + " , " + numOfMovies + " movies, " + " duration: " + totalNumOfMovies + " min";
}
