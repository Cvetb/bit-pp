var allMovies = [];
document.querySelector('#create-movie').addEventListener('click', createMovie);

function createMovie() {
    var movieTitleInput = document.querySelector('#title').value;
    var movieTitle = movieTitleInput.value;

    var movieLengthInput = document.querySelector('#length').value;
    var movieLength = movieLengthInput.value;

    var movieGenreSelect = document.querySelector('#genre-select');
    var movieGenreIndex = movieGenreSelect.selectedIndex;
    var movieGenre = movieGenreSelect.options[movieGenreIndex].value;

    var error = {
        OK: 'OK',
        INSERT_TITLE: 'Please insert the title!',
        INSERT_LENGTH: 'Please check the movie length',
        SELECT_GENRE: 'Please select the movie genre',
    }


    function validation(movieTitleInput, movieLengthInput, movieGenre) {
        var mLength = parseInt(movieLengthInput);

        if (movieTitleInput == '') {
            return error.INSERT_TITLE;
        } else {
            if (isNaN(mLength) || mLength <= 0) {
                return error.INSERT_LENGTH;
            } else {
                if (movieGenre == '-') {
                    return error.SELECT_GENRE;
                }
            }
        }
        return error.OK;
    }


    var errorStatus = validation(movieTitleInput, movieLengthInput, movieGenre);
    if (errorStatus !== error.OK) {
        document.querySelector('#error').innerHTML = "<p>" + errorStatus + "</p>";
    }


    var movie = new Movie(movieTitleInput, movieLengthInput, movieGenre);
    allMovies.push(movie);
    movieTitleInput = document.querySelector("#title").value = "";
    movieLengthInput = document.querySelector("#length").value = null;
    movieGenre = document.querySelector("#genre-select").value = "-";


    var listItem = document.createElement('li');
    var liText = document.createTextNode(movie.getInfo());
    listItem.appendChild(liText);
    var listOfM = document.querySelector("#movie-list");
    listOfM.appendChild(listItem);
    var movieOption = document.createElement('option');
    var movieOptionContent = document.createTextNode(movie.getInfo());
    movieOption.appendChild(movieOptionContent);
    var optOfMovies = document.querySelector("#movie-select");
    optOfMovies.appendChild(movieOption);

    var allMoviesLength = 0;
    for (var i = 0; i < allMovies.length; i++) {
        allMoviesLength += parseInt(allMovies[i].movieLength);
        var totaLL = document.querySelector('#all-movie-length');
        totaLL.textContent = allMoviesLength;
        document.querySelector('#all-movie-length').innerHTML = allMoviesLength + " min";


    }
}
var allPrograms = [];

document.querySelector("#create-program").addEventListener('click', createProgram);

function createProgram() {
    var dateProgram = document.querySelector("#date");
    var date = dateProgram.value;

    var program1 = new Program(date);
    allPrograms.push(program1);
    var dateProgram = document.querySelector("#date").value = "";
    var liItem1 = document.createElement('li');
    var liTxt1 = document.createTextNode(program1.getData());
    liItem1.appendChild(liTxt1);
    var listOfP = document.querySelector("#program-list");
    listOfP.appendChild(liItem1);


    var optItem1 = document.createElement('option');
    var optTxt1 = document.createTextNode(program1.getData());
    optItem1.appendChild(optTxt1);
    var listOfP1 = document.querySelector("#fin-program");
    listOfP1.appendChild(optItem1);

}
document.querySelector("#addmovietop").addEventListener('click', addMovie);


function addMovie() {

    var sm = document.querySelector('#movie-select');
    var om = sm.selectedIndex;

    var sp = document.querySelector('#fin-program');
    var op = sp.selectedIndex;

    var dateOfProgram = allPrograms[op - 1].date;

    allPrograms[op - 1].movies.push(allMovies[om - 1]);

    var nOfMovies = allPrograms[op - 1].movies.length;

    var totalLP = 0;
    for (var i = 0; i < nOfMovies; i++) {
        var n = parseInt(allPrograms[op - 1].movies[i].movieLength);
        totalLP += n;
    }


    var fin = '#program-list li:nth-child(' + op + ')';
    var final = document.querySelector(fin);
    final.innerHTML = dateOfProgram + ', ' + nOfMovies + ' movies, duration: ' + totalLP + 'min';

}