function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var pz1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(pz1);
var pz2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pz2);
var pz3 = pizzaOven("thin crust", "bbq sauce", "shredded provolone", ["bacon bits", "mushrooms"]);
console.log(pz3);
var pz4 = pizzaOven("hand tossed", "pesto sauce", ["vegan mozzarella"], ["mushrooms", "jalapenos", "fried tofu"]);
console.log(pz4);


function randomPizza(){
    var ranPizza = 0
    var pizza= {}
    var crust = ["deep dish", "thin crust", "hand tossed"]
    var sauce = ["marinara", "pesto sauce", "bbq sauce", "traditional"]
    var cheese = ["mozzarella", "feta", "provolone", "queso fresco"]
    var toppings = ["mushrooms", "fried tofu", "bell peppers", "jalapenos", "yellow peppers"];
    ranCrust = Math.floor(Math.random() * 3);
    ranSauce = Math.floor(Math.random() * 4);
    ranCheese = Math.floor(Math.random() * 4);
    ranTop = Math.floor(Math.random() * 5);

    pizza.crustType = crust[ranCrust];
    pizza.sauceType = sauce[ranSauce];
    pizza.cheeses = cheese[ranCheese];
    pizza.toppings = toppings[ranTop];
    return(pizza);
    var test = 1234
    


    

}

console.log(randomPizza());
