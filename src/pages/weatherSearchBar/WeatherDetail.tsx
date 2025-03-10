import CityCard from "../../components/CityCard";
import TodayWeather from "../../components/TodayWeather";

const WeatherDetail = () => {
  return (
    <div className="w-full md:min-h-screen bg-bground p-3 flex justify-center items-center md:px-5 lg:flex-row flex-col lg:gap-3">
      <div className="w-full">
        <CityCard />
      </div>
      <div className="w-full">
        <TodayWeather />
      </div>
    </div>
  );
};

export default WeatherDetail;
