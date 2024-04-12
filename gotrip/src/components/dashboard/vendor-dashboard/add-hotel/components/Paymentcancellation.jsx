// import React, { useState } from 'react';

// const PaymentCancellationPolicy = () => {
//   const [payAtHotel, setPayAtHotel] = useState(false);
//   const [payAtDay, setPayAtDay] = useState('');
//   const [freeCancellationBeforeDay, setFreeCancellationBeforeDay] = useState('');

//   const handlePayAtHotelChange = (e) => {
//     setPayAtHotel(e.target.checked);
//   };

//   const handlePayAtDayChange = (e) => {
//     setPayAtDay(e.target.value);
//   };

//   const handleFreeCancellationBeforeDayChange = (e) => {
//     setFreeCancellationBeforeDay(e.target.value);
//   };

//   return (
//     <div className="payment-cancellation-policy">
//       <h3>Payment and Cancellation Policy</h3>
//       <div className="payment-option">
//       <label htmlFor="payAtHotel" style={{ verticalAlign: 'middle' }}>Pay at Hotel</label>
//         <input
//             type="checkbox"
//             id="payAtHotel"
//             checked={payAtHotel}
//             onChange={handlePayAtHotelChange}
//             style={{ marginLeft: '-310px', verticalAlign: 'middle', }}
//         />
  
//         </div>


//       <div className="form-group">
//         <label htmlFor="payAtDay">Pay nothing until</label>
//         <input
//           type="text"
//           id="payAtDay"
//           placeholder="Enter day"
//           value={payAtDay}
//           onChange={handlePayAtDayChange}
//           style={{ border: '1px solid #333',marginLeft:"20px", padding: '10x', width: '30px' ,height:"auto"}}
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="freeCancellationBeforeDay">Free cancellation before</label>
//         <input
//           type="text"
//           id="freeCancellationBeforeDay"
//           placeholder="Enter day"
//           value={freeCancellationBeforeDay}
//           onChange={handleFreeCancellationBeforeDayChange}
//           style={{ border: '1px solid #333',marginLeft:"20px", padding: '10x', width: '30px' ,height:"auto"}}
//         />
//       </div>
    
//     </div>
//   );
// };

// export default PaymentCancellationPolicy;

import React from 'react';

const PaymentCancellationPolicy = ({ policyData, onPolicyDataChange }) => {
  const handlePayAtHotelChange = (e) => {
    const newData = { ...policyData, payAtHotel: e.target.checked };
    onPolicyDataChange(newData);
  };

  const handlePayAtDayChange = (e) => {
    const newData = { ...policyData, payAtDay: e.target.value };
    onPolicyDataChange(newData);
  };

  const handleFreeCancellationBeforeDayChange = (e) => {
    const newData = { ...policyData, freeCancellationBeforeDay: e.target.value };
    onPolicyDataChange(newData);
  };

  return (
    <div className="payment-cancellation-policy">
      <h3>Payment and Cancellation Policy</h3>
      <div className="payment-option">
        <label htmlFor="payAtHotel" style={{ verticalAlign: 'middle' }}>Pay at Hotel</label>
        <input
          type="checkbox"
          id="payAtHotel"
          checked={policyData.payAtHotel}
          onChange={handlePayAtHotelChange}
          style={{ marginLeft: '-310px', verticalAlign: 'middle' }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="payAtDay">Pay nothing until</label>
        <input
          type="text"
          id="payAtDay"
          placeholder="Enter day"
          value={policyData.payAtDay}
          onChange={handlePayAtDayChange}
          style={{ border: '1px solid #333', marginLeft: "20px", padding: '10x', width: '30px', height: "auto" }}
        />
      </div>

      <div className="form-group">
        <label htmlFor="freeCancellationBeforeDay">Free cancellation before</label>
        <input
          type="text"
          id="freeCancellationBeforeDay"
          placeholder="Enter day"
          value={policyData.freeCancellationBeforeDay}
          onChange={handleFreeCancellationBeforeDayChange}
          style={{ border: '1px solid #333', marginLeft: "20px", padding: '10x', width: '30px', height: "auto" }}
        />
      </div>
    </div>
  );
};

export default PaymentCancellationPolicy;


