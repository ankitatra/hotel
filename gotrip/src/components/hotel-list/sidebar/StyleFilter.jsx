// PopularFilters component
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { gethotel } from "../../../store/hotel/action";
import { useSearchParams } from "react-router-dom";

const StyleFilter = () => {
  const checkboxes = [
    { label: "Budget", count: 92 },
    { label: "Mid-range", count: 45 },
    { label: "Luxury", count: 21 },
    { label: "Family-friendly", count: 78 },
    { label: "Business", count: 679 },
  ];


  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialStyle = searchParams.getAll("style");
  const [hotelStyle, sethotelStyle] = useState(initialStyle || []);

  const handleFilterCheckbox = (e) => {
    const label = e.target.value;
    const updatedStyle = hotelStyle.includes(label)
      ? hotelStyle.filter((facility) => facility !== label)
      : [...hotelStyle, label];
    sethotelStyle(updatedStyle);
    updateQueryParams(updatedStyle);
  };

  const updateQueryParams = (updatedStyle) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("style");
    updatedStyle.forEach((facility) => {
      params.append("style", facility);
    });
    setSearchParams(params);
  };

  useEffect(() => {
    dispatch(gethotel(searchParams.toString()));
  }, [searchParams, dispatch]);

  useEffect(() => {
    const  updatedStyle= searchParams.getAll("style");
    sethotelStyle( updatedStyle || []);
  }, [searchParams]);

  return (
    <>
      {checkboxes.map((checkbox, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              {/* <input type="checkbox" name="name" /> */}

              <input 
                type="checkbox"
                value={checkbox.label}
                checked={hotelStyle.includes(checkbox.label)}
                onChange={handleFilterCheckbox}
              />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{checkbox.label}</div>
            </div>
          </div>
          {/* End col-auto */}
          <div className="col-auto">
            <div className="text-15 text-light-1">{checkbox.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StyleFilter;
