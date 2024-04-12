import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { gethotel } from "../../../store/hotel/action";
import { useSearchParams } from "react-router-dom";

const AmenitiesFilter = () => {
  // const amenities = [
  //   { name: "Breakfast Included", count: 92 },
  //   { name: "Romantic", count: 45 },
  //   { name: "Airport Transfer", count: 21 },
  //   { name: "WiFi Included", count: 78 },
  //   { name: "5 Star", count: 679 },
  // ];
  const amenity= [
    { name: "Home Theatre" , count: 0 },
    { name: "Spa Tub", count: 0 },
    { name: "Smoking Room", count: 0 },
    { name: "Kitchenette" , count: 0 },
    { name: "Private Pool" , count: 0 },
    { name: "Bathtub", count: 0 },
    { name: "Balcony" , count: 0 },
    { name: "Cook & Butler Service", count: 0 },
    { name: "Interconnected Room", count: 0 },
    { name: "Fireplace", count: 0 },
    { name: "Jacuzzi" , count: 0 },
    { name: "Living Area" , count: 0 },
    { name: "Heater", count: 0 }
  ];
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialAmenities = searchParams.getAll("amenities");
  const [amenities, setAmenities] = useState(initialAmenities || []);
  
  const handleFilterCheckbox = (e) => {
    const label = e.target.value;
    const updatedAmenities = amenities.includes(label)
      ? amenities.filter((amenity) => amenity !== label)
      : [...amenities, label];
    setAmenities(updatedAmenities);
    updateQueryParams(updatedAmenities);
  };

  const updateQueryParams = (updatedAmenities) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("amenities");
    updatedAmenities.forEach((amenity) => {
      params.append("amenities", amenity);
    });
    setSearchParams(params);
  };

  useEffect(() => {
    dispatch(gethotel(searchParams.toString()));
  }, [searchParams, dispatch]);

  useEffect(() => {
    const updatedAmenities = searchParams.getAll("amenities");
    setAmenities(updatedAmenities || []);
  }, [searchParams]);

  return (
    <>
      {amenity.map((amenity, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              {/* <input type="checkbox" /> */}
              <input
              type="checkbox"
              value={amenity.name}
              checked={amenities.includes(amenity.name)}
              onChange={handleFilterCheckbox}
            />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{amenity.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{amenity.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AmenitiesFilter;
