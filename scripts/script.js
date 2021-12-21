//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let header = document.getElementById("header");
let datasetLength = document.getElementById("dataset-length");
let fact1 = document.getElementById("fact-1");
let fact2 = document.getElementById("fact-2");
let fact3 = document.getElementById("fact-3");
let fact4 = document.getElementById("fact-4");
let fact5 = document.getElementById("fact-5");
let itemBody = document.getElementById("item-body");
let title = document.getElementById("description");
let category = document.getElementById("category");
let protein = document.getElementById("protein");
let fiber = document.getElementById("fiber");
let carbohydrate = document.getElementById("carbohydrate");
let fat = document.getElementById("fat");
let kiloCalories = document.getElementById("kiloCalories");
let cholesterol = document.getElementById("cholesterol");
let water = document.getElementById("water");

let length = data.length;
datasetLength.innerHTML = length;

let butters = 0;
let mostB12 = "";
let b12Content = 0;
let avgProtein = 0;
let avgAsh = 0;

for (let i = 0; i < data.length; i++) {
  const item = data[i];
  if (item.Category === "CHEESE") {
    butters++;
  }
  if (b12Content < item.Data.Vitamins["Vitamin B12"]) {
    b12Content = item.Data.Vitamins["Vitamin B12"];
    mostB12 = item.Description;
  }
  avgProtein = (i * avgProtein + item.Data.Protein) / (i + 1);
  avgAsh = (i * avgAsh + item.Data.Ash) / (i + 1);
}
console.log({
  butters,
  mostFat: mostB12,
  fatContent: b12Content,
  avgProtein,
  avgAsh,
});
fact1.innerHTML = butters;
fact2.innerHTML = mostB12;
fact3.innerHTML = b12Content;
fact4.innerHTML = avgProtein;
fact5.innerHTML = avgAsh;

//the index of the current object shown
//on the web page
let index = 0;
display();

//responds to clicks of the "previous" button
previous.onclick = function (event) {
  index--;

  //make sure that index is never less than zero...
  if (index < 0) {
    index = 0;
  }
  display();
};

//responds to clicks of the "next" button
next.onclick = function (event) {
  index++;

  //make sure that index is never greater than
  //array.length - 1

  if (index > datasetLength - 1) {
    index = datasetLength - 1;
  }
  display();
};

//shows the current record in the array of records
//at the position within the index variable
function display() {
  let selectedItem = data[index];
  title.innerHTML = selectedItem.Description;
  category.innerHTML = selectedItem.Category;
  protein.innerHTML = selectedItem.Data.Protein;
  fiber.innerHTML = selectedItem.Data.Fiber;
  carbohydrate.innerHTML = selectedItem.Data.Carbohydrate;
  fat.innerHTML = selectedItem.Data.Fat["Saturated Fat"];
  kiloCalories.innerHTML = selectedItem.Data.Kilocalories;
  cholesterol.innerHTML = selectedItem.Data.Cholesterol;
  water.innerHTML = selectedItem.Data.Water;
}
