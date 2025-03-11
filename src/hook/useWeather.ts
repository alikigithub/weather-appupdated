import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { AppRootState, useAppDispatch } from "../store/store/store";
import { createSelector } from "reselect";
import { fetchWeatherDetail } from "../store/slice/weatherDetail";

const selectWeatherDetail = createSelector(
  [(state: AppRootState) => state.weatherReview.weatherDetail],
  (weatherDetail) => weatherDetail
);

const useWeather = () => {
  const latsParam = useParams().lats ?? "0,0";
  const [lat, lon] = latsParam.split(",");
  const latitude: number = parseFloat(lat);
  const longitude: number = parseFloat(lon);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isNaN(latitude) && !isNaN(longitude)) {
      dispatch(fetchWeatherDetail({ lat: latitude, long: longitude }));
    }
  }, [latitude, longitude, dispatch]);

  const detailOfWeather = useSelector(selectWeatherDetail);

  return detailOfWeather;
};

export default useWeather;
