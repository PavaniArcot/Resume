import { useState } from "react";
import fetchWeather from "./Fetchwheather";
import moment from "moment"
import "./weather.css"
const Weather =()=>{
    const [query,setQuery]=useState("")
    const [weather,setweather]=useState({})

    const handlechange=(e)=>{
        setQuery(e.target.value)
    }
    const search=async (e)=>{
        if(e.code==="Enter"){
            const data=await fetchWeather(query)
            setweather(data)  
            setQuery("")
        } 
    }
    return(
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h1>Weather APP</h1>
                    <input placeholder="Enter city name" type="text" value={query} onChange={handlechange} onKeyPress={search}/>

                </div>
                {weather.main &&
                <div className="card-body">
                    <section>
                        <div id="city">
                            <h2>{weather.name}
                            <span>&nbsp;{weather.sys.country}.Weather</span>
                            </h2>
                            </div>
                            <div id="time">
                                <p>As of {moment().format("LL")},&nbsp;{moment().format("dddd")}</p>
                            </div>
                            <div id="temp" style={{textAlign:"center"}}>
                              <h2>{Math.round(weather.main.temp)} <span>&deg;C</span></h2>
                              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}/>
                              <p>{weather.weather[0].description}</p>
                            </div>
                    </section>
                    <main>
                        <div id="a">
                            Humidity {Math.round(weather.main.humidity)}%
                        </div>
                        <div id="b">
                            Visibility {Math.round(weather.visibility)}mi
                        </div>
                        <div id="a">
                            with speed {Math.round(weather.wind.speed)} km/h

                        </div>
                        <div id="b">
                            Sunrise {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
                        </div>
                        <div>
                            Sunset&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{new Date(weather.sys.sunset * 1000).toLocaleTimeString("en-IN")}
                            
                        </div>
                        <div>
                        Hig/Low&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{Math.round(weather.main.temp)}/{Math.round(weather.main.temp)}
                        </div>
                    </main>
                </div>
                }

            </div>
        </div>
    )
}
export default Weather;