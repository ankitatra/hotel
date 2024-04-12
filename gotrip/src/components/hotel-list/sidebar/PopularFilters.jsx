
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { gethotel } from "../../../store/hotel/action";
// import { useSearchParams } from "react-router-dom";
// const popularFilters = () => {
//   const filters = [
//     { label: "Breakfast Included", count: 92 },
//     { label: "Romantic", count: 45 },
//     { label: "Airport Transfer", count: 21 },
//     { label: "WiFi Included", count: 78 },
//     { label: "5 Star", count: 679 },
//     { label: "Parking", count: 45 },
//     { label: "Kitchen", count: 21 },
//     { label: "Living Area", count: 78 },
//     { label: "Safety & security", count: 679 },
//   ];
//   const dispatch = useDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialCategory = searchParams.getAll("hotel_facility");
//   const [hotel_facility, setDeals] = useState(initialCategory || []);


  
//   const handleFilterCheckbox = (e) => {
//     const newCategory = [...hotel_facility];
//     const label = e.target.value;
//     if (newCategory.includes(label)) {
//       newCategory.splice(newCategory.indexOf(label), 1);
//     } else {
//       newCategory.push(label);
//     }
//     setDeals(newCategory);
//     updateQueryParams(newCategory);
//   };

//   // const updateQueryParams = (newCategory) => {
//   //   const params = new URLSearchParams();
//   //   newCategory.forEach((label) => {
//   //     params.append("hotel_facility", label);
//   //   });
//   //   setSearchParams(params);
//   // };


//   const updateQueryParams = (newCategory) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.delete("hotel_facility"); // Remove existing "hotel_facility" params
//     newCategory.forEach((label) => {
//       params.append("hotel_facility", label); // Append updated "hotel_facility" params
//     });
//     setSearchParams(params);
//   };

  
//   useEffect(() => {
//     // Dispatch action to fetch hotels based on updated filters
//     dispatch(gethotel(searchParams.toString()));
//   }, [searchParams, dispatch]);

//   // Update state of checkboxes when URL parameters change
//   useEffect(() => {
//     const updatedCategory = searchParams.getAll("hotel_facility");
//     setDeals(updatedCategory || []);
//   }, [searchParams]);
//   return (
//     <>
//       {filters.map((filter, index) => (
//         <div key={index} className="row y-gap-10 items-center justify-between">
//           <div className="col-auto">
//             <div className="form-checkbox d-flex items-center">
//               <input type="checkbox" 
//               value={filter.label}
//               checked={hotel_facility.includes(filter.label)}
//               onChange={handleFilterCheckbox}
//               />
//               <div className="form-checkbox__mark">
//                 <div className="form-checkbox__icon icon-check" />
//               </div>
//               <div className="text-15 ml-10">{filter.label}</div>
//             </div>
//           </div>
//           <div className="col-auto">
//             <div className="text-15 text-light-1">{filter.count}</div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default popularFilters;


// PopularFilters component
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { gethotel } from "../../../store/hotel/action";
import { useSearchParams } from "react-router-dom";

const PopularFilters = () => {
  const filters = [
    { label: "Breakfast Included", count: 92 },
    { label: "Romantic", count: 45 },
    { label: "Airport Transfer", count: 21 },
    { label: "WiFi Included", count: 78 },
    { label: "5 Star", count: 679 },
    { label: "Parking", count: 45 },
    { label: "Kitchen", count: 21 },
    { label: "Living Area", count: 78 },
    { label: "Safety & security", count: 679 },
  ];

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialFacilities = searchParams.getAll("hotel_facility");
  const [hotelFacilities, setHotelFacilities] = useState(initialFacilities || []);

  const handleFilterCheckbox = (e) => {
    const label = e.target.value;
    const updatedFacilities = hotelFacilities.includes(label)
      ? hotel.filter((facility) => facility !== label)
      : [...hotelFacilities, label];
    setHotelFacilities(updatedFacilities);
    updateQueryParams(updatedFacilities);
  };

  const updateQueryParams = (updatedFacilities) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("hotel_facility");
    updatedFacilities.forEach((facility) => {
      params.append("hotel_facility", facility);
    });
    setSearchParams(params);
  };

  useEffect(() => {
    dispatch(gethotel(searchParams.toString()));
  }, [searchParams, dispatch]);

  useEffect(() => {
    const updatedFacilities = searchParams.getAll("hotel_facility");
    setHotelFacilities(updatedFacilities || []);
  }, [searchParams]);

  return (
    <>
      {filters.map((filter, index) => (
        <div key={index} className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input 
                type="checkbox"
                value={filter.label}
                checked={hotelFacilities.includes(filter.label)}
                onChange={handleFilterCheckbox}
              />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{filter.label}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{filter.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PopularFilters;
