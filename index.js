/* fake product data object

schema of a product
price
sku
name
quantity
description
id

*/

// user defined datatype

var product = {
  price: 10,
  sku: 123456,
  name: "toaster",
  quantity: 25,
  description: "stainless steel toaster, 4 slices",
  id: 1
}

var collection = [
{
  price: 10,
  sku: 123456,
  name: "toaster",
  quantity: 25,
  description: "stainless steel toaster, 4 slices",
  id: 1
},
{
  price: 100,
  sku: 123454,
  name: "sofa",
  quantity: 5,
  description: "velvet sofa, 8 feet",
  id: 2
},
{
  price: 250,
  sku: 123444,
  name: "desk",
  quantity: 80,
  description: "30 inch height office desk, black",
  id: 3
},
{
  price: 1,
  sku: 123123,
  name: "pen",
  quantity: 2500,
  description: "roller ball pen, blue ink",
  id: 4
},
{
  price: 3500,
  sku: 123116,
  name: "sculpture",
  quantity: 2,
  description: "sculpture of atlas",
  id: 5
}
]



function firstLetterCap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
  
}

// go through collection one at a time, printing the name of the product to the console
// make a loop, log name on each item in the collection


// make loop capitalize the name on one line without using a new variable
for(var i = 0; i < collection.length; i++) {
   // log name on each item in collection
  // var name_lower = collection[i].name;
  // var name_capital = name_lower.charAt(0).toUpperCase() + name_lower.slice(1);
  // collection[i].name = name_capital;

  console.log(collection[i].name.charAt(0).toUpperCase() + collection[i].name.slice(1));
  // console.log(firstLetterCap(collection[i].name));
  // console.log(firstLetterCap('string'))

}

// write a loop that will make the description all uppercase for all products

for(var i = 0; i < collection.length; i++) {

  console.log(collection[i].description.toUpperCase());
}

//make a loop to add 10% to all product prices

for (var i = 0; i < collection.length; i++) {

  let priceHike = collection[i].price * .10;
  console.log(collection[i].price + priceHike);
}

//make a loop to reduce quantity of all products by 1 unless it results in negative number

for(var i=0; i < collection.length; i++) {
  collection[i].quantity - collection[i].quantity >= 1 ? collection[i].quantity - 1 : collection[i].quantity
}

console.log(collection[4].quantity);