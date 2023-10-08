function myDisplayer(sum){
    document.getElementById("demo").innerHTML = sum;
}

function myCalculator(a, b){
    let c = a + b;
    return c;
}
let result = myCalculator(2, 4);
myDisplayer(result);

