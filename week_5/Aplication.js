function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
}
WebApp.prototype.getData = function () {
    console.log(this.name, this.url, this.technologies, this.licence, this.stars);
}
WebApp.prototype.reactBased = function () {
    if (this.technologies == "React") {
        return console.log(true);
    }
    return false;
}


function MobileApp(name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;

}
MobileApp.prototype.getData = function () {
    console.log(this.name, this.platforms, this.licence, this.stars);
}

MobileApp.prototype.forAndroid = function () {
    if (this.platforms == "Android") {
        return console.log(true);
    }
    return false;
}
var sharedMethods = {

    isCCLicence: function () {
        if (this.licence == "CC") {
            return console.log(true);
        }
        return false;

    },
    like: function () {
        this.stars++;
    },

    showStars: function () {
        console.log(this.stars);
    }
}

var w1 = new WebApp ('Facebook','link','React','CC',5);
w1.getData();
w1.reactBased();

var m1 = new MobileApp ('Whatsapp','Android','CC', 4)
m1.getData();
m1.forAndroid();

WebApp.prototype.__proto__ = sharedMethods;
MobileApp.prototype.__proto__ = sharedMethods;

w1.showStars();
m1.isCCLicence();
