import useWeather from "../hook/useWeather";
import { weatherDetails } from "../type/type";
import { useTemprature } from "../hook/useTemprature";
import { useAppSelector } from "../store/store/store";

const WeatherForcast = () => {
  const data: weatherDetails | null = useWeather();
  const data1 = data?.nextDays || {};
  const { converter } = useTemprature();
  const unit: string = useAppSelector((state) => state.weatherReview.unit);

  return (
    <div className="md:relative w-full rounded-[12px] bg-fullgray mt-2 md:p-4 md:flex md:flex-col md:items-center flex justify-center">
      <div className="w-full lg:flex items-center md:block hidden">
        <p className="text-[16px] text-headGray pt-[5px] pl-[5px]">
          5 Day Forecast
        </p>
      </div>
      {Object.keys(data1)?.length === 0 ? (
        <p>Loading....</p>
      ) : (
        <div className="flex md:justify-between justify-center w-full md:p-4 p-2 items-center">
          {Object.keys(data1)?.map((day, index) => (
            <div
              key={day}
              className="w-full h-[212px] flex flex-col items-center text-center justify-center"
            >
              <p className="w-full h-[20px] text-BaseGray text-center mt-1">
                {index === 0
                  ? window.innerWidth <= 1024
                    ? "Tommorrow".substring(0, 3)
                    : "Tommorow"
                  : window.innerWidth <= 1024
                  ? day.substring(0, 3)
                  : day}
              </p>
              <img
                className="block h-[67px] w-[67px] mt-4"
                src={data1[day]?.icon}
              />
              <p className="text-[14px] text-BaseGray mt-2 xl:block lg:block md:hidden hidden">
                {data1[day]?.description}
              </p>
              <div className="flex md:flex-row flex-col xl:gap-2 lg:gap-2 md:gap-0 justify-center w-full">
                <p className="text-[14px] text-headingGray">
                  {converter(data1[day]?.max_tem, unit)}&#176;{unit}
                </p>
                <span className="text-headingGray md:hidden inline">/</span>
                <p className="text-[14px] text-headGray md:ml-2">
                  {converter(data1[day]?.min_tem, unit)}&#176;{unit}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherForcast;
