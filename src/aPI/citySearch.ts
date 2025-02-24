import axiosCityInstance from "../utils/axiosCityInstance";
const getcity = async (city: string) => {
  try {
    const response = await axiosCityInstance.get("/geo/1.0/direct", {
      params: {
        q: city,
        limit: 3,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch city data, ${error}`);
  }
};
export default getcity;
