function Movie(movieTitle, movieLength, movieGenre) {
    this.movieTitle = movieTitle;
    this.movieLength = movieLength;
    this.movieGenre = movieGenre;

    this.genreAbb = function() {
        var firstIndex = 0;
        var lastIndex = this.movieGenre.length - 1;
        var abb = this.movieGenre.charAt(firstIndex) + this.movieGenre.charAt(lastIndex);
        return abb.toUpperCase();
    }

    this.getInfo = function () {
            return this.movieTitle + ', ' + this.movieLength + 'min, ' + this.genreAbb();
        };
}