import logo from "../assets/LogoSmall.png";
import Inputbox from "./InputBox";
import useWeather from "../hook/useWeather";
import { useTemprature } from "../hook/useTemprature";
import { AppRootState, useAppSelector } from "../store/store/store";
import { Link } from "react-router-dom";
import { weatherDetails } from "../type/type";
import { background, bgFinder, IMAGES } from "../constant/constant";

const CityCard = () => {
  const data: weatherDetails | null = useWeather();
  const unit: string = useAppSelector(
    (state: AppRootState) => state.weatherReview.unit
  );
  const { temChange, converter } = useTemprature();

  return (
    <div className="w-full md:p-4 p-4 rounded-[8px]  bg-fullgray flex flex-col items-center ">
      <div className="flex w-full md:gap-[5px] gap-[5px]">
        <Link
          className="bg-darkgray w-14 h-14 flex items-center justify-center rounded-[8px] "
          to="/"
        >
          <img className="" src={logo} />
        </Link>
        <div className="w-full">
          <Inputbox />
        </div>
      </div>
      <div
        className={`w-full h-[505px] relative  bg-cover bg-center rounded-[8px] flex justify-center pt-8 md:p-[32px] p-[22px]`}
        style={{
          backgroundImage: `url(${
            background[data?.bgImg ? bgFinder(data.bgImg) : "default"]
          })`,
        }}
      >
        <div className=" flex justify-between w-full">
          <div className=" w-3/4 ">
            <h1 className="lg:text-[20px]  md:text-[20px] text-[16px] text-headingGray">
              {data?.cityname}, {data?.country}
            </h1>
            <div>
              <h1 className="md:text-[15px] text-[12px] text-headingGray">
                {data?.fulldate}
              </h1>
            </div>
          </div>
          <div>
            <h1 className="md:text-[20px] text-[12px] w-1/4 text-headingGray">
              {data?.curretnTime}
            </h1>
          </div>
        </div>
        <div className="absolute flex justify-between items-center w-full bottom-0 left-[20px] text-center">
          <div>
            <h1 className="lg:text-[96px] text-[48px] text-white font-black">
              {converter(Number(data?.temprature) || 0, unit)}
              <span>&#176;</span>
              <span>{unit}</span>
            </h1>
            <p className="text-white md:text-[20px] text-[16px]">
              {converter(Number(data?.maxTem) || 0, unit)}
              <span>&#176;</span>
              {unit} /{converter(Number(data?.minTem) || 0, unit)}
              <span>&#176;</span>
              <span>{unit}</span>
              <button
                className="hover:cursor-pointer ml-2 mr-2"
                onClick={temChange}
              >
                <div> {<img src={IMAGES.divide} />}</div>
              </button>
              <span className="md:hidden">
                <br />
              </span>
              {data?.description}
            </p>
          </div>

          <img className="w-60" src={data?.icon} />
        </div>
      </div>
    </div>
  );
};

export default CityCard;
