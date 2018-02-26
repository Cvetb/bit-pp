'use strict';
(function () {

    console.log('Hi! We can do it!');

    function Product(name, price, expirationDate) {
        this.productId = (function () {
            return Math.round(Math.random() * (99999 - 10000) + 10000);

        })();

        this.name = name;
        this.price = price;
        this.expirationDate = new Date(expirationDate);

        Product.prototype.getInfo = function () {
            return (this.name.charAt(0).toUpperCase() + this.productId + name.charAt(name.length - 1).toUpperCase());
        }
    }

    function ShoppingBag() {
        this.list = [];

        ShoppingBag.prototype.addProduct = function (product) {
            var d = new Date();
            if (product.expirationDate.getTime() > d.getTime()) {
                this.list.push(product);
            }
        };

        ShoppingBag.prototype.totalPrice = function () {
            var sum = 0;
            for (var i = 0; i < this.list.length; i++) {
                sum += this.list[i].price;
            }
            return sum;
        }

        ShoppingBag.prototype.avgPrice = function () {
            var sum = this.totalPrice(this.list);
            return (sum / this.list.length).toFixed(3);
        }

        ShoppingBag.prototype.mostExpensive = function () {
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

    function PaymentCard(status, valid, accountBalance) {
        this.accountBalance = accountBalance.toFixed(2);
        this.status = true;
        this.valid = valid;
    }

    function checkoutAndBuy(jsList, payment) {

        if (payment.accountBalance >= jsList.totalPrice()) {
            return console.log("purchase is successful");
        }
        return console.log("there is not enough money");
    };

    var coffee = new Product("Grand kafa", 102.45, new Date(2018, 7, 13));
    var chocolate = new Product("Najlepse zelje", 120.55, new Date(2018, 2, 5));
    var juice = new Product("Nektar", 95.84, new Date(2018, 1, 15));

    var jsList = new ShoppingBag();
    jsList.addProduct(coffee);
    jsList.addProduct(chocolate);

    var payment = new PaymentCard(true, new Date(2018, 7, 13), 1100);
    console.log(checkoutAndBuy(jsList, payment));

})();