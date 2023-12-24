function getdata(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7daec3e5a5mshc901b92b6dc860cp1f78f6jsndab0af666e34',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    let temp = document.getElementById("temp");
    let min = document.getElementById("min");
    let max = document.getElementById("max");
    let humidity = document.getElementById("humidity");
    let wind = document.getElementById("wind");
    let cloud = document.getElementById("cloud");
    let sunrise = document.getElementById("sunrise");
    let sunset = document.getElementById("sunset");
    let wind_degrees = document.getElementById("wind_degrees");


    async function fetchData() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();

            // Extract values
            cloud.innerHTML = result.cloud_pct;
            temp.innerHTML = result.temp;
            humidity.innerHTML = result.humidity;
            min.innerHTML = result.min_temp;
            max.innerHTML = result.max_temp;
            wind.innerHTML = result.wind_speed;
            wind_degrees.innerHTML =result.wind_degrees;
            // Print values
            console.log(result)
            console.log(`Cloud Percentage: ${result.cloud_pct}`);
            console.log(`Temperature: ${result.temp}`);
            console.log(`Feels Like: ${result.feels_like}`);
            console.log(`Humidity: ${result.humidity}`);
            console.log(`Min Temperature: ${result.min_temp}`);
            console.log(`Max Temperature: ${result.max_temp}`);
            console.log(`Wind Speed: ${result.wind_speed}`);
            console.log(`Wind Degrees: ${result.wind_degrees}`);
            console.log(`Sunrise: ${result.sunrise}`);
            console.log(`Sunset: ${result.sunset}`);

            const sunriseDate = new Date(result.sunrise * 1000);
            const sunsetDate = new Date(result.sunset * 1000);
            sunrise.innerHTML = sunriseDate.toLocaleString();
            sunset.innerHTML = sunsetDate.toLocaleString();
            console.log(`Sunrise: ${sunriseDate.toLocaleString()}`);
            console.log(`Sunset: ${sunsetDate.toLocaleString()}`);

        } catch (error) {
            console.error(error);
        }
    }

    fetchData();
}


let submit = document.getElementById("submit");


submit.addEventListener("click", (e) => {
    e.preventDefault();
    const cityInput = document.getElementById("cityInput");
    const cityName = cityInput.value;
    let city = document.getElementById("cityname");
    city.innerHTML = cityName;
    getdata(cityName);
});



getdata("Pune"); 

















































// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=solapur';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '7daec3e5a5mshc901b92b6dc860cp1f78f6jsndab0af666e34',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };
// let temp = document.getElementById("temp");
// let min = document.getElementById("min");
// let max = document.getElementById("max");
// let humidity = document.getElementById("humidity");
// let wind = document.getElementById("wind");
// let cloud = document.getElementById("cloud");
// let sunrise = document.getElementById("sunrise");
// let sunset = document.getElementById("sunset");


// async function fetchData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();

//         // Extract values
//         cloud.innerHTML = result.cloud_pct;
//         temp.innerHTML = result.temp;
//         humidity.innerHTML = result.humidity;
//         min.innerHTML = result.min_temp;
//         max.innerHTML = result.max_temp;
//         wind.innerHTML = result.wind_speed;

//         // Print values
//         // console.log(result)
//         // console.log(`Cloud Percentage: ${result.cloud_pct}`);
//         // console.log(`Temperature: ${result.temp}`);
//         // console.log(`Feels Like: ${result.feels_like}`);
//         // console.log(`Humidity: ${result.humidity}`);
//         // console.log(`Min Temperature: ${result.min_temp}`);
//         // console.log(`Max Temperature: ${result.max_temp}`);
//         // console.log(`Wind Speed: ${result.wind_speed}`);
//         // console.log(`Wind Degrees: ${result.wind_degrees}`);
//         // console.log(`Sunrise: ${result.sunrise}`);
//         // console.log(`Sunset: ${result.sunset}`);

//         const sunriseDate = new Date(result.sunrise * 1000);
//         const sunsetDate = new Date(result.sunset * 1000);
//         sunrise.innerHTML = sunriseDate.toLocaleString();
//         sunset.innerHTML = sunsetDate.toLocaleString();
//         console.log(`Sunrise: ${sunriseDate.toLocaleString()}`);
//         console.log(`Sunset: ${sunsetDate.toLocaleString()}`);

//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData();
