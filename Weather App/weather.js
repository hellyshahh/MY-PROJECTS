const apiKey = "7b0d50f99d990f8453d44f6bf464a127";

async function getWeather(){

    let city = document.getElementById("city").value;

    if(city == ""){
        alert("Please enter a city");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        let response = await fetch(url);

        console.log(response.status);
        console.log(response.statusText);

        let data = await response.json();
        console.log(data);

        if(data.cod == "404"){
            alert("City not found");
            return;
        }

        document.getElementById("cityName").innerHTML = data.name;
        document.getElementById("temperature").innerHTML = data.main.temp + " °C";
        document.getElementById("weather").innerHTML = data.weather[0].main;
        document.getElementById("humidity").innerHTML = data.main.humidity + " %";
        document.getElementById("wind").innerHTML = data.wind.speed + " m/s";

    }

    catch(error){
        alert("Something went wrong");
        console.log(error);
    }

}











// function getWeather() {

//     let city = document.getElementById("city").value.toLowerCase();

//     let data;

//     if(city == "ahmedabad"){
//         data = {
//             name: "Ahmedabad",
//             temp: 36,
//             weather: "Sunny",
//             humidity: 45,
//             wind: 10,
//         };
//     }
//     else if(city == "mumbai"){
//         data = {
//             name: "Mumbai",
//             temp: 29,
//             weather: "Rainy",
//             humidity: 85,
//             wind: 18,
//         };
//     }
//     else if(city == "delhi"){
//         data = {
//             name: "Delhi",
//             temp: 34,
//             weather: "Cloudy",
//             humidity: 55,
//             wind: 12,
//         };
//     }
//     else if(city == "vadodara"){
//         data = {
//             name: "Vadodara",
//             temp: 28,
//             weather: "Light Rain",
//             humidity: 88,
//             wind: 6,
//         };
//     }
//     else{
//         alert("City not available");
//         return;
//     }

//     document.getElementById("cityName").innerHTML = data.name;
//     document.getElementById("temperature").innerHTML = data.temp + " °C";
//     document.getElementById("weather").innerHTML = data.weather;
//     document.getElementById("humidity").innerHTML = data.humidity + "%";
//     document.getElementById("wind").innerHTML = data.wind + " km/h";
// }