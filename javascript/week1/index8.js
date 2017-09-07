// 9 . Change the function vehicle to use the list of question 4. So that vehicle("green", 3, 1) prints "a green new caravan".

let vehicles = ["motorbike", "caravan", "bike"];


function vehicle(color,type, condition){

  vehiclesType = (vehicles[type]);
  
  let vehicleCond = '';
  
	if(condition == 0){
       vehicleCond = "New";}
  else if (condition > 0){
    vehicleCond = "Used";}

  
  console.log('a '+color+' '+vehicleCond+' '+vehiclesType);
}

vehicle("blue", 1, 0);
vehicle("blue", 2, 2);
vehicle("blue", 0, 1);
vehicle("blue", 2, 3);



