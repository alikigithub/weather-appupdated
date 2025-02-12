// export type citylist = {
//   name: string;
//   lat: number;
//   lon: number;
//   country: string;
//   state: string;
//   length: number;
//   // map: (callback: (cities: string, index: number) => Component) => Component[];
// };
export type City = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
};

export type CityList = City[];
export type sliceState = {
  value: number;
};
export type weather = {
  main: string;
  description: string;
  icon: string;
};
export type weatherEntry = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: weather[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
  };
  pop: number;
};
export type weatherDetails = {
  cityname: string;
  curretnTime: string; // Typo: Should be `currentTime`
  country: string;
  fulldate: string;
  temprature: string; // Typo: Should be `temperature`
  maxTem: string;
  minTem: string;
  description: string;
  icon: string;
  bgImg: string;
  todayWeather: todayForcast;
  nextDays: Forcastdays;
  daysOfWeek: string[];
};

export type todayForcast = {
  feelslike: number;
  rain: number;
  wind: number;
  air: number;
};
export type forcast = {
  date: string;
  icon: string;
  description: string;
  max_tem: number;
  min_tem: number;
};
export type Forcastdays = { [key: string]: forcast };

export type dropDownType = {
  cities: City;
  index: number;
  isSelected: boolean;
  handleIndex: number;
  sethandleIndex: (index: number) => void;
};
export type nextDay = {
  icon: string;
  description: string;
  max_tem: number;
  min_tem: number;
};
export type formatData = {
  curretnTime: string;
  country: string;
  fulldate: string;
  temprature: number;
  maxTem: number;
  minTem: number;
  description: string;
  icon: string;
  bgImg: number;
  todayWeather: todayForcast;
  nextDays: nextDay;
  daysOfWeek: string[];
  city: { name: string };
  list: weatherEntry[];
};
export type CityDropDownProps = {
  handleIndex: number;
  sethandleIndex: React.Dispatch<React.SetStateAction<number>>;
};
export type useweather = {
  bgImg: string;
  cityname?: string;
  country?: string;
  fulldate?: string;
  curretnTime?: string;
  temprature: number;
  maxTem: number;
  minTem: number;
  description?: string;
  icon?: string;
};

export type todayweather = {
  feelslike: number;
  rain: number;
  wind: number;
  air: number;
};
export type cityDataSearch = {
  citylist: CityList | [];
  status: string;
  city: string | null;
  dropdown: boolean;
  loading: boolean;
};

///////////////////

export type WeatherDataDetailsWise = {
  cod: string;
  message: number;
  cnt: number;
  list: Forecasting[];
  city: City;
};


export type Forecasting = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: Weathering[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  snow?: {
    "3h": number;
  };
  rain?: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};

export type Weathering = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Cityies = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};
export type Location = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
  local_names?: {
    [key: string]: string;
  };
};

export type Locations = Location[];
export type CityListState = {
  citylist: City[]; // An array of City objects (empty in this case)
  isApiAvaiable: string; // A string representing API status ("pending")
  cityName: string | null; // Can be a string or null
  loading: boolean; // A boolean indicating if data is loading
  dropDown: boolean; // A boolean for dropdown state
};
