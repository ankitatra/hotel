// import React, { useState } from 'react';

// const HelpfulFacts = () => {
//   const [sections, setSections] = useState([
//     { category: 'check-in/Check-out', locations: [{ name: '', distance: '' }] },
//     { category: 'Getting around', locations: [{ name: '', distance: '' }] },
//     { category: 'Extras', locations: [{ name: '', distance: '' }] },
//     { category: 'Parking', locations: [{ name: '', distance: '' }] },
//     {category:"The property",locations:[{name:'',distance:''}]}
//   ]);

//   const handleAddLocation = (index) => {
//     const updatedSections = [...sections];
//     updatedSections[index].locations.push({ name: '', distance: '' });
//     setSections(updatedSections);
//   };

//   const handleLocationChange = (sectionIndex, locationIndex, field, value) => {
//     const updatedSections = [...sections];
//     updatedSections[sectionIndex].locations[locationIndex][field] = value;
//     setSections(updatedSections);
//   };

//   return (
//     <div>
//       {sections.map((section, sectionIndex) => (
//         <div key={sectionIndex}>
//           <h3>{section.category}</h3>
//           {section.locations.map((location, locationIndex) => (
//             <div key={locationIndex} className="row mb-3">
//               <div className="col-md-6">
//                 <input
//                   type="text"
//                   value={location.name}
//                   placeholder="Nearby Location Name"
//                   onChange={(e) => handleLocationChange(sectionIndex, locationIndex, 'name', e.target.value)}
//                 />
//               </div>
//               <div className="col-md-4">
//                 <input
//                   type="text"
//                   value={location.distance}
//                   placeholder="Distance"
//                   onChange={(e) => handleLocationChange(sectionIndex, locationIndex, 'distance', e.target.value)}
//                 />
//               </div>
//             </div>
//           ))}
//           <button className="btn btn-primary" onClick={() => handleAddLocation(sectionIndex)}>Add</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HelpfulFacts;


import React from 'react';

const HelpfulFacts = ({ sections, onSectionsChange }) => {
  const handleAddLocation = (index) => {
    const updatedSections = [...sections];
    updatedSections[index].locations.push({ name: '', distance: '' });
    onSectionsChange(updatedSections);
  };

  const handleLocationChange = (sectionIndex, locationIndex, field, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].locations[locationIndex][field] = value;
    onSectionsChange(updatedSections);
  };

  return (
    <div>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h3>{section.category}</h3>
          {section.locations.map((location, locationIndex) => (
            <div key={locationIndex} className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  value={location.name}
                  placeholder="Nearby Location Name"
                  onChange={(e) => handleLocationChange(sectionIndex, locationIndex, 'name', e.target.value)}
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  value={location.distance}
                  placeholder="Distance"
                  onChange={(e) => handleLocationChange(sectionIndex, locationIndex, 'distance', e.target.value)}
                />
              </div>
            </div>
          ))}
          <button className="btn btn-primary" onClick={() => handleAddLocation(sectionIndex)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default HelpfulFacts;


