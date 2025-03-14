import { forcast, todayForcast, WeatherDataDetailsWise } from "../type/type";
import { weatherEntry } from "../type/type";
import { currentTime } from "./currentTime";
import { fulldate } from "./fulldate";
import { getIcons } from "./weatherIcons";

export const weatherDataFormat = (weatherData: WeatherDataDetailsWise) => {
  const daysOfWeek: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const nextDays: { [key: string]: forcast } = {};
  weatherData.list.forEach((data) => {
    const date = new Date(data.dt * 1000);
    const day = daysOfWeek[date.getDay()];

    const timespam = date.getUTCHours();
    if (!nextDays[day] && timespam == 12) {
      nextDays[day] = {
        date: date.toISOString(),
        icon: getIcons(data?.weather[0].icon),
        description: data?.weather[0].description,
        max_tem: Number(data?.main.temp_max.toFixed(0)),
        min_tem: Number(data?.main.temp_min.toFixed(0)),
      };
    }
  });
  const weather: weatherEntry = weatherData.list[0];
  const todayWeather: todayForcast = {
    feelslike: weather?.main.feels_like,
    rain: weather?.clouds.all,
    wind: weather?.wind.speed,
    air: weather?.main.humidity,
  };
  return {
    cityname: weatherData?.city.name,
    curretnTime: currentTime(),
    country: weatherData?.city.country,
    fulldate: fulldate(weather.dt),
    temprature: weather?.main.temp.toFixed(0),
    maxTem: weather?.main.temp_max.toFixed(0),
    minTem: weather?.main.temp_min.toFixed(0),
    description: weather?.weather[0].description,
    icon: getIcons(weather?.weather[0].icon),
    bgImg: weather?.weather[0].icon,
    todayWeather,
    nextDays,
    daysOfWeek,
  };
};
