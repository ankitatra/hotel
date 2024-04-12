// import { useEffect, useState } from "react";
// import InputRange from "react-input-range";
// import { useSearchParams } from 'react-router-dom';
// const PirceSlider = () => {
//   const [price, setPrice] = useState({
//     value: { min: 0, max: 500 },
//   });
//   const [searchParams, setSearchParams] = useSearchParams();

  
//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set('minPrice', price.value.min);
//     params.set('maxPrice', price.value.max);
//     setSearchParams(params);
//   }, [price, setSearchParams, searchParams]);

//   const handleOnChange = (value) => {
//     console.log("...........................")
//     console.log(value)
//     setPrice({ value });
//   };

//   return (
//     <div className="js-price-rangeSlider">
//       <div className="text-14 fw-500"></div>

//       <div className="d-flex justify-between mb-20">
//         <div className="text-15 text-dark-1">
//           <span className="js-lower mx-1">${price.value.min}</span>-
//           <span className="js-upper mx-1">${price.value.max}</span>
//         </div>
//       </div>

//       <div className="px-5">
//         <InputRange
//           formatLabel={(value) => ``}
//           minValue={0}
//           maxValue={2000}
//           value={price.value}
//           onChange={(value) => handleOnChange(value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default PirceSlider;



// import React, { useEffect, useState } from "react";
// import InputRange from "react-input-range";
// import { useSearchParams } from 'react-router-dom';

// const PriceSlider = () => {
//   const [price, setPrice] = useState({ min: 0, max: 500 });
//   const [searchParams] = useSearchParams();

//   // When the URL parameters change, update the price state
//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     const minPrice = parseInt(params.get('minPrice')) || 0;
//     const maxPrice = parseInt(params.get('maxPrice')) || 500;
//     setPrice({ min: minPrice, max: maxPrice });
//   }, [searchParams]);

//   // When the price state changes, update the URL parameters
//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set('minPrice', price.min);
//     params.set('maxPrice', price.max);
//     // Use replace to prevent adding unnecessary history entries
//     window.history.replaceState(null, '', `?${params.toString()}`);
//   }, [price, searchParams]);

//   const handleOnChange = (value) => {
//     setPrice(value);
//     console.log("myprambjhbadjcbdsjhcbdshjdcg",searchParams)
//   };

//   return (
//     <div className="js-price-rangeSlider">
//       <div className="text-14 fw-500"></div>
//        <div className="d-flex justify-between mb-20">
//         <div className="text-15 text-dark-1">
//           <span className="js-lower mx-1">${price.min}</span>-
//           <span className="js-upper mx-1">${price.max}</span>
//         </div>
//       </div>

//       <div className="px-5">
//         <InputRange
//           formatLabel={(value) => ``}
//           minValue={0}
//           maxValue={2000}
//           value={price}
//           onChange={(value) => handleOnChange(value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default PriceSlider;

// import React, { useEffect, useState } from "react";
// import InputRange from "react-input-range";
// import { useSearchParams } from 'react-router-dom';

// const PriceSlider = () => {
//   const [price, setPrice] = useState({ min: 0, max: 500 });
//   const [searchParams] = useSearchParams();

//   // When the URL parameters change, update the price state
//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     const minPrice = parseInt(params.get('minPrice')) || 0;
//     const maxPrice = parseInt(params.get('maxPrice')) || 500;
//     console.log("Search parameters:", searchParams.toString());

//     setPrice({ min: minPrice, max: maxPrice });
//   }, [searchParams]);

//   // When the price state changes, update the URL parameters and fetch data
//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set('minPrice', price.min);
//     params.set('maxPrice', price.max);
//     // Use replace to prevent adding unnecessary history entries
//     window.history.replaceState(null, '', `?${params.toString()}`);
//     console.log("Search parameters:", searchParams.toString());

//     // Fetch or update data here based on the new price values (price.min and price.max)
//     fetchData(); // Example function to fetch data
//   }, [price, searchParams]);

//   const handleOnChange = (value) => {
//     setPrice(value);
//   };

//   // Function to fetch data (replace it with your actual data fetching function)
//   const fetchData = () => {
//     // Fetch or update data here based on the new price values (price.min and price.max)
//     // console.log("Fetching data with price range:", price);
//     console.log("Fetching data with price range:",Object.fromEntries(searchParams.entries()))
//   };

