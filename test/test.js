var taco1 = {
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}
var taco2 = {
    "tortilla": "hard shell",
    "protein":  "tofu",
    "cheese":   "cheddar cheese",
    "toppings": ["lettuce", "salsa", "guacamole"],
    "tacoInfo": function() {
        console.log("Tortilla: " + this.tortilla);
        console.log("Protein:  " + this.protein);
        console.log("Cheese:   " + this.cheese);
        console.log("Toppings: " + this.toppings);
    }
}
    
// we can now still get all the delicious taco facts by
taco1.tacoInfo(); 
taco2.tacoInfo(); 