// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { gethotel } from "@/store/hotel/action";

// import { useSearchParams } from "react-router-dom";
// const DealsFilter = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialCtaegory = searchParams.getAll("category");
//   console.log("initalcategory", initialCtaegory);
//   const [category, setcategory] = useState(initialCtaegory || []);
//   const dealsData = [
//     { label: "Free cancellation" },
//     { label: "Reserve now, pay at stay" },
//     { label: "Properties with special offers" },
//   ];

 
//   const handleFilterCheckbox = (e) => {
//     //check if the data is predent in the category
//     const newCategories = [...category];
//     console.log("gg",e.target.chceked)
//     if (newCategories.includes(e.target.value)) {
//       newCategories.splice(newCategories.indexOf(e.target.value), 1);
//       //remove it
//     } else {
//       //else add it in the category array
//       newCategories.push(e.target.value);
//     }
//     setcategory(newCategories);
//   };
//   useEffect(() => {
//     let params = {};
//     params.category = category;
//     // sort && (params.sort = sort);
//     console.log("params", params);
//     setSearchParams(params);
//   }, [category, setSearchParams, ]);

//   return (
//     <>
//       {dealsData.map((deal, index) => (
//         <div className="col-auto" key={index}>
//           <div className="form-checkbox d-flex items-center">
//             <input
//               type="checkbox"
//               value={deal.label} 
//               checked={category.includes(deal.label)}
//               onChange={handleFilterCheckbox}
//             />
//             <div className="form-checkbox__mark">
//               <div className="form-checkbox__icon icon-check" />
//             </div>
//             <div className="text-15 ml-10">{deal.label}</div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default DealsFilter;


// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { gethotel } from "../../../store/hotel/action";
// import { useSearchParams } from "react-router-dom";

// const DealsFilter = () => {
//   const dealsData = [
//     { label: "Free cancellation" },
//     { label: "Reserve now, pay at stay" },
//     { label: "Properties with special offers" },
//   ];
  
//   const dispatch = useDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const initialCategory = searchParams.getAll("deals");
//   const [deals, setDeals] = useState(initialCategory || []);

//   const handleFilterCheckbox = (e) => {
//     const newCategory = [...deals];
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
//   //     params.append("deals", label);
//   //   });
//   //   setSearchParams(params);
//   // };

//   const updateQueryParams = (newCategory) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.delete("deals"); // Remove existing "deals" params
//     newCategory.forEach((label) => {
//       params.append("deals", label); // Append updated "deals" params
//     });
//     setSearchParams(params);
//   };

//   useEffect(() => {
//     // Dispatch action to fetch hotels based on updated filters
//     dispatch(gethotel(searchParams.toString()));
//   }, [searchParams, dispatch]);

//   // Update state of checkboxes when URL parameters change
//   useEffect(() => {
//     const updatedCategory = searchParams.getAll("deals");
//     setDeals(updatedCategory || []);
//   }, [searchParams]);

//   return (
//     <>
//       {dealsData.map((deal, index) => (
//         <div className="col-auto" key={index}>
//           <div className="form-checkbox d-flex items-center">
//             <input
//               type="checkbox"
//               value={deal.label}
//               checked={deals.includes(deal.label)}
//               onChange={handleFilterCheckbox}
//             />
//             <div className="form-checkbox__mark">
//               <div className="form-checkbox__icon icon-check" />
//             </div>
//             <div className="text-15 ml-10">{deal.label}</div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default DealsFilter;


// DealsFilter component
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { gethotel } from "../../../store/hotel/action";
import { useSearchParams } from "react-router-dom";

const DealsFilter = () => {
  const dealsData = [
    { label: "Free cancellation" },
    { label: "Reserve now, pay at stay" },
    { label: "Properties with special offers" },
  ];

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialDeals = searchParams.getAll("deals");
  const [deals, setDeals] = useState(initialDeals || []);

  const handleFilterCheckbox = (e) => {
    const label = e.target.value;
    const updatedDeals = deals.includes(label)
      ? deals.filter((deal) => deal !== label)
      : [...deals, label];
    setDeals(updatedDeals);
    updateQueryParams(updatedDeals);
  };

  const updateQueryParams = (updatedDeals) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("deals");
    updatedDeals.forEach((deal) => {
      params.append("deals", deal);
    });
    setSearchParams(params);
  };

  useEffect(() => {
    dispatch(gethotel(searchParams.toString()));
  }, [searchParams, dispatch]);

  useEffect(() => {
    const updatedDeals = searchParams.getAll("deals");
    setDeals(updatedDeals || []);
  }, [searchParams]);

  return (
    <>
      {dealsData.map((deal, index) => (
        <div className="col-auto" key={index}>
          <div className="form-checkbox d-flex items-center">
            <input
              type="checkbox"
              value={deal.label}
              checked={deals.includes(deal.label)}
              onChange={handleFilterCheckbox}
            />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
            <div className="text-15 ml-10">{deal.label}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DealsFilter;


