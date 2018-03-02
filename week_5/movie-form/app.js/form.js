var allMovies = [];
document.querySelector('#create-movie').addEventListener('click', createMovie);

function createMovie() {
    var movieTitleInput = document.querySelector('#title').value;
    var movieTitle = movieTitleInput.value;
    var movieLength = document.querySelector('#length').value;
    var movieGenreSelect = document.querySelector('.genre-select');
    var movieGenreIndex = movieGenreSelect.selectedIndex;
    var movieGenre = movieGenreSelect.options[movieGenreIndex].value;

    var error = {
        OK: 'OK',
        INSERT_TITLE: 'Please insert the title!',
        INSERT_LENGTH: 'Please check the movie length',
        SELECT_GENRE: 'Please select the movie genre',
    }


    function validation(movieTitleInput, movieLength, movieGenre) {
        var mLength = parseInt(movieLength);

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


    var errorStatus = validation(movieTitleInput, movieLength, movieGenre);
    if (errorStatus !== error.OK) {
        document.querySelector('#error').innerHTML = "<p>" + errorStatus + "</p>";
    }


    var movie = new Movie(movieTitleInput, movieLength, movieGenre);
    allMovies.push(movie);


    var listItem = document.createElement('li');
    var liText = document.createTextNode(movie.getInfo());
    listItem.appendChild(liText);
    var listOfM = document.querySelector("#movie-list");
    listOfM.appendChild(listItem);



}
var allPrograms = [];

document.querySelector("#create-program").addEventListener('click', createProgram);

function createProgram() {
    var dateProgram = document.querySelector("#date");
    var date = dateProgram.value;

    var program1 = new Program(date);
    allPrograms.push(program1);

    var liItem1 = document.createElement('li');
    var liTxt1 = document.createTextNode(program1.getData());
    liItem1.appendChild(liTxt1);
    var listOfP = document.querySelector("#program-list");
    listOfP.appendChild(liItem1);


    var optItem1 = document.createElement('option');
    var optTxt1 = document.createTextNode(program1.getData());
    optItem1.appendChild(optTxt1);
    var dateProgram = document.createTextNode(optTxt1);
    var listOfP1 = document.querySelector("#fin-program");
    optItem1.value = allMovies.length - 1;
    listOfP1.appendChild(optItem1);
    
}