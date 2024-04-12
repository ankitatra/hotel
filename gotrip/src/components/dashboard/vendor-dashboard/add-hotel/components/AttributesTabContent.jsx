import { sendCombinedData, setAttributesData } from "@/store/hotel/action";
import { useEffect, useState } from "react";


import { useDispatch, useSelector } from 'react-redux';
import FacilitySelector from "./Subfacility";
import AttributesTab from "./Subfacility";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nearby from "./Nearby";
import HelpfulFacts from "./Helpfuleffects";
import HotelReviews from "./Review";
import PaymentCancellationPolicy from "./Paymentcancellation";

const AttributesTabContent = () => {
  const dispatch = useDispatch();

  const [reviewsData, setReviewsData] = useState([]);

  const handleSaveReviewsData = (data) => {
    setReviewsData(data);
    console.log("Reviews Data:", data);
    // Perform any further actions with the reviews data
  };

  const [sections, setSections] = useState([
    { category: 'Nearby', locations: [{ name: '', distance: '' }] },
    { category: 'Closest airports', locations: [{ name: '', distance: '' }] },
    { category: 'Restaurants & cafes', locations: [{ name: '', distance: '' }] },
    { category: 'Top attractions', locations: [{ name: '', distance: '' }] },
  ]);

  const handleSectionsChange = (updatedSections) => {
    setSections(updatedSections);
    console.log("Updated Sections:", updatedSections);
  };


  const [helpfuleffects, setHelpfuleffects] = useState([
    { category: 'check-in/Check-out', locations: [{ name: '', distance: '' }] },
    { category: 'Getting around', locations: [{ name: '', distance: '' }] },
    { category: 'Extras', locations: [{ name: '', distance: '' }] },
    { category: 'Parking', locations: [{ name: '', distance: '' }] },
    { category: "The property", locations: [{ name: '', distance: '' }] }
  ]);

  const handlehelpfuleffects = (updatedSections) => {
    setHelpfuleffects(updatedSections);
    console.log("Updated Sections:", updatedSections);
    // You can perform any further actions with the updated sections here, such as saving to a database
  };
  
  const [policyData, setPolicyData] = useState({
    payAtHotel: false,
    payAtDay: '',
    freeCancellationBeforeDay: ''
  });

  useEffect(() => {
    console.log("Policy Data Updated:", policyData);
    // You can perform any further actions with the updated policyData here
  }, [policyData]);
  const [data, setData] = useState({
    Property_highlights:[],
    hotel_subfacility:[],
    style:[],
    deals:[],
    hotel_facility:[],
    amenities:[],
   
  });

  const [selectedData, setSelectedData] = useState([]);

  // Handler to receive selected data from AttributesTab component
  const handleSelectedData = (data) => {
    setSelectedData(data);
  };

  // Handler for submitting the selected data
  const handleSubmit = () => {
    console.log('Selected Data Submitted:', selectedData);
    // You can perform further actions here, such as sending the data to the server
  };
  const combinedData = useSelector((state) => state.hotel.combinedData);

  console.log("bjsdhbjsdhbcjhsdbcjhsdcdsj",combinedData)
  const { contentData, room, faq, attributesData } = combinedData;

  console.log("roommmmmmmmmmmmmmmmmmmmmmmmm",room)
  const [formData, setFormData] = useState({
    room,
    faq,
    name:contentData?.name,
    hotel_overview:contentData?.overview,
    rating:contentData?.rating,
    images:contentData?.images,
    location:contentData?.realAddress,
    geoLocation: {
      latitude: contentData?.mapLatitude,
      longitude: contentData?.mapLongitude
    },
    hoteladdress: [{
      country: contentData?.country,
      state: contentData?.state,
      city: contentData?.city,
      other: null,
      postal_code: contentData?.postalCode,
    }],
    deals:data.deals,
    amenities:data.amenities,
    style:data.style,
    hotel_facility:data.hotel_facility,
    Property_highlights:data.Property_highlights,
    helpfulFacts:helpfuleffects,
    nearby:sections,
    review:reviewsData,
    paymentcancalation:policyData,
    vendor_id:localStorage.getItem("vendorID")
  });
  console.log("hfbjhfb",formData)
  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      deals: data.deals,
      amenities: data.amenities,
      style: data.style,
      hotel_facility: data.hotel_facility,
      hotel_subfacility:selectedData,
      Property_highlights: data.Property_highlights,
      helpfulFacts:helpfuleffects,
      nearby:sections,
      review:reviewsData,
      paymentcancalation:policyData,
      vendor_id:localStorage.getItem("vendorID")
    }));
  }, [data,selectedData,helpfuleffects,policyData,sections]);



  // const handleproperty = (name, isChecked) => {
  //   if (isChecked) {
  //     setData((prevData) => ({
  //       ...prevData,
  //       Property_highlights: [...prevData.Property_highlights, name],
  //     }));
  //   } else {
  //     setData((prevData) => ({
  //       ...prevData,
  //       Property_highlights: prevData.Property_highlights.filter((facility) => facility !== name),
  //     }));
  //   }
  // };
  const handleproperty = (name, isChecked) => {
    if (isChecked) {
      setData((prevData) => ({
        ...prevData,
        Property_highlights: [
          ...prevData.Property_highlights,
          { name: name, icon: "https://cdn-icons-png.flaticon.com/512/1160/1160358.png" }
        ],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        Property_highlights: prevData.Property_highlights.filter((facility) => facility.name !== name),
      }));
    }
  };
  
  const handleDeels = (name, isChecked) => {
    if (isChecked) {
      setData((prevData) => ({
        ...prevData,
        deals: [...prevData.deals, name],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        deals: prevData.deals.filter((facility) => facility !== name),
      }));
    }
  };

  const handleFacility = (name, isChecked) => {
    if (isChecked) {
      setData((prevData) => ({
        ...prevData,
        hotel_facility: [...prevData.hotel_facility, name],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        hotel_facility: prevData.hotel_facility.filter((facility) => facility !== name),
      }));
    }
  };

  const handleAmenities = (name, isChecked) => {
    if (isChecked) {
      setData((prevData) => ({
        ...prevData,
        amenities: [...prevData. amenities, name],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        amenities: prevData.amenities.filter((facility) => facility !== name),
      }));
    }
  };

  const handlestyle = (name, isChecked) => {
    if (isChecked) {
      setData((prevData) => ({
        ...prevData,
        style: [...prevData.style, name],
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        style: prevData.style.filter((facility) => facility !== name),
      }));
    }
  };

 const handleSaveChanges = async() => {
    console.log("datamyabc",selectedData)
   
     
    console.log("Selected Facilities:", formData);
    dispatch(setAttributesData(data));
    console.log("formdata",formData)
    // dispatch(sendCombinedData(formData))
    const response = await dispatch(sendCombinedData(formData));
    console.log("hii my name is ankita",response)
    if (response) {
      // Show a toast message indicating success
      toast.success('Data successfully saved!');

      // Additional logic if needed
    } else {
      toast.error('something went wrong!');
      // Handle the response if it's not successful
      // (This block might not be necessary depending on your use case)
    }
  };
  
  return (
    <div className="col-xl-9 col-lg-11">
      
      <div className="row x-gap-100 y-gap-15 pt-30">
        <div className="col-12">
          <div className="text-18 fw-500">Property_highlights</div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox"  name="Front desk [24-hour]"
                  onChange={(e) =>
                    handleproperty (e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Front desk [24-hour]</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox" name="Airport transfer"
                  onChange={(e) =>
                    handleproperty (e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Airport transfer</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
              <input type="checkbox" name="In London City Centre"
                  onChange={(e) =>
                    handleproperty (e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">In London City Centre</div>
              </div>
            </div>
           </div>
        </div>    
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox"   name="Premium TV channels"   onChange={(e) =>
                    handleproperty (e.target.name, e.target.checked)
                  }  />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Premium TV channels</div>
              </div>
            </div>
          </div>   
        </div>    
      </div>

      <div className="row x-gap-100 y-gap-15 pt-30">
        <div className="col-12">
          <div className="text-18 fw-500">Deels</div>
        </div>
        {/* End .col-12 */}

        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox"  name="Free cancellation"
                  onChange={(e) =>
                    handleDeels(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Free cancellation</div>
              </div>
            </div>
            {/* End .col-12 */}

           



      



            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox"  name="Reserve now, pay at stay"
                  onChange={(e) =>
                    handleDeels(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Reserve now, pay at stay</div>
              </div>
            </div>
            {/* End .col-12 */}

           


            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox"  name="Properties with special offers"
                  onChange={(e) =>
                    handleDeels(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Properties with special offers</div>
              </div>
            </div>
            {/* End .col-12 */}

      
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
        
        {/* End .col */}

      
      </div>

      <div className="row x-gap-100 y-gap-15">
        <div className="col-12">
          <div className="text-18 fw-500">Hotel_facility</div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Breakfast Included" onChange={(e) =>
                    handleFacility(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Breakfast Included</div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Romantic"onChange={(e) =>
                    handleFacility(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Romantic</div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Parking" onChange={(e) =>
                   handleFacility(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Parking</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox"  name="WiFi Included"
                  onChange={(e) =>
                    handleFacility(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">WiFi Included</div>
              </div>
            </div>
            {/* End .col-12 */}

            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox"  name="Non-smoking rooms"
                  onChange={(e) =>
                    handleFacility(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Non-smoking rooms</div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox"  name="Safety & security"
                  onChange={(e) =>
                    handleFacility(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Safety & security</div>
              </div>
            </div>
          </div>
        </div> 
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox"  name="Kitchen"
                  onChange={(e) =>
                    handleFacility(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Kitchen</div>
              </div>
            </div>
            {/* End .col-12 */}

            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox"  name="Living Area"
                  onChange={(e) =>
                    handleFacility(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Living Area</div>
              </div>
            </div>
            {/* End .col-12 */}

            
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox"  name="5 Star"
                  onChange={(e) =>
                    handleFacility(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">5 Star</div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox"  name="Airport Transfer"
                  onChange={(e) =>
                    handleFacility(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Airport Transfer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AttributesTab onSelect={handleSelectedData} />
      <button onClick={handleSubmit}>Submit</button>
      <h1>suroundings</h1>
      <Nearby sections={sections} onSectionsChange={handleSectionsChange} />
      <h1>helpful effects</h1>
      <HelpfulFacts sections={helpfuleffects} onSectionsChange={handlehelpfuleffects} />
     
      <HotelReviews onSaveReviewsData={handleSaveReviewsData} />
  
      <PaymentCancellationPolicy
        policyData={policyData}
        onPolicyDataChange={setPolicyData}
      />
      <div className="row x-gap-100 y-gap-15 pt-30">
        <div className="col-12">
          <div className="text-18 fw-500">Ammenties</div>
        </div>
        {/* End .col-12 */}

        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox" name="Home Theatre" onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Home Theatre</div>
              </div>
            </div>
            {/* End .col-12 */}

            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Interconnected Room" onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Interconnected Room</div>
              </div>
            </div>



            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Spa Tub"onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Spa Tub</div>
              </div>
            </div>


            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Heater"onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Heater</div>
              </div>
            </div>



            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox" name="Smoking Room" onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Smoking Room</div>
              </div>
            </div>
            {/* End .col-12 */}

            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Kitchenette"onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Kitchenette</div>
              </div>
            </div>


            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Fireplace" onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Fireplace</div>
              </div>
            </div>


            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox" name="Private Pool" onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Private Pool</div>
              </div>
            </div>
            {/* End .col-12 */}

            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Bathtub" onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Bathtub</div>
              </div>
            </div>



            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Jacuzzi" onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Jacuzzi</div>
              </div>
            </div>
            {/* End .col-12 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox" name="Balcony" onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Balcony</div>
              </div>
            </div>
            {/* End .col-12 */}

            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Cook & Butler Service" onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Cook & Butler Service</div>
              </div>
            </div>


            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Living Area" onChange={(e) =>
                    handleAmenities(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Living Area</div>
              </div>
            </div>
            {/* End .col-12 */}

         
          </div>
          {/* End .row */}
        </div>
        {/* End .col */}

      
      </div>

      <div className="row x-gap-100 y-gap-15 pt-30">
        <div className="col-12">
          <div className="text-18 fw-500">Styles</div>
        </div>
       

        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox" name="Budget" onChange={(e) =>
                    handlestyle(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Budget</div>
              </div>
            </div>
      

            <div className="col-12">
              <div className="d-flex items-center form-checkbox">
                <input type="checkbox" name="Mid-range"  onChange={(e) =>
                    handlestyle(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Mid-range</div>
              </div>
            </div>



      



          </div>
        
        </div>
      
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox" name="Luxury"  onChange={(e) =>
                    handlestyle(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Luxury</div>
              </div>
            </div>
        
          </div>
     
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox" name="Family-friendly" onChange={(e) =>
                    handlestyle(e.target.name, e.target.checked)
                  } />
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Family-friendly</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="row y-gap-15">
            <div className="col-12">
              <div className="d-flex items-center form-checkbox ">
                <input type="checkbox" name="Business"  onChange={(e) =>
                    handlestyle(e.target.name, e.target.checked)
                  }/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
                <div className="text-15 lh-11 ml-10">Business</div>
              </div>
            </div>       
          </div>   
        </div>
      </div>

      <div className="d-inline-block mt-30">
        <button
          type="submit"
          onClick={handleSaveChanges}
          className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
        >
          Save Changes <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </div>
  );
};

export default AttributesTabContent;


