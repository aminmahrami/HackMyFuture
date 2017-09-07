/* 10 . Use the list of vehicles to write an advertisement. So that it prints something like:
"Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)*/
let vehicles = ["motorbike", "caravan", "bike"];


function joesAdv(){
	let adv = "Amazing Joe's Garage, we service ";
	for(let i=0;i< vehicles.length;i++){
		if(i > 0 && i < vehicles.length -1)
			adv += " ," ;
		else if(i == vehicles.length -1)
			adv += " and " ;
		adv += vehicles[i];	
	}
	advertisement_str += ".";
	console.log(advertisement_str);
}
joesAdv();
