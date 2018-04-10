/*Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message "Please choose a different city".
*/ 

var city = "Belgrade";
var country;

switch (city) {
    case "Belgrade":
    case "Zrenjanin":
    case "Novi Sad":
        country = "Serbia";
        break;
    case "Copenhagen":
        country = "Denmark";
        break;
    case "Rome":
    case "Milan":
    case "Venice":
    case "Florence":
        country = "Italy";
        break;
    case "Bucharest":
    case "Timisoara":
        country = "Romania";
        break;
    case "Zagreb":
    case "Rijeka":
    case "Pula":
    case "Osijek":
    case "Split":
        country = "Croatia";
        break;

    default:
        country = "Please choose a different city";
}
console.log(country);