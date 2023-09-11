var sides = [
    "Miso Glazed Carrots",
    "Coleslaw",
    "Garden Salad",
    "Crispy Potatoes",
    "Sweet Potato Tots",
    "Coconut Rice",
    "Caeser Salad",
    "Shrimp Summer Rolls",
    "Garlic Butter Mushrooms",
    "Hush Puppies"
];

var mains = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"
];

var dessert = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
];

//DOM elements
var letsCookButton = document.querySelector('.lets-cook');
var randomSidesButton = document.querySelector('#side');
var randomDessertButton = document.querySelector('#dessert');
var randomMainsButton = document.querySelector('#mainDish');
var randomEntireMealButton = document.querySelector('#entireMeal');
var sideElement = document.querySelector('.dish-display');
var cookPot = document.getElementById('cookPotImage');

//Event listeners
randomSidesButton.addEventListener("click",randomSideFun);
randomDessertButton.addEventListener("click",randomDessertFun);
randomMainsButton.addEventListener("click",randomMainFun);
randomEntireMealButton.addEventListener("click",randomEntireMealFun);
letsCookButton.addEventListener("click", hideCookPot);

//Functions
function randomSideFun() {
    var randomSide = sides[Math.floor(Math.random() * sides.length)];
    sideElement.innerHTML = `<i>You should make:</i><br><br>` + randomSide + `!`;
  }

function randomDessertFun() {
    var randomDessert = dessert[Math.floor(Math.random() * dessert.length)];
    sideElement.innerHTML = `<i>You should make:</i><br><br>` + randomDessert + `!`;
}

function randomMainFun() {
    var randomMains = mains[Math.floor(Math.random() * mains.length)];
    sideElement.innerHTML = `<i>You should make:</i><br><br>` + randomMains + `!`;
}

function randomMealFun(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomEntireMealFun() {
    var randomSide = randomMealFun(sides);
    var randomMain = randomMealFun(mains);
    var randomDessert = randomMealFun(dessert);

    sideElement.innerHTML = `<i>You should make:</i><br><br>${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert.`;
}


function hideCookPot () {    
    if (sideElement.style.display === "none") {
        sideElement.style.display = "block";
        cookPot.style.display = "none";
    } else {
        sideElement.style.display = "none";
        cookPot.style.display = "block";
    }
};
  
