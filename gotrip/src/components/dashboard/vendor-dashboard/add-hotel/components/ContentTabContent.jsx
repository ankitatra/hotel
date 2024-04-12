import React, { useEffect, useState } from "react";
import GalleryUploader from "./content/GalleryUploader";
import { useDispatch } from "react-redux";
import { sendCombinedData, setContentData } from "@/store/hotel/action";
import ContentGalleryUploader from "./content/ContentGallaery";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const ContentTabContent = () => {
  const dispatch = useDispatch();
  const [numRooms, setNumRooms] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    overview: "",
    rating: "",
    images: [],
    location: "",
    // realAddress: "",
    mapLatitude: "",
    mapLongitude: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  });


  const [states, setStates] = useState([]);
  
  // Fetch states from the API endpoint when the component mounts
  useEffect(() => {
    axios.get("https://good-jade-chinchilla-hem.cyclic.app/api/state/states")
      .then(response => {
        setStates(response.data);
      })
      .catch(error => {
        console.error('Error fetching states:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSaveImages = (images) => {
  //   console.log(images)
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     images: images,
  //   }));
  // };
  const handleSaveImages = (images) => {
    console.log("here",images)
    if (Array.isArray(images)) {
      setFormData(prevData => ({
        ...prevData,
        images: images.map(image => ({ url: image, mediaType: "image" }))
      }));
    } else {
      console.error("Images should be an array.");
    }
  };

  // const handleSaveImages = (index, images) => {
  //   console.log("Received images:", images);
  //   setRooms(prevRooms => {
  //     const updatedRooms = [...prevRooms];
  //     if (updatedRooms[index]) { // Check if the room object at index exists
  //       updatedRooms[index].images = images.map(image => ({ url: image, mediaType: "image" }));
  //     } else {
  //       console.error(`Room at index ${index} does not exist.`);
  //     }
  //     return updatedRooms;
  //   });
  // };
    
  
  


  const handleSaveChanges = () => {
    console.log("Form Data:", formData);
    if(formData.images.length>=4){
      dispatch(setContentData(formData));
    }else{
      toast.error('add atleast 4 images');
    }
    
   
    // Handle saving data to backend or perform any other actions
  };

  return (
    <div className="col-xl-10">
      <div className="text-18 fw-500 mb-10">Hotel Content</div>

      <div className="row x-gap-20 y-gap-20">
        <div className="col-12">
          <div className="form-input">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label className="lh-1 text-16 text-light-1">Hotel Name</label>
          </div>
        </div>

        <div className="col-12">
          <div className="form-input">
            <textarea
              name="overview"
              value={formData.overview}
              onChange={handleInputChange}
              required
              rows={5}
            />
            <label className="lh-1 text-16 text-light-1">Hotel Overview</label>
          </div>
        </div>
{/* 
        <div className="col-12">
          <div className="form-input">
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              required
            />
            <label className="lh-1 text-16 text-light-1">Rating</label>
          </div>
        </div> */}

<div className="col-12">
  <div className="form-input">
    {/* <label className="lh-1 text-16 text-light-1" style={{ marginBottom: '30px' }}>Rating</label> */}
    <select
      name="rating"
      value={formData.rating}
      onChange={handleInputChange}
      required
      style={{
        border: '1px solid #ced4da', // Add border
        borderRadius: '4px', // Add border radius
        padding: '10px', // Add padding
        width: '100%' // Set width to 100%
      }}
    >
      <option value="">Select Rating</option>
      {[1, 2, 3, 4, 5].map((rating, index) => (
        <option key={index} value={rating}>{rating}</option>
      ))}
    </select>
  </div>
</div>


        {/* Location input fields */}
        <div className="col-12">
          <div className="form-input">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
            <label className="lh-1 text-16 text-light-1">Location</label>
          </div>
        </div>
        {/* <div className="col-12">
          <div className="form-input">
            <input
              type="text"
              name="realAddress"
              value={formData.realAddress}
              onChange={handleInputChange}
              required
            />
            <label className="lh-1 text-16 text-light-1">Real Address</label>
          </div>
        </div> */}
        <div className="col-12">
          <div className="form-input">
            <input
              type="text"
              name="mapLatitude"
              value={formData.mapLatitude}
              onChange={handleInputChange}
              required
            />
            <label className="lh-1 text-16 text-light-1">Map Latitude</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-input">
            <input
              type="text"
              name="mapLongitude"
              value={formData.mapLongitude}
              onChange={handleInputChange}
              required
            />
            <label className="lh-1 text-16 text-light-1">Map Longitude</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-input">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
            <label className="lh-1 text-16 text-light-1">City</label>
          </div>
        </div>

{/* 
        <div className="col-12">
          <div className="form-input">
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
            <label className="lh-1 text-16 text-light-1">State</label>
          </div>
        </div> */}

        <div className="col-12">
        <div className="form-input">
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
            style={{
              border: '1px solid #ced4da', // Add border
              borderRadius: '4px', // Add border radius
              padding: '10px', // Add padding
              width: '100%' // Set width to 100%
            }}
          >
            <option value="">Select State</option>
            {states?.map((state) => (
              <option key={state.id} value={state.country}>{state.country}</option>
            ))}
          </select>
          {/* <label className="lh-1 text-16 text-light-1">State</label> */}
        </div>
      </div>
        <div className="col-12">
          <div className="form-input">
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
            <label className="lh-1 text-16 text-light-1">Country</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-input">
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
            />
            <label className="lh-1 text-16 text-light-1">Postal Code</label>
          </div>
        </div>
      </div>

      <div className="mt-30">
        <div className="fw-500">Hotel Images</div>
       
        <ContentGalleryUploader onSaveImagescontent={handleSaveImages}  />
        {/* <GalleryUploader onSaveImages={handleSaveImages} numRooms={numRooms} galleryKey={index} /> */}
      </div>

      <div className="d-inline-block pt-30">
        <button
          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          onClick={handleSaveChanges}
        >
          Save Changes <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </div>
  );
};

export default ContentTabContent;
