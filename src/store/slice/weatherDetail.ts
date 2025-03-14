import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { weatherDataFormat } from "../../formating/weatherformating";
import { WeatherDataDetailsWise, weatherDetails } from "../../type/type";
import getCityDetail from "../../api/cityDetail";
export const fetchWeatherDetail = createAsyncThunk(
  "weather/fetchWeatherDetail",
  async ({ lat, long }: { lat: number; long: number }) => {
    try {
      const weatherData: WeatherDataDetailsWise = await getCityDetail(
        lat,
        long
      );
      return weatherData;
    } catch (error) {
      throw new Error(`Api Faile to Fetch, ${error}`);
    }
  }
);
const weatherDetailSlice = createSlice({
  name: "weatherDetail",
  initialState: {
    weatherDetail: null as null | weatherDetails,
    unit: "C",
  } as { weatherDetail: null | weatherDetails; unit: string },
  reducers: {
    unitConvert: (state) => {
      state.unit = state.unit === "C" ? "F" : "C";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherDetail.pending, (state) => {
        state.weatherDetail = null;
      })
      .addCase(fetchWeatherDetail.fulfilled, (state, action) => {
        state.weatherDetail = weatherDataFormat(action.payload);
      })
      .addCase(fetchWeatherDetail.rejected, (state) => {
        state.weatherDetail = null;
      });
  },
});

export default weatherDetailSlice.reducer;
export const { unitConvert } = weatherDetailSlice.actions;
