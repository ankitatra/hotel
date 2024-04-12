import { hotelsData } from "../../../data/hotels";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { gethotel } from "../../../store/hotel/action";


  // const dispatch=useDispatch()
  // const location=useLocation()
  // const hotels = useSelector(store=>store.hotel);
  // const [searchParams]=useSearchParams()
 
  // useEffect(() => {
  //   if (location || hotels.length === 0) {
  //     const deals = searchParams.getAll("deals");
  //     const hotel_facility = searchParams.getAll("hotel_facility");
  //     const queryParams = {
  //       deals,
  //       hotel_facility
  //     };
  
  //     dispatch(gethotel(queryParams));
  //   }
  // }, [dispatch, location.search, hotels.length,searchParams]);


  // const dispatch = useDispatch();
  // const location = useLocation();
  // const hotels = useSelector((store) => store.hotel);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });

  // useEffect(() => {
  //   if (location || hotels.length === 0) {
  //     const deals = searchParams.getAll('deals');
  //     const hotel_facility = searchParams.getAll('hotel_facility');
  //     const queryParams = {
  //       deals,
  //       hotel_facility,
  //       minPrice: priceRange.min, // Include minPrice in query parameters
  //       maxPrice: priceRange.max, // Include maxPrice in query parameters
  //     };

  //     dispatch(gethotel(queryParams));
  //   }
  // }, [dispatch, location.search, hotels.length, searchParams, priceRange]);

  // const handlePriceRangeChange = (value) => {
  //   setPriceRange(value);
  //   updateSearchParams(value);
  // };

  // const updateSearchParams = (priceRange) => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set('minPrice', priceRange.min);
  //   params.set('maxPrice', priceRange.max);

  //   // Update searchParams with new price range
  //   setSearchParams(params);
  // };
  const HotelProperties = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const hotels = useSelector((store) => store.hotel);
  console.log("myhote",hotels)
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });

  // Parse and update priceRange state based on URL parameters
  useEffect(() => {
    const minPriceParam = searchParams.get('minPrice');
    const maxPriceParam = searchParams.get('maxPrice');
    
    if (minPriceParam !== null && maxPriceParam !== null) {
      const minPrice = parseInt(minPriceParam);
      const maxPrice = parseInt(maxPriceParam);
      setPriceRange({ min: minPrice, max: maxPrice });
    }
  }, [searchParams]);

  useEffect(() => {
    if (location || hotels.length === 0) {
      const deals = searchParams.getAll('deals');
      const hotel_facility = searchParams.getAll('hotel_facility');
      const style = searchParams.getAll('style');
      const amenities = searchParams.getAll('amenities');
      const rating = searchParams.getAll('rating');
      const queryParams = {
        deals,
        hotel_facility,
        style,
        amenities,
        rating,
        minPrice: priceRange.min,
        maxPrice: priceRange.max,
      };
      console.log("location", location.search, queryParams);
      dispatch(gethotel(queryParams));
    }
  }, [dispatch, location.search, hotels.length, searchParams.toString(), priceRange.min, priceRange.max]);

  return (
    <>
      {hotels.hotels && hotels.hotels.length > 0 ?(hotels.hotels.map((item) => (
        <div className="col-12" key={item?._id}>
          <div className="border-top-light pt-30">
            <div className="row x-gap-20 y-gap-20">
              <div className="col-md-auto">
                <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                  <div className="cardImage__content">
                    <div className="cardImage-slider rounded-4  custom_inside-slider">
                      <Swiper
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                      >
                        {item?.images?.map((slide, i) => (
                          <SwiperSlide key={i}>
                            <img
                              className="rounded-4 col-12 js-lazy"
                              src={slide.url}
                              alt="image"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                  {/* End image */}

                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12"></i>
                    </button>
                  </div>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md">
                <h3 className="text-18 lh-16 fw-500">
                  {item?.name}
                  <br className="lg:d-none" /> {item?.location}
                  <div className="d-inline-block ml-10">
             
                   {item?.rating&&[...Array(Math.floor(+(item.rating)))].map((_, i) => (
                      <i key={i} className="icon-star text-10 text-yellow-2"></i>
                  ))} 

                    {/* <i className="icon-star-half text-20 text-yellow-2"></i>
                    <i className="icon-star text-10 text-yellow-2"></i>
                    <i className="icon-star text-10 text-yellow-2"></i>
                    <i className="icon-star text-10 text-yellow-2"></i>
                    <i className="icon-star text-10 text-yellow-2"></i> */}
                  </div>

               
                </h3>

  

                <div className="row x-gap-10 y-gap-10 items-center pt-10">
                  <div className="col-auto">
                    <p className="text-14">{item?.location}</p>
                  </div>

                  <div className="col-auto">
                    <button
                      data-x-click="mapFilter"
                      className="d-block text-14 text-blue-1 underline"
                    >
                      Show on map
                    </button>
                  </div>

                  <div className="col-auto">
                    <div className="size-3 rounded-full bg-light-1"></div>
                  </div>

                  <div className="col-auto">
                    <p className="text-14">2 km to city center</p>
                  </div>
                </div>
                {/* {item?.room?.map((slide, i) => (

               {slide.is_primary&&<div className="text-14 lh-15 mt-20">
          
                  <div className="fw-500">{slide.roomtype}</div>
                  <div className="text-light-1">{slide.benifit?[0]}</div>
           
                </div>}
                     ))} */}
                     {item?.room?.map((slide, i) => (
                        slide.is_primary && (
                          <div className="text-14 lh-15 mt-20" key={i}>
                            <div className="fw-500">{slide.roomtype}</div>
                            <div className="text-light-1">{slide.benifit && slide.benifit[0]}</div>
                          </div>
                        )
                      ))}

                <div className="text-14 text-green-2 lh-15 mt-10">
                  <div className="fw-500">Free cancellation</div>
                  <div className="">
                    You can cancel later, so lock in this great price today.
                  </div>
                </div>

                <div className="row x-gap-10 y-gap-10 pt-20">
                  {/* <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      Breakfast
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      WiFi
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      Spa
                    </div>
                  </div> */}

              

                  {item?.hotel_facility?.map((slide, i) => (
                    <div key={i} className="col-auto">
                    <div className="border-light rounded-100 py-5 px-20 text-14 lh-14">
                      {slide}
                    </div>
                  </div>
                  ))}
                </div>
                
               
              </div>
              {/* End .col-md */}

              <div className="col-md-auto text-right md:text-left">
                <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                  <div className="col-auto">
                    <div className="text-14 lh-14 fw-500">Exceptional</div>
                    <div className="text-14 lh-14 text-light-1">
                      3,014 reviews
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
                      {item?.rating}
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="text-14 text-light-1 mt-50 md:mt-20">
                    8 nights, 2 adult
                  </div>
                  {item?.room?.map((slide, i) => (
                        slide.is_primary && (
                          // <div className="text-14 lh-15 mt-20" key={i}>
                          //   <div className="fw-500">{slide.roomtype}</div>
                          //   <div className="text-light-1">{slide.benifit && slide.benifit[0]}</div>
                          // </div>
                          <div className="text-22 lh-12 fw-600 mt-5">
                          US${slide?.one_night_price}
                        </div>
                        )
                      ))}
                  {/* <div className="text-22 lh-12 fw-600 mt-5">
                    US${item?.one_night_price}
                  </div> */}
                   {item?.room?.map((slide, i) => (
                        slide.is_primary && (
                  <div className="text-14 text-light-1 mt-5">
                    +US${slide?.tax_charges} taxes and charges
                  </div>)))}

                  <Link
                    to={`/hotel-single-v1/${item.id}`}
                    className="button -md -dark-1 bg-blue-1 text-white mt-24"
                  >
                    See Availability{" "}
                    <div className="icon-arrow-top-right ml-15"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default HotelProperties;
