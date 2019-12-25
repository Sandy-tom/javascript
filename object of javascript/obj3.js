//add the property in the object 
var car = {

 name : 'bmw',
 country : 'german',
 speed_of_car: 200

}
car.salse = 800;  //add the property in the object by simply give new property name and assign value in new object property
console.log(car)
/* 
output above program
{ name: 'bmw', country: 'german', speed_of_car: 200, salse: 800 } */
// delet property in object 
var car = {

 name : 'bmw',
 country : 'german',
 speed_of_car: 200

}
car.salse = 800;
console.log(car)
delete car.salse;
console.log(car);

/* { name: 'bmw', country: 'german', speed_of_car: 200 } */
