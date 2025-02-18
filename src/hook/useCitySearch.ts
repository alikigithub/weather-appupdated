import { useAppSelector } from "../redux/store/store";
import { CityList } from "../type/type";

export const useCitySearch = () => {
  const cityList: CityList = useAppSelector(
    (state) => state.citySearchData.citylist
  );
  const isApiAvaiable: string = useAppSelector(
    (state) => state.citySearchData.status
  );
  const cityName: string | null = useAppSelector(
    (state) => state.citySearchData.city
  );
  const loading: boolean = useAppSelector(
    (state) => state.citySearchData.loading
  );
  const dropDown: boolean = useAppSelector(
    (state) => state.citySearchData.dropdown
  );
  return { cityList, isApiAvaiable, cityName, loading, dropDown };
};
