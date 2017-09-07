/* 4 . Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike.
And prints "a blue motorbike" for example when called as vehicleType("blue", 2)*/
function vehicleType(x,y){
  if (y == 1){
    console.log('a '+x+' car');
  }
  else if (y == 2){
    console.log('a '+x+' motorbike');
  }
  else console.log('unknown');
}

vehicleType("blue", 1);
