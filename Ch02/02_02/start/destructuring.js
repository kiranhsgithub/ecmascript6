var [first, , , fourth,] = ["Spokane", "Boston", "Los Angles", "Seattle", "Portland"];

console.log("first city name  :" + first);
//console.log("second city name :" + second);
//console.log("third city name  :" + third);
console.log("fourth city name :" + fourth);

var sandwich = {
    title: "Reuben",
    price: 7,
    description: "Cleveland's favorite sandwich",
    ingredients: ['bread', 'corned beef', 'dressing', 'sauerkraut','cheese']
};
var {title, price} = sandwich;
console.log(sandwich.title);
console.log(sandwich.price);
console.log(title);
console.log(price);
console.log(sandwich.description);
console.log(sandwich.ingredients);