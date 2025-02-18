import axiosInstance from "../utils/axiosInstance";

export const getCityDetail = async (lat: number, lon: number) => {
  try {
    const response = await axiosInstance.get("/forecast", {
      params: {
        lat,
        lon,
      },
    });
    return response.data;
  } catch {
    throw new Error("Failed to Fetch City Detail");
  }
};
