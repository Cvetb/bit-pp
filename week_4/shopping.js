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

            return (name.charAt(0).toUpperCase() + this.productId + name.charAt(name.length - 1).toUpperCase());
        }
    }

    var coffeeExpirationDate = new Date(2018, 7, 13);
    var juiceExpirationDate = new Date(2018, 1, 15);
    var coffee = new Product("Grand kafa", 102.45, new Date(2018, 7, 13));
    var chocolate = new Product("Najlepse zelje", 120.55, new Date(2018, 2, 5));
    var juice = new Product("Nektar", 95.84, new Date(2018, 1, 15));
    console.log(juice);

    function ShoppingBag() {

        this.list = [];

        this.addProduct = function (product, expirationDate) {

            var d = expirationDate.split('-');
            expirationDate = new Date(d[2], d[1] - 1, d[0]);
            if (expirationDate - new Date() > 0) this.list.push(product);
        }

        this.totalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                sum += this.list[i].price;
            }
            return sum;
        }

        this.avgPrice = function () {
            var sum = this.totalPrice(this.list);
            return (sum / this.list.length).toFixed(3);
        }

        this.mostExpensive = function () {
            var max = this.list[0].price;
            var maxProduct = this.list[0].productId
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].price > max) {
                    max = this.list[i].price;
                    maxProduct = this.list[i].productId.toUpperCase();
                }
            }
            return maxProduct;
        }
    }
    var jsList = new ShoppingBag();
    jsList.addProduct(coffee);
    jsList.addProduct(chocolate);

    function PaymentCard(status, valid, accountBalance) {

        this.accountBalance = accountBalance.toFixed(2);
        this.status = true;
        this.valid = valid;
    }
    var payment = new PaymentCard(true, new Date(2018, 7, 13), 5000);

    function checkoutAndBuy(paymentCard, shoppingBag) {
        if (paymentCard.accountBalance >= shoppingBag.totalPrice()) {
            return console.log("purchase is successful");
        } return console.log("there is not enough money");
    }
    var missing = 
   
})();
