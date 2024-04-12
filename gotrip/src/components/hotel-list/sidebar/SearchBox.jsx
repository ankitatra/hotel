// import { useState } from "react";

// const SearchBox = () => {
//   const [searchQuery, setSearchQuery] = useState("");
  
//   const handleSearch = (event) => {
//     event.preventDefault();
//     // Your search logic here
//     setSearchQuery(event.target.value);
//   };



 


//   return (
//     <form onSubmit={handleSearch}>
//       <div className="single-field relative d-flex items-center py-10">
//         <input
//           className="pl-50 border-light text-dark-1 h-50 rounded-8"
//           type="email"
//           placeholder="e.g. Best Western"
//           required
//         />
//        <input
//           className="pl-50 border-light text-dark-1 h-50 rounded-8"
//           type="text"
//           placeholder="Search hotels..."
//           value={searchQuery}
//           // onChange={handleInputChange}
//           required
//         /> 
//         <button type="submit" className="absolute d-flex items-center h-full">
//           <i className="icon-search text-20 px-15 text-dark-1" />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBox;



// import { gethotel } from "@/store/hotel/action";
// import { useState } from "react";
// import { useDispatch } from "react-redux";


// const SearchBox = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const dispatch = useDispatch();

//   const handleInputChange = (event) => {
//     const query = event.target.value;
//     setSearchQuery(query);
//     dispatch(gethotel({ query }));
//   };

//   return (
//     <form>
//       <div className="single-field relative d-flex items-center py-10">
//         <input
//           className="pl-50 border-light text-dark-1 h-50 rounded-8"
//           type="text"
//           placeholder="Search hotels..."
//           value={searchQuery}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit" className="absolute d-flex items-center h-full">
//           <i className="icon-search text-20 px-15 text-dark-1" />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default SearchBox;

import { gethotel } from "@/store/hotel/action";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query); // Using functional form of setState
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(gethotel({ query: searchQuery }));
  };

  useEffect(() => {
    dispatch(gethotel({ query: searchQuery }));
  }, [searchQuery, dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="single-field relative d-flex items-center py-10">
        <input
          className="pl-50 border-light text-dark-1 h-50 rounded-8"
          type="text"
          placeholder="Search hotels..."
          value={searchQuery}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="absolute d-flex items-center h-full">
          <i className="icon-search text-20 px-15 text-dark-1" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
