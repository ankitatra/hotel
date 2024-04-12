import React, { useState } from 'react';
import GalleryUploader from '../content/GalleryUploader';


const HotelRoom = () => {
//   const [roomType, setRoomType] = useState('');
//   const [images, setImages] = useState([]);
//   const [benefit, setBenefit] = useState('');
//   const [sleep, setSleep] = useState('');
//   const [oneNightPrice, setOneNightPrice] = useState(null);
//   const [taxCharges, setTaxCharges] = useState(null);
//   const [totalRoom, setTotalRoom] = useState(null);
//   const [isPrimary, setIsPrimary] = useState(false);
//   const [roomList, setRoomList] = useState([]);
//   const [roomNumber, setRoomNumber] = useState('');
//   const [bookingDate, setBookingDate] = useState('');
//   const [checkinTime, setCheckinTime] = useState('');
//   const [checkoutTime, setCheckoutTime] = useState('');
//   const [checkinDate, setCheckinDate] = useState('');
//   const [checkoutDate, setCheckoutDate] = useState('');
//   const [userId, setUserId] = useState('');

//   const handleAddRoom = () => {
//     const newRoom = {
//       roomType,
//       images,
//       benefit,
//       sleep,
//       oneNightPrice,
//       taxCharges,
//       totalRoom,
//       isPrimary,
//       roomList: [
//         {
//           roomNumber,
//           booking: [{
//             bookingDate,
//             checkinTime,
//             checkoutTime,
//             checkinDate,
//             checkoutDate,
//             userId
//           }]
//         }
//       ]
//     };
//     // Send newRoom to the backend or handle it accordingly
//     console.log(newRoom);
//   };

//   const handleDuplicateFields = () => {
//     // Duplicate form fields
//     // You need to handle duplication of state accordingly
//   };


// const [rooms, setRooms] = useState([{
//     roomType: '',
//     images: [],
//     benefit: '',
//     sleep: '',
//     oneNightPrice: null,
//     taxCharges: null,
//     totalRoom: null,
//     isPrimary: false,
//     roomList: [{
//       roomNumber: '',
//       booking: [{
//         bookingDate: '',
//         checkinTime: '',
//         checkoutTime: '',
//         checkinDate: '',
//         checkoutDate: '',
//         userId: ''
//       }]
//     }]
//   }]);

//   const handleAddRoom = () => {
//     setRooms([...rooms, {
//       roomType: '',
//       images: [],
//       benefit: '',
//       sleep: '',
//       oneNightPrice: null,
//       taxCharges: null,
//       totalRoom: null,
//       isPrimary: false,
//       roomList: [{
//         roomNumber: '',
//         booking: [{
//           bookingDate: '',
//           checkinTime: '',
//           checkoutTime: '',
//           checkinDate: '',
//           checkoutDate: '',
//           userId: ''
//         }]
//       }]
//     }]);
//   };

//   const handleSubmit = () => {
//     console.log(rooms); // Handle submission of all rooms data
//   };

const [rooms, setRooms] = useState([{
  roomType: '',
  images: [],
  benefit: '',
  sleep: '',
  oneNightPrice: null,
  taxCharges: null,
  totalRoom: null,
  isPrimary: false,
  roomList: [{
    roomNumber: '',
    booking: [{
      bookingDate: '',
      checkinTime: '',
      checkoutTime: '',
      checkinDate: '',
      checkoutDate: '',
      userId: ''
    }]
  }]
}]);

const handleAddRoom = () => {
  setRooms([...rooms, {
    roomType: '',
    images: [],
    benefit: '',
    sleep: '',
    oneNightPrice: null,
    taxCharges: null,
    totalRoom: null,
    isPrimary: false,
    roomList: [{
      roomNumber: '',
      booking: [{
        bookingDate: '',
        checkinTime: '',
        checkoutTime: '',
        checkinDate: '',
        checkoutDate: '',
        userId: ''
      }]
    }]
  }]);
};

const handleSubmit = () => {
  console.log(rooms); // Handle submission of all rooms data
};

  const [roomNumbers, setRoomNumbers] = useState(['']); // Initialize with one empty room number input

  const handleAddRoomNumber = () => {
    setRoomNumbers([...roomNumbers, '']); // Add another empty room number input
  };

  const handleRoomNumberChange = (index, value) => {
    const updatedRoomNumbers = [...roomNumbers];
    updatedRoomNumbers[index] = value;
    setRoomNumbers(updatedRoomNumbers);
  };
  return (
    <>
      <div className="row x-gap-20 y-gap-20">
      {/* Room Type Dropdown */}
      <div className="col-lg-4 col-md-6">
        <div className="form-input">
          <select   required>
            <option value="">Select Room Type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
            {/* Add more options as needed */}
          </select>
          <label className="lh-1 text-16 text-light-1">Room Type</label>
        </div>
      </div>
      {/* Benefits Dropdown */}
      <div className="col-lg-4 col-md-6">
        <div className="form-input">
          <select  required>
            <option value="">Select Benefits</option>
            <option value="Wi-Fi">Wi-Fi</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Gym Access">Gym Access</option>
            {/* Add more options as needed */}
          </select>
          <label className="lh-1 text-16 text-light-1">Benefits</label>
        </div>
      </div>
 
      <GalleryUploader/>
      <div className="col-lg-4 col-md-6">
        <div className="form-input">
          <input type="text"  onChange={(e) => setSleep(e.target.value)} required />
          <label className="lh-1 text-16 text-light-1">Sleep</label>
        </div>
      </div>
      {/* Price Input */}
      <div className="col-lg-4 col-md-6">
        <div className="form-input">
          <input type="number"  onChange={(e) => setOneNightPrice(e.target.value)} required />
          <label className="lh-1 text-16 text-light-1">Price (Per Night)</label>
        </div>
      </div>
      {/* Tax Charges Input */}
      <div className="col-lg-4 col-md-6">
        <div className="form-input">
          <input type="number" onChange={(e) => setTaxCharges(e.target.value)} required />
          <label className="lh-1 text-16 text-light-1">Tax Charges</label>
        </div>
      </div>
      {/* Total Room Input */}
      <div className="col-lg-4 col-md-6">
        <div className="form-input">
          <input type="number" onChange={(e) => setTotalRoom(e.target.value)} required />
          <label className="lh-1 text-16 text-light-1">Total Rooms</label>
        </div>
      </div>
      {/* Is Primary Checkbox */}
      <div className="col-lg-4 col-md-6">
        <div className="form-check">
          <input type="checkbox" id="isPrimary" onChange={(e) => setIsPrimary(e.target.checked)} />
          <label htmlFor="isPrimary" className="ml-2">Primary Room</label>
        </div>
      </div>
      {/* Room List Section */}
      <div className="col-12">
        {/* Room List and Booking Details */}
      </div>
      {/* Button to Add Room */}
      <div className="col-12">
        {/* <button className="btn btn-primary" onClick={handleAddRoom}>Add Room</button> */}
        <button className="btn btn-primary" onClick={handleAddRoom}>Add Another Room</button>
          <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
      </div>


     
    </div>



    <div>.......................................</div>

    <div>
      {rooms.map((room, index) => (
        <div key={index} className="row x-gap-20 y-gap-20">
          {/* Room Type Dropdown */}
          <div className="col-lg-4 col-md-6">
            <div className="form-input">
              <select required>
                <option value="">Select Room Type</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Suite">Suite</option>
                {/* Add more options as needed */}
              </select>
              <label className="lh-1 text-16 text-light-1">Room Type</label>
            </div>
          </div>
          {/* Benefits Dropdown */}
          <div className="col-lg-4 col-md-6">
            <div className="form-input">
              <select required>
                <option value="">Select Benefits</option>
                <option value="Wi-Fi">Wi-Fi</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Gym Access">Gym Access</option>
                {/* Add more options as needed */}
              </select>
              <label className="lh-1 text-16 text-light-1">Benefits</label>
            </div>
          </div>
          {/* Gallery Uploader */}
          <GalleryUploader />
          {/* Sleep Input */}
          <div className="col-lg-4 col-md-6">
            <div className="form-input">
              <input type="text" onChange={(e) => setSleep(e.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Sleep</label>
            </div>
          </div>
          {/* Price Input */}
          <div className="col-lg-4 col-md-6">
            <div className="form-input">
              <input type="number" onChange={(e) => setOneNightPrice(e.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Price (Per Night)</label>
            </div>
          </div>
          {/* Tax Charges Input */}
          <div className="col-lg-4 col-md-6">
            <div className="form-input">
              <input type="number" onChange={(e) => setTaxCharges(e.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Tax Charges</label>
            </div>
          </div>
          {/* Total Room Input */}
          <div className="col-lg-4 col-md-6">
            <div className="form-input">
              <input type="number" onChange={(e) => setTotalRoom(e.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Total Rooms</label>
            </div>
          </div>
          {/* Is Primary Checkbox */}
          <div className="col-lg-4 col-md-6">
            <div className="form-check">
              <input type="checkbox" id={`isPrimary${index}`} />
              <label htmlFor={`isPrimary${index}`} className="ml-2">Primary Room</label>
            </div>
          </div>
          {/* Room List Section */}
          <div className="col-12">
            {/* Room List and Booking Details */}
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary" onClick={handleAddRoom}>Add Hotel Room</button>
          <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>


    <div>
      {roomNumbers.map((roomNumber, index) => (
        <div key={index} className="room-number-container">
          <div className="form-input">
            <input 
              type="text" 
              value={roomNumber} 
              onChange={(e) => handleRoomNumberChange(index, e.target.value)} 
              required 
            />
            <label className="lh-1 text-16 text-light-1">Room Number</label>
          </div>
        </div>
      ))}
      <div className="row">
        <div className="col-12">
          <button className="btn btn-primary" onClick={handleAddRoomNumber}>Add Room Number</button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default HotelRoom;
