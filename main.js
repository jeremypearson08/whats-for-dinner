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
var randomDessertButton = document.querySelector('#mainDish');
var randomMainsButton = document.querySelector('#dessert');

//Event listeners
letsCookButton.addEventListener("click",randomDish);
randomSides.addEventListener("click",randomSideFun);
randomDessert.addEventListener("click",randomDessertFun);
randomMains.addEventListener("click",randomMainFun);

//Functions

function randomSideFun() {
    var randomSide = sides[Math.floor(Math.random() * sides.length)];
    sideElement.innerHTML = randomSide;
  }

  function randomDessertFun() {
    var randomDessert = dessert[Math.floor(Math.random() * dessert.length)];
    sideElement.innerHTML = randomDessert;
}
  function randomMainFun() {
    var randomMains = mains[Math.floor(Math.random() * mains.length)];
    sideElement.innerHTML = randomMains;
}

  
  
