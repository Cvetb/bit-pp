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
        this.category = category || 'e';
        this.number = Math.round((100 - 10) * Math.random() + 10);

        this.getData = function () {
            return this.number + ', ' + this.category;
        }
    }

    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;

        this.getData = function () {
            return this.seat.getData() + ', ' + this.person.getData();
        }
    }

    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date);
        this.list = [];
        this.returnDate = function () {
            return this.date.getDate() + '. ' + this.date.getMonth() + '. ' + this.date.getFullYear();
        }

        this.getData = function () {
            var a = '';
            for (var i = 0; i < this.list.length; i++) {
                var m = this.list[i];
                a += '\n\t\t' + m.getData();
            }

            return this.returnDate() + ' ' + this.relation + a;
        };

        this.addPassenger = function (passenger) {
            this.list.push(passenger);

        };
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
            for (var i = 0; i < this.listFlights.length; i++) {
                var flight = this.listFlights[i];
                counter += flight.list.length;
                air += '\n\t' + flight.getData();
            }
            return 'Airport: ' + this.name + ', ' + 'total passenger: ' + counter + ' ' + air;
        };

    }

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }

    function createPassenger(name1, seat1) {
        return new Passenger(name1, seat1);
    }

    var name1 = new Person('John', 'Snow');
    var name2 = new Person('Cersei', 'Lannister');
    var name3 = new Person('Daenerys', 'Targaryen');
    var name4 = new Person('Tyrion', 'Lannister');

    var seat1 = new Seat('b');
    var seat2 = new Seat('b');
    var seat3 = new Seat();
    var seat4 = new Seat();

    var passenger1 = createPassenger(name1, seat1);
    var passenger2 = createPassenger(name2, seat2);
    var passenger3 = createPassenger(name3, seat3);
    var passenger4 = createPassenger(name4, seat4);

    var flight1 = createFlight('Belgrade - New York', '2017-11-25');
    var flight2 = createFlight('Barcelona - Belgrade', '2017-12-11');

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    var air1 = new Airport();

    air1.addFlight(flight1);
    air1.addFlight(flight2);

    console.log(air1.getData());
})();