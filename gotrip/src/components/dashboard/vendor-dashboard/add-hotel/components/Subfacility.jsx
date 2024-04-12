


import React, { useState, useEffect } from 'react';

const AttributesTab = ({ onSelect }) => {
  // Define facilities data
  const [facilitiesData,SetfacilititesData]=useState(null)
  // const facilitiesData = {
  //   "Bathroom": ["Towels", "Bath or shower", "Private bathroom", "Toilet", "Free toiletries", "Hairdryer", "Bath"],
  //   "Media & Technology": ["Flat-screen TV", "Satellite channels", "Radio", "Telephone", "TV"],
  //   "Safety & security": ["Fire extinguishers", "CCTV in common areas", "Smoke alarms", "24-hour security"],
  //   "General": ["Hypoallergenic", "Non-smoking throughout", "Wake-up service", "Heating", "Packed lunches", "Carpeted", "Lift", "Fan", "Family rooms", "Facilities for disabled guests", "Ironing facilities", "Non-smoking rooms", "Iron", "Room service"],
  //   "Food & Drink": ["Kid meals", "Special diet menus (on request)", "Breakfast in the room", "Bar", "Restaurant", "Tea/Coffee maker"],
  //   "Cleaning services": ["Daily housekeeping", "Dry cleaning", "Laundry"],
  //   "Bedroom": ["Linen", "Wardrobe or closet"],
  //   "Reception services": ["Invoice provided", "Private check-in/check-out", "Luggage storage", "24-hour front desk"]
  // };

  async function fetchAndHandleFacilities() {
    try {
        const response = await fetch('https://good-jade-chinchilla-hem.cyclic.app/api/hotelsubfacility/facilities'); // Replace '/api/facilities' with your actual API endpoint
        if (!response.ok) {
            throw new Error('Failed to fetch facilities');
        }
        const data = await response.json();
        SetfacilititesData(data)
        console.log('Facilities data:', data);
        // Use the data as needed (e.g., display categories and subcategories on the UI)
    } catch (error) {
        console.error('Error fetching facilities:', error.message);
    }
}

// Usage example
useEffect(()=>{
  fetchAndHandleFacilities();
},[])



  // State for selected facilities and subfacilities
  const [selectedData, setSelectedData] = useState({});

  // Handler for selecting or deselecting a facility
  const handleFacilityChange = (facility) => {
    setSelectedData(prevState => {
      const updatedData = { ...prevState };
      if (updatedData[facility]) {
        delete updatedData[facility];
      } else {
        updatedData[facility] = [];
      }
      return updatedData;
    });
  };

  // Handler for selecting or deselecting a subfacility
  const handleSubFacilityChange = (facility, subFacility) => {
    setSelectedData(prevState => {
      const updatedData = { ...prevState };
      if (!updatedData[facility]) {
        updatedData[facility] = [subFacility];
      } else {
        if (updatedData[facility].includes(subFacility)) {
          updatedData[facility] = updatedData[facility].filter(item => item !== subFacility);
        } else {
          updatedData[facility] = [...updatedData[facility], subFacility];
        }
      }
      return updatedData;
    });
  };

  // Pass the selected data to the parent component when it changes
  useEffect(() => {
    onSelect(selectedData);
  }, [selectedData, onSelect]);

//   return (
//     <div className="check-section">
//       <div>
//         <h3>Select Facilities:</h3>
//         {Object.entries(facilitiesData)?.map(([facility, subFacilities]) => (
//           <div key={facility}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={Boolean(selectedData[facility])}
//                 onChange={() => handleFacilityChange(facility)}
//               />
//               {facility}
//             </label>
//             {Boolean(selectedData[facility]) && (
//               <div>
//                 <h4>Select SubFacilities:</h4>
//                 {subFacilities.map((subFacility) => (
//                   <label key={subFacility}>
//                     <input
//                       type="checkbox"
//                       checked={selectedData[facility].includes(subFacility)}
//                       onChange={() => handleSubFacilityChange(facility, subFacility)}
//                     />
//                     {subFacility}
//                   </label>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AttributesTab;

return (
  <div className="check-section">
    {facilitiesData && (
      <div>
        <h3>Select Facilities:</h3>
        {Object.entries(facilitiesData).map(([facility, subFacilities]) => (
          <div key={facility}>
            <label>
              <input
                type="checkbox"
                checked={Boolean(selectedData[facility])}
                onChange={() => handleFacilityChange(facility)}
              />
              {facility}
            </label>
            {Boolean(selectedData[facility]) && (
              <div>
                <h4>Select SubFacilities:</h4>
                {subFacilities.map((subFacility) => (
                  <label key={subFacility}>
                    <input
                      type="checkbox"
                      checked={selectedData[facility].includes(subFacility)}
                      onChange={() => handleSubFacilityChange(facility, subFacility)}
                    />
                    {subFacility}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
);
};

export default AttributesTab;


