var breakfast = {
    name: "Sendvic",
    ingredients: ["bread", "Butter", "Ham", "Eggs", "Ketchup", "Cheese"],
    energy: 446,
    print: function () {
        return "This is not good sandwich!!!";
    },
    jscompilant: function (){
        if(breakfast.energy > 500 ){
        return true;
    } else return false;
    
} 
};
console.log(breakfast.print()) ;
console.log(breakfast.jscompilant());