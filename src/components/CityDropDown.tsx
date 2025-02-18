import DropDownData from "./DropDownData";
import { useCitySearch } from "../hook/useCitySearch";
import { City, CityList } from "../type/type";

const CityDropDown = ({
  handleIndex,
  sethandleIndex,
}: {
  handleIndex: number;
  sethandleIndex: (index: number) => void;
}) => {
  const {
    dropDown,
    cityList,
    isApiAvaiable,
  }: { dropDown: boolean; cityList: CityList; isApiAvaiable: string } =
    useCitySearch();

  return (
    <div className="mt-2 ">
      {dropDown == true && cityList && cityList.length > 0 ? (
        <div className="absolute z-10">
          {cityList?.map((cities: City, index: number) => (
            <DropDownData
              cities={cities}
              index={index}
              isSelected={index === handleIndex}
              handleIndex={handleIndex}
              sethandleIndex={sethandleIndex}
            />
          ))}
        </div>
      ) : isApiAvaiable == "rejected" ? (
        <p className="text-red-500 text-center">
          Error: Unable to fetch city data. Please try again later.
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CityDropDown;
