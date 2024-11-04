/*
    Create an array “Cars”
    Push different Objects - each representing one car - into the Array
    Now filter the array to only print objects/cars that have the color ‘black’
*/

let cars = []

let car1 = {
    make: "Toyota",
    model: "Corolla",
    year: 2010,
    color: "black"
}

let car2 = {
    make: "Toyota",
    model: "Camry",
    year: 2015,
    color: "white"
}

let car3 = {
    make: "Toyota",
    model: "Prius",
    year: 2018,
    color: "black"
}

// Push different Objects - each representing one car - into the Array
cars.push(car1)
cars.push(car2)
cars.push(car3)

console.log("cars", cars);

// Now filter the array to only print objects/cars that have the color ‘black’
let blackCars = cars.filter(function(car) {
    if(car.color == 'black') {
        return true
    }
    else {
        return false
    }
})

console.log("blackCars", blackCars);


// string concatenation + string literals

console.log("Hello " + "World");

let place = "FH";
console.log(`Hello ${place}`);