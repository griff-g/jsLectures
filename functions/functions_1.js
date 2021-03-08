function areaCalculation(checkNum) {
  var a = 6;
  var b = 7;
  var r = 4;
  var square = a ** 2;
  var rectangle = a * b;
  var circle = 3.14 * r ** 2;

  if (square + rectangle + circle < checkNum) {
    console.log(`Sum of Areas is greater than ${checkNum}`);
  } else {
    console.log(square * rectangle * circle);
  }

}

var auto = 2
areaCalculation(auto);
