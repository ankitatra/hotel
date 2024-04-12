
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { gethotel } from "../../../store/hotel/action";
// import { useSearchParams } from "react-router-dom";
// const RatingsFilter = () => {
//   // const ratings = [1, 2, 3, 4, 5];
//   // const [activeRating, setActiveRating] = useState(null);

//   // const handleRatingClick = (rating) => {
//   //   setActiveRating(rating === activeRating ? null : rating);
//   // };

//   const ratings = [1, 2, 3, 4, 5];
//   const [activeRating, setActiveRating] = useState(null);
//   const dispatch = useDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const handleRatingClick = (rating) => {
//     setActiveRating(rating === activeRating ? null : rating);
//     updateQueryParams(rating);
//   };

//   const updateQueryParams = (rating) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.delete("rating");
//     if (rating !== null) {
//       params.append("rating", rating);
//     }
//     setSearchParams(params);
//     dispatch(gethotel(searchParams.toString()));
//   };


//   return (
//     <>
//       {ratings.map((rating) => (
//         <div className="col-auto" key={rating}>
//           <button
//             className={`button -blue-1 bg-blue-1-05 text-blue-1 py-5 px-20 rounded-100 ${
//               rating === activeRating ? "active" : ""
//             }`}
//             onClick={() => handleRatingClick(rating)}
//           >
//             {rating}
//           </button>
//         </div>
//       ))}
//     </>
//   );
// };

// export default RatingsFilter;



import { useState } from "react";
import { useDispatch } from "react-redux";
import { gethotel } from "../../../store/hotel/action";
import { useSearchParams } from "react-router-dom";

const RatingsFilter = () => {
  const ratings = [1, 2, 3, 4, 5];
  const [activeRating, setActiveRating] = useState(null);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleRatingClick = (rating) => {
    if (rating === activeRating) {
      setActiveRating(null); // Deselect if the same rating is clicked again
    } else {
      setActiveRating(rating); // Select the clicked rating
    }
    updateQueryParams(rating);
  };

  const updateQueryParams = (rating) => {
    const params = new URLSearchParams(searchParams.toString());
    if (rating === activeRating) {
      params.delete("rating"); // Remove the rating if it's deselected
    } else {
      params.set("rating", rating); // Set the rating if it's selected
    }
    setSearchParams(params);
    dispatch(gethotel(searchParams.toString()));
  };

  return (
    <>
      {ratings.map((rating) => (
        <div className="col-auto" key={rating}>
          <button
            className={`button -blue-1 bg-blue-1-05 text-blue-1 py-5 px-20 rounded-100 ${
              rating === activeRating ? "active" : ""
            }`}
            onClick={() => handleRatingClick(rating)}
          >
            {rating}
          </button>
        </div>
      ))}
    </>
  );
};

export default RatingsFilter;
