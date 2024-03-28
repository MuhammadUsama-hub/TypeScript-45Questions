let city_country = function (city:string = 'Lahore',country:string = 'Pakistan'){
    return `\"${city},${country}\"`
}
console.log(city_country('Sedney','Australia')) ;
console.log(city_country('Los-Angelos','united States') ) ;
console.log(city_country('Madinah','Saudi Aribia')) ;