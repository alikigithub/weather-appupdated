import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getcity } from "../../../aPI/citySearch";
import { cityDataSearch, CityList } from "../../../type/type";

export const fetchCityData = createAsyncThunk(
  "city/detail",
  async (city: string) => {
    try {
      const cityData = await getcity(city);

      const cityDetails: CityList = cityData;
      return cityDetails;
    } catch (error) {
      throw new Error(`City Data is not hapening ${error}`);
    }
  }
);
const initialState: cityDataSearch = {
  citylist: [] as CityList,
  status: "pending",
  city: null,
  dropdown: false,
  loading: false,
};
const citySearch = createSlice({
  name: "CitySearch",
  initialState,
  reducers: {
    inputData: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    citisList: (state, action) => {
      state.citylist = action.payload;
    },
    dropDownShow: (state, action) => {
      state.dropdown = action.payload;
    },
    loadingShow: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchCityData.fulfilled, (state, action) => {
        console.log(action);
        state.citylist = action.payload;
        state.status = "fullfilled";
      })
      .addCase(fetchCityData.rejected, (state) => {
        state.status = "rejected";
      });
  },
});
export default citySearch.reducer;
export const { inputData, citisList, dropDownShow, loadingShow } =
  citySearch.actions;
