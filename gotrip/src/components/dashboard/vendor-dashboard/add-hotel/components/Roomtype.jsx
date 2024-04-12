
import React, { useState } from 'react';
import GalleryUploader from './content/GalleryUploader';
import { useDispatch } from 'react-redux';
import { setRoomData } from '@/store/hotel/action';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HotelRoom = () => {
  const dispatch = useDispatch();
  const [numRooms, setNumRooms] = useState(1);
  const [rooms, setRooms] = useState([
    {
      roomtype: '',
      images: [],
      benefit: '',
      sleep: '',
      one_night_price: "",
      tax_charges: "",
      total_room: "",
      is_primary: false,
      room_list: [{
        roomnumber: '',
        booking: [{
          booking_date: '',
          checkin_time: '',
          checkout_time: '',
          checkin_date: '',
          checkout_date: '',
          
        }]
      }]
    }
  ]);

  // Function to handle changes to room fields
  const handleRoomFieldChange = (index, field, value) => {
    const updatedRooms = [...rooms];
    updatedRooms[index][field] = value;
    setRooms(updatedRooms);
  };

  // Function to handle changes to primary room checkbox
  const handlePrimaryCheckboxChange = (index, isChecked) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].is_primary = isChecked;
    setRooms(updatedRooms);
  };

  // Function to add a new room
  const handleAddRoom = () => {
    setNumRooms(prevNumRooms => prevNumRooms + 1);
    setRooms(prevRooms => [
      ...prevRooms,
      {
        roomtype: '',
        images: [],
        benefit: '',
        sleep: '',
        one_night_price: null,
        tax_charges: null,
        total_room: null,
        is_primary: false,
        room_list: [{
          roomnumber: '',
          booking: [{
            booking_date: '',
            checkin_time: '',
            checkout_time: '',
            checkin_date: '',
            checkout_date: '',
           
          }]
        }]
      }
    ]);
  };

  const handleRoomTypeChange = (index, value) => {
    setRooms(prevRooms => {
      const updatedRooms = [...prevRooms];
      console.log("room",updatedRooms)
      updatedRooms[index].roomtype = value;
      return updatedRooms;
    });
  };

  const handleBenefitChange = (index, value) => {
    setRooms(prevRooms => {
      const updatedRooms = [...prevRooms];
      updatedRooms[index].benefit = value;
      return updatedRooms;
    });
  };

  // const handleSubmit = () => {
  //   console.log(rooms); // Handle submission of all rooms data
  //   dispatch(setRoomData(rooms));
  // };

  const handleSubmit = () => {
    // Check if all rooms have at least one image
    const isValid = rooms.every(room => room.images.length > 0);
  
    if (!isValid) {
     
      toast.error('Please add at least one image for each room.');
      return; // Stop submission if validation fails
    }
  
    // If validation passes, proceed with submitting the form
    console.log(rooms); // Handle submission of all rooms data
    dispatch(setRoomData(rooms));
  };
  

  const handleRoomNumberChange = (roomIndex, bookingIndex, value) => {
    setRooms(prevRooms => {
      const updatedRooms = [...prevRooms];
      updatedRooms[roomIndex].room_list[bookingIndex].roomnumber = value;
      return updatedRooms;
    });
  };


  const handleAddRoomNumber = (index) => {

    setRooms(prevRooms => {
      const updatedRooms = [...prevRooms];
      const roomListLength = updatedRooms[index].room_list.length;
      
      // Check if a room number input box already exists
      if (roomListLength === 0 || updatedRooms[index].room_list[roomListLength - 1].roomnumber !== '') {
        updatedRooms[index].room_list.push({
          roomnumber: '',
          booking: [{
            booking_date: '',
            checkin_time: '',
            checkout_time: '',
            checkin_date: '',
            checkout_date: '',
           
          }]
        });
      }
      
      return updatedRooms;
    });
  };

  // const handleSaveImages = (images) => {
  //   if (Array.isArray(images)) {
  //     setRooms(prevRooms => {
  //       return prevRooms.map(room => ({
  //         ...room,
  //         images: images.map(image => ({ url: image, mediaType: "image" }))
  //       }));
  //     });
  //   } else {
  //     console.error("Images should be an array.");
  //   }
  // };
  
  // const handleSaveImages = (index, images) => {
  //   console.log("imageshghvjhbhbssss",images)
  //   if (Array.isArray(images)) {
  //     console.log("imagesssss")
  //     setRooms(prevRooms => {
  //       const updatedRooms = [...prevRooms];
  //       updatedRooms[index].images = images.map(image => ({ url: image, mediaType: "image" }));
  //       return updatedRooms;
  //     });
  //   } else {
  //     console.error("Images should be an array.");
  //   }
  // };
  
  const handleSaveImages = (index, images) => {
    console.log("Received images:", images);
    setRooms(prevRooms => {
      const updatedRooms = [...prevRooms];
      if (updatedRooms[index]) { // Check if the room object at index exists
        updatedRooms[index].images = images.map(image => ({ url: image, mediaType: "image" }));
      } else {
        console.error(`Room at index ${index} does not exist.`);
      }
      return updatedRooms;
    });
  };
  
  
  return (
    <>
      <div>
        {rooms.map((room, index) => (
          <div key={index} className="row x-gap-20 y-gap-20 border p-3 mb-3 ">
            <div className="col-lg-4 col-md-6 border p-3 mb-3">
              <div className="form-input ">
                <select
                  value={room.roomType}
                  onChange={e => handleRoomTypeChange(index, e.target.value)}
                  required
                >
                  <option value="">Select Room Type</option>
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Suite">Suite</option>
                </select>
                <label className="lh-1 text-16 text-light-1">Room Type</label>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 border p-3 mb-3">
              <div className="form-input ">
                <select
                  value={room.benefit}
                  onChange={e => handleBenefitChange(index, e.target.value)}
                  required
                >
                  <option value="">Select Benefits</option>
                  <option value="Wi-Fi">Wi-Fi</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Gym Access">Gym Access</option>
                </select>
                <label className="lh-1 text-16 text-light-1">Benefits</label>
              </div>
            </div>
            {/* <GalleryUploader onSaveImages={images => setRooms(prevRooms => {
              const updatedRooms = [...prevRooms];
              updatedRooms[index].images = images;
              return updatedRooms;
            })} /> */}

              {/* <GalleryUploader onSaveImages={handleSaveImages} /> */}
              {/* <GalleryUploader onSaveImages={images => handleSaveImages(index, images)} /> */}
              {/* <GalleryUploader   key={index} 
              onSaveImages={(images) => handleSaveImages(index, images)} 
              numRooms={numRooms} // Pass the number of rooms prop
               /> */}
               <GalleryUploader onSaveImages={handleSaveImages} numRooms={numRooms} galleryKey={index} />


           
            <div className="col-lg-4 col-md-6">
              <div className="form-input">
                <input type="text" value={room.sleep}
                  onChange={(e) => handleRoomFieldChange(index, 'sleep', e.target.value)}
                  required />
                <label className="lh-1 text-16 text-light-1">Sleep</label>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="form-input">
                <input type="number" value={room.one_night_price}
                     onChange={(e) => handleRoomFieldChange(index, 'one_night_price', parseFloat(e.target.value))}
                  // onChange={(e) => handleRoomFieldChange(index, 'oneNightPrice', e.target.value)}
                  required />
                <label className="lh-1 text-16 text-light-1">Price (Per Night)</label>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="form-input">
                <input type="number" value={room.tax_charges}
                  onChange={(e) => handleRoomFieldChange(index, 'tax_charges', e.target.value)}
                  required />
                <label className="lh-1 text-16 text-light-1">Tax Charges</label>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="form-input">
                <input type="number" value={room.total_room}
                  onChange={(e) => handleRoomFieldChange(index, 'total_room', e.target.value)}
                  required />
                <label className="lh-1 text-16 text-light-1">Total Rooms</label>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="form-check">
                <input type="checkbox" id={`isPrimary${index}`}
                  checked={room.is_primary}
                  onChange={(e) => handlePrimaryCheckboxChange(index, e.target.checked)} />
                <label htmlFor={`isPrimary${index}`} className="ml-2">Primary Room</label>
              </div>
            </div>
            <div>
              {room.room_list.map((booking, bookingIndex) => (
                <div key={bookingIndex} className="row x-gap-20 y-gap-20 border p-3 mb-3 ">
                  <div className="col-lg-4 col-md-6">
                    <div className="form-input">
                      <input type="Number" value={booking.roomnumber}
                        onChange={(e) => handleRoomNumberChange(index, bookingIndex, e.target.value)}
                        required />
                      <label className="lh-1 text-16 text-light-1">Room Number</label>
                    </div>
                  </div>
                </div>
              ))}
              <button className="btn btn-primary" onClick={() => handleAddRoomNumber(index)}>Add Room Number</button>
            </div>
            <div className="col-12">
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary" onClick={handleAddRoom}>Add Hotel Room</button>
      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default HotelRoom;

