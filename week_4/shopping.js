'use strict';
(function () {

    console.log('Hi! We can do it!');
    function Product(name, price, expirationDate) {
        this.id = (function () {
            var productId;
            productId = Math.random() * (99999 - 10000) + 100000;
            return productId;

        })();

        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;


        this.getInfo = function () {

            var b;
            b = this.name.split("");

            return (name.charAt(0).toUpperCase() + this.productId + name.charAt(name.length - 1).toUpperCase());
        }
    }

    var coffeeExpirationDate = new Date(2018, 7, 13);

    var coffee = new Product("Grand kafa", 102.45, new Date(2018, 7, 13));
    var chocolate = new Product("Najlepse zelje", 120.55, new Date(2018, 2, 5));
    console.log(coffee);

    function ShoppingBag() {

        this.list = [];

        this.addProduct = function (p) {
            var today = new Date().getTime();
            var validExpDate = this.expirationDate.getTime();

            if (validExpDate >= today) {
                this.list.push(p);
            }

        }

        this.totalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                sum += this.list[i].price;
            }
            return sum;
        }

        this.avgPrice = function () {
            var sum = totalPrice(this.list);
            return (sum / this.list.length).toFixed(3);
        }

        this.mostExpensive = function () {
            var max = this.list[0].price;

            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].price > max) {
                    max = this.list[i].price;
                    this.productId = this.list[i].this.productId.toUpperCase();
                }
            }
            return this.productId;
        }


    }
    var jsList = new ShoppingBag();
    jsList.addProduct(coffee);
    jsList.addProduct(chocolate);

    function PaymentCard() {

        this.accountBalance = accountBalance.toFixed(2);
        this.status = status;
        this.valid = valid;


    }

    var payment = new PaymentCard();


    function checkoutAndBuy() {
        if (this.accountBalance >= this.totalPrice) {
            return console.log("purchase is successful");
        } return console.log("there is not enough money");
    }

})();
