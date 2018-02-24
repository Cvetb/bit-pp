'use strict';
(function () {

    console.log('Hi!');

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return this.name + ' ' + this.surname;
        }
    }

    function Seat(category) {
        this.category = category.toLowerCase || 'e';
        this.number = (100 - 10) * Math.random() + 10;

        this.getData = function () {
            return this.number.toString + ', ' + this.category;
        }
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;

        this.getData = function () {
            return this.seat.getData() + this.person.getData();
        }
    }

    function Flight(relation, date) {
        this.list = [];
        this.date = new Date(date);
        this.relation = relation;

        this.fDate = function () {
            return this.date.getData() + '. ' + this.date.getMonth() + '. ' + this.date.getFullYear();
        }

        this.getData = function () {
            var l = ' ';
            for (var i = 0; i < this.list.length; i++)
                var m = this.list[i];
            l += '\n\t\t' + m.getData();
        }

        return this.fdate() + ' ' + this.relation + l;

        this.addPassenger = function (passenger) {
            this.list.push(passenger);

        }
    }

    function Airport() {
        this.name = 'Nikola Tesla'
        this.listFlights = [];

        this.addFlight = function (flight) {
            this.listFlights.push(flight);
        };

        this.getData = function () {
            var air = '';
            var counter = 0;
            for (var i = 0; i < this.listFlights; i++) {
                var flight = this.listFlights[i];
                counter += flight.list.lenght;
                air += '\n\t' + flight.getData();
            }
            return 'Airport: ' + this.name + ', ' + 'total passengers' + counter + ' ' + air;
        };

    }

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(name, surname, number, category) {
        return new Passenger(name, surname, number, category);
    }

})();