//   // Listen for changes in minPrice and maxPrice in the URL parameters
//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     const minPrice = parseInt(params.get('minPrice')) || 0;
//     const maxPrice = parseInt(params.get('maxPrice')) || 500;
//     console.log("Min Price:", minPrice);
//     console.log("Max Price:", maxPrice);
//     console.log("ankita");
//   }, [searchParams]);

//   return (
//     <div className="js-price-rangeSlider">
//       <div className="text-14 fw-500"></div>
//        <div className="d-flex justify-between mb-20">
//         <div className="text-15 text-dark-1">
//           <span className="js-lower mx-1">${price.min}</span>-
//           <span className="js-upper mx-1">${price.max}</span>
//         </div>
//       </div>

//       <div className="px-5">
//         <InputRange
//           formatLabel={(value) => ``}
//           minValue={0}
//           maxValue={2000}
//           value={price}
//           onChange={(value) => handleOnChange(value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default PriceSlider;



// import React, { useEffect, useState } from "react";
// import InputRange from "react-input-range";
// import { useSearchParams } from 'react-router-dom';

// const PriceSlider = () => {
//   const [price, setPrice] = useState({ min: 0, max: 500 });
//   const [searchParams, setSearchParams] = useSearchParams();

//   // When the URL parameters change, update the price state
//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     const minPrice = parseInt(params.get('minPrice')) || 0;
//     const maxPrice = parseInt(params.get('maxPrice')) || 500;
//     setPrice({ min: minPrice, max: maxPrice });
//   }, [searchParams]);

//   // When the price state changes, update the URL parameters
//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set('minPrice', price.min);
//     params.set('maxPrice', price.max);
//     setSearchParams(params);
//   }, [price, setSearchParams]); // Depend on 'price' and 'setSearchParams'

//   // Print the search parameters whenever 'searchParams' change
//   useEffect(() => {
//     console.log("Search parameters:", Object.fromEntries(searchParams.entries()));
//   }, [searchParams]); // Only depend on 'searchParams'

//   const handleOnChange = (value) => {
//     setPrice(value);
//   };

//   return (
//     <div className="js-price-rangeSlider">
//       <div className="text-14 fw-500"></div>
//       <div className="d-flex justify-between mb-20">
//         <div className="text-15 text-dark-1">
//           <span className="js-lower mx-1">${price.min}</span>-
//           <span className="js-upper mx-1">${price.max}</span>
//         </div>
//       </div>

//       <div className="px-5">
//         <InputRange
//           formatLabel={(value) => ``}
//           minValue={0}
//           maxValue={2000}
//           value={price}
//           onChange={(value) => handleOnChange(value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default PriceSlider;



// import React, { useEffect, useState } from "react";
// import InputRange from "react-input-range";
// import { useSearchParams } from 'react-router-dom';

// const PriceSlider = () => {
//   const [price, setPrice] = useState({ min: 0, max: 500 });
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [sliderValue, setSliderValue] = useState({ min: 0, max: 500 });

//   // When the URL parameters change, update the price state
//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     const minPrice = parseInt(params.get('minPrice')) || 0;
//     const maxPrice = parseInt(params.get('maxPrice')) || 500;
//     setPrice({ min: minPrice, max: maxPrice });
//     setSliderValue({ min: minPrice, max: maxPrice }); // Set slider value
//   }, [searchParams]);

//   // When the price state changes, update the URL parameters
//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set('minPrice', price.min);
//     params.set('maxPrice', price.max);
//     setSearchParams(params);
//   }, [price, setSearchParams]); // Depend on 'price' and 'setSearchParams'

//   // Print the search parameters whenever 'searchParams' change
//   useEffect(() => {
//     console.log("Search parameters:", Object.fromEntries(searchParams.entries()));
//   }, [searchParams]); // Only depend on 'searchParams'

//   const handleOnChange = (value) => {
//     setSliderValue(value); // Update slider value
//   };

//   const handleOnAfterChange = (value) => {
//     setPrice(value); // Update price state after slider interaction
//   };

//   return (
//     <div className="js-price-rangeSlider">
//       <div className="text-14 fw-500"></div>
//       <div className="d-flex justify-between mb-20">
//         <div className="text-15 text-dark-1">
//           <span className="js-lower mx-1">${price.min}</span>-
//           <span className="js-upper mx-1">${price.max}</span>
//         </div>
//       </div>

