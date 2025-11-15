let weather={
    "apiKey":"681425b51b6fe7d5c570df8ed3566d17",
    fetchWeather:function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            +city
            +"&units=metric&appid="
            +this.apiKey
        )
        .then((response)  => response.json())
        .then((data) => this.displayWeather(data))
        .catch(()=>{
            alert("Invalid Input");
        });
    },
    displayWeather:function(data){
        const { name } = data;
        const { icon,description } =data.weather[0];
        const { temp,humidity}=data.main;
        const {speed}=data.wind;
      /*  console.log(name,icon,description,temp,humidity,speed);*/
        document.querySelector(".city").innerText="Weather in " + name;
        document.querySelector(".icon").src=
        "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText=description ;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity:"+ humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed:"+ speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')"
    },
    search:function(){
       this.fetchWeather(document.querySelector(".search-bar").value);
    }

};

document.querySelector(".search button")
.addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if (event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("udupi");
