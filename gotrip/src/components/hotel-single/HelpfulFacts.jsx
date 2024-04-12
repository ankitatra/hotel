// const HelpfulFacts = ({hotel}) => {
//   console.log("helpfuleffects",hotel?.helpfulFacts)
//   return (
//     <>
//     {hotel?.helpfulFacts.map((item)=>{
//       <div className="col-lg-4 col-md-6">
//       <div className="">
//         <div className="d-flex items-center">
//           <i className="icon-ticket text-20 mr-10"></i>
//           <div className="text-16 fw-500">{item.category}</div>
//         </div>
//         {item.locations.map((cat)=>{
//         <div className="col-12">
//         <div className="text-15">
//           { cat.name}:{ cat.distance} USD
//         </div>
//         </div>
//         })}
       
//       </div>

      
//       </div>
//     })}


//       {/* <div className="col-lg-4 col-md-6">
//         <div className="">
//           <div className="d-flex items-center">
//             <i className="icon-calendar text-20 mr-10"></i>
//             <div className="text-16 fw-500">Check-in/Check-out</div>
//           </div>

//           <div className="row x-gap-50 y-gap-5 pt-10">
//             <div className="col-12">
//               <div className="text-15">Check-in from: 16:00</div>
//             </div>

//             <div className="col-12">
//               <div className="text-15">Check-out until: 12:00</div>
//             </div>

//             <div className="col-12">
//               <div className="text-15">Reception open until: 00:00</div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-30">
//           <div className="d-flex items-center">
//             <i className="icon-location-pin text-20 mr-10"></i>
//             <div className="text-16 fw-500">Getting around</div>
//           </div>

//           <div className="row x-gap-50 y-gap-5 pt-10">
//             <div className="col-12">
//               <div className="text-15">Airport transfer fee: 60 USD</div>
//             </div>

//             <div className="col-12">
//               <div className="text-15">Distance from city center: 2 km</div>
//             </div>

//             <div className="col-12">
//               <div className="text-15">
//                 Travel time to airport (minutes): 45
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

     

//       <div className="col-lg-4 col-md-6">
//         <div className="">
//           <div className="d-flex items-center">
//             <i className="icon-plans text-20 mr-10"></i>
//             <div className="text-16 fw-500">The property</div>
//           </div>

//           <div className="row x-gap-50 y-gap-5 pt-10">
//             <div className="col-12">
//               <div className="text-15">Non-smoking rooms/floors: Yes</div>
//             </div>

//             <div className="col-12">
//               <div className="text-15">Number of bars/lounges: 1</div>
//             </div>

//             <div className="col-12">
//               <div className="text-15">Number of floors: 26</div>
//             </div>

//             <div className="col-12">
//               <div className="text-15">Number of restaurants: 1</div>
//             </div>

//             <div className="col-12">
//               <div className="text-15">Number of rooms : 443</div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </>
//   );
// };

// export default HelpfulFacts;
const HelpfulFacts = ({ hotel }) => {
  console.log("helpfulEffects", hotel?.helpfulFacts);
  return (
    <>
      {hotel?.helpfulFacts.map((item) => (
        <div className="col-lg-4 col-md-6" key={item._id}>
          <div className="">
            <div className="d-flex items-center">
              <i className="icon-ticket text-20 mr-10"></i>
              <div className="text-16 fw-500">{item.category}</div>
            </div>
            {item.locations.map((cat, i) => ( // Added the return statement here
              // <div className="col-12" key={i}>
              //   <div className="text-15">
              //     {cat.name}: {cat.distance} 
              //   </div>

              // </div>
           <div className="row x-gap-50 y-gap-5 pt-10">
            <div className="col-12">
               <div className="text-15">{cat.name}: {cat.distance}</div>
             </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default HelpfulFacts;
