teaFlavors = ["green tea", "black tea", "oolong tea", "white tea"];
fristTea = teaFlavors[0];
// console.log(fristTea); // Output: green tea

let citiesVisited = ["Mumbai","Sydney"];
citiesVisited.push("Berlin");
// console.log(citiesVisited); // Output: ["Mumbai","Sydney","Berlin"]

citiesVisited.pop();
// console.log(citiesVisited); // Output: ["Mumbai","Sydney"]

let popularTea = ["green tea","black tea","oolong tea","white tea"];
let softCopy = popularTea;
softCopy.push("herbal tea");
// console.log(popularTea); 
// console.log(softCopy);
popularTea.pop();
// console.log(softCopy);
// Output: ["green tea","black tea","oolong tea","white tea","herbal tea"]

let topCities = ["Berlin","Singapore","New York"];
let hardcopies = [...topCities];
console.log(topCities);
hardcopies.pop();
// console.log(hardcopies);
// console.log(topCities);

europeanCities = ["Paris","Rome"];
asianCities = ["Tokyo","Beijing"];

meregeCities = [...europeanCities,...asianCities];
console.log( meregeCities); // Output: "Paris,Rome,Tokyo,Beijing"

worldCities = europeanCities.concat(asianCities);
console.log(worldCities); // Output: "Paris,Rome,Tokyo,Beijing"