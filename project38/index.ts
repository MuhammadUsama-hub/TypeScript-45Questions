let pakistanCities :string[]= ['karachi','peshawer','lahore'] ;
let describe_city = function (city:string = 'Lahore',country:string = 'Pakistan'){
    if(pakistanCities.includes(city.toLowerCase()) && country.toLowerCase() === 'pakistan'){
        console.log(`${city} is in ${country}`)
    }
    else {
        console.log(`${city} not in ${country}`)
    }
}
describe_city('karachi','pakistan') ;
describe_city('sedney','pakistan')
describe_city('karachi','australia')