//       <div className="px-5">
//         <InputRange
//           formatLabel={(value) => ``}
//           minValue={0}
//           maxValue={2000}
//           value={sliderValue} // Use sliderValue instead of price
//           onChange={(value) => handleOnChange(value)}
//           onChangeComplete={(value) => handleOnAfterChange(value)} // Update price state after interaction
//         />
//       </div>
//     </div>
//   );
// };

// export default PriceSlider;

// import React, { useEffect, useState } from "react";
// import InputRange from "react-input-range";
// import { useSearchParams } from 'react-router-dom';
// import { debounce } from 'lodash';

// const PriceSlider = () => {
//   const [price, setPrice] = useState({ min: 0, max: 500 });
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     const minPrice = parseInt(params.get('minPrice')) || 0;
//     const maxPrice = parseInt(params.get('maxPrice')) || 500;
//     setPrice({ min: minPrice, max: maxPrice });
//   }, [searchParams]);

//   const handleOnChange = debounce((value) => {
//     setPrice(value);
//     updateUrlParams(value);
//   }, 0);

//   const updateUrlParams = (value) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set('minPrice', value.min);
//     params.set('maxPrice', value.max);
//     window.history.replaceState(null, '', `?${params.toString()}`);
//   };

//   return (
//     <div className="js-price-rangeSlider">
//       <div className="text-14 fw-500"></div>
//        <div className="d-flex justify-between mb-20">
//         <div className="text-15 text-dark-1">
//           <span className="js-lower mx-1">${price.min}</span>-
//           <span className="js-upper mx-1">${price.max}</span>
//         </div>
//       </div>

//       <div className="px-5">
//         <InputRange
//           formatLabel={(value) => ``}
//           minValue={0}
//           maxValue={2000}
//           value={price}
//           onChange={(value) => handleOnChange(value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default PriceSlider;



// import React, { useEffect, useState } from "react";
// import InputRange from "react-input-range";
// import { useSearchParams } from 'react-router-dom';

// const PriceSlider = () => {
//   const [price, setPrice] = useState({ min: 0, max: 20000 });
//   const [searchParams, setSearchParams] = useSearchParams();

//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     const minPrice = parseInt(params.get('minPrice')) || 0;
//     const maxPrice = parseInt(params.get('maxPrice')) || 20000;
//     setPrice({ min: minPrice, max: maxPrice });
//   }, [searchParams]);

//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set('minPrice', price.min);
//     params.set('maxPrice', price.max);
//     window.history.replaceState(null, '', `?${params.toString()}`);
//     console.log("Updated URL Parameters:", params.toString());
//   }, [price]);

//   const handleOnChange = (value) => {
//     setPrice(value);
   
//   };

//   return (
//     <div className="js-price-rangeSlider">
//       <div className="text-14 fw-500"></div>
//       <div className="d-flex justify-between mb-20">
//         <div className="text-15 text-dark-1">
//           <span className="js-lower mx-1">${price.min}</span>-
//           <span className="js-upper mx-1">${price.max}</span>
//         </div>
//       </div>

//       <div className="px-5">
//         <InputRange
//           formatLabel={(value) => ``}
//           minValue={0}
//           maxValue={20000}
//           value={price}
//           onChange={(value) => handleOnChange(value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default PriceSlider;


import React, { useEffect, useState } from 'react';
import InputRange from 'react-input-range';
import { useSearchParams } from 'react-router-dom';

const PriceSlider = () => {
  const [price, setPrice] = useState({ min: 0, max: 20000 });
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const minPrice = parseInt(params.get('minPrice')) || 0;
    const maxPrice = parseInt(params.get('maxPrice')) || 20000;
    setPrice({ min: minPrice, max: maxPrice });
  }, [searchParams]);

  const handlePriceRangeChange = (value) => {
    setPrice(value);
    updateSearchParams(value);
  };

  const updateSearchParams = (priceRange) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('minPrice', priceRange.min);
    params.set('maxPrice', priceRange.max);
    setSearchParams(params);
    console.log("Updated Search Params:", params.toString()); // Log the updated search parameters
  };

  return (
    <div className="js-price-rangeSlider">
      <div className="text-14 fw-500"></div>
      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">${price.min}</span>-
          <span className="js-upper mx-1">${price.max}</span>
        </div>
      </div>

      <div className="px-5">
        <InputRange
          formatLabel={(value) => ''}
          minValue={0}
          maxValue={20000}
          value={price}
          onChange={(value) => handlePriceRangeChange(value)}
          
        />

      </div>
    </div>
  );
};

export default PriceSlider;








