import axios from "axios";
const API_KEY="089e12fcecc4d522e0e5304e5a8bdebb"
const URL="https://api.openweathermap.org/data/2.5/weather"
const fetchWeather= async (query)=>{
    const {data}=await axios.get(URL,{
        params:{
            q:query,
            units:"metric",
            APPID:API_KEY 
        }
    })
    return data 
}
export default fetchWeather;