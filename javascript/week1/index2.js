//3.Create an object and a function that takes the object as a parameter and prints out all of its names and values.
let bmw3series = {
  year: '1990-1999',
  Power: '115hp',
  torque: '150n/m',
  engineSize:'3300cc',
};
function autoSpecification(car){
  for(let c in car){
    console.log(c+' : '+car[c]);
  }
};

autoSpecification(bmw3series);
