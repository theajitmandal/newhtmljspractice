// function myDisplayer(sum){
//     document.getElementById("demo").innerHTML = sum;
// }

// function myCalculator(a, b){
//     let c = a + b;
//     return c;
// }
// let result = myCalculator(2, 4);
// myDisplayer(result);


setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

let a = 5;
console.log("This is my new tutorial");
console.log(`The value of a is ${a}`);

console.log("Hello Javascript");


