'use strict';
(function () {

    console.log('Hi!');


    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {

            return this.name + " " + this.surname;
        }

    }

    function Seat(number, category) {
        this.number = number;
        this.category = category;

        number = Math.random() * (10 - 99) + 10;
        this.getData = function () {
            return this.number.toString + ", " + this.category;

        }
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {

            return this.seat + this.object;
        }

    }

    function Flight(relation, date) {

        this.list = [];
        this.date = date;
        this.relation = relation;

        this.getData = function () {
            return this.date + " " + this.relation + '\n\t\t' + ;

        }

        this.addPassenger = function (passenger) {
            this.list.push(passenger);

        }
    }

    function Airport(name) {
        this.listFlights = [];
        this.addFlight = function () {

        }

    }
function createFlight( relation, date){
    return new Flight (relation, date);
}

function createPassenger (name, surname, number, category){
return new Passenger (name, surname,number, category);
}

})();