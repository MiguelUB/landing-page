console.log("hola desde JS");
console.log("Si te fijas casi al final del index.html hay 2 lineas, el primero importa la libreria underscore el segundo nuesto main js no las borres")

console.log("El siguente es un ejemplo de la libreria underscore, la cual trabaja con objetos");
let stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
];
let maxOfStooges = _.max(stooges, function(stooge){ return stooge.age; });

console.log(
  "Tenemos las personas: ",
  stooges,

);
console.log(  "La persona mas vieja es(Calculado con underscore):",
maxOfStooges)
