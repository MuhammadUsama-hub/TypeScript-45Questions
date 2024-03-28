let car : {[key:string]:any} = {} ;
let carInfo = function (manufacturer:string = 'Audi' , model:number = 2024 , color:string = 'Silver' , drivingMode:string = 'Auto'):{[key:string]:any}
{
    car.manufacturer = manufacturer 
    car.model = model 
    car.color = color 
    car.drivingMode = drivingMode 
   
return car
}
console.log('Car Data ',carInfo())