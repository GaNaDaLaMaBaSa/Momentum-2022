const API_KEY = "0165f71b2f691014ea22b835a1567a42"


function getLocationSuccess(GeoLocationPosition){
    const lat = GeoLocationPosition.coords.latitude;
    const lon = GeoLocationPosition.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then((response) => response.json()).then((data) => {
       const weather = document.querySelector(".weather span:nth-child(1)");
       const city = document.querySelector(".weather span:nth-child(2)");
       weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
       city.innerText = `/ ${data.name}`;
    })
};

function getLocationFail(){
    alert(`위치를 찾지 못했습니다. 날씨를 알수가 없네요.`);
};

navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationFail);