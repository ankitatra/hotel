import { Link, useLocation, useSearchParams } from "react-router-dom";
import Slider from "react-slick";
import { hotelsData } from "../../../data/hotels";
import isTextMatched from "../../../utils/isTextMatched";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { gethotel } from "@/store/hotel/action";

// const HotelProperties = () => {
//   var itemSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   function ArrowSlick(props) {
//     let className =
//       props.type === "next"
//         ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
//         : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
//     className += " arrow";
//     const char =
//       props.type === "next" ? (
//         <>
//           <i className="icon icon-chevron-right text-12"></i>
//         </>
//       ) : (
//         <>
//           <span className="icon icon-chevron-left text-12"></span>
//         </>
//       );
//     return (
//       <button className={className} onClick={props.onClick}>
//         {char}
//       </button>
//     );
//   }

//   const dispatch = useDispatch();
//   const location = useLocation();
//   const hotels = useSelector((store) => store.hotel);
  
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });
//  const [flag,setflag]=useState()
  
//   useEffect(() => {
//     const minPriceParam = searchParams.get('minPrice');
//     const maxPriceParam = searchParams.get('maxPrice');
    
//     if (minPriceParam !== null && maxPriceParam !== null) {
//       const minPrice = parseInt(minPriceParam);
//       const maxPrice = parseInt(maxPriceParam);
//       setPriceRange({ min: minPrice, max: maxPrice });
//     }
//   }, [searchParams]);

//   useEffect(() => {
//     if (location || hotels.length === 0) {
//       const deals = searchParams.getAll('deals');
//       const hotel_facility = searchParams.getAll('hotel_facility');
//       const style = searchParams.getAll('style');
//       const amenities = searchParams.getAll('amenities');
//       const rating = searchParams.getAll('rating');
//       const queryParams = {
//         deals,
//         hotel_facility,
//         style,
//         amenities,
//         rating,   
//         minPrice: priceRange.min,
//         maxPrice: priceRange.max,
//         state:localStorage.getItem("state")
//       };
//       console.log("location",queryParams);
 
//         dispatch(gethotel(queryParams));
      
      
//     }
//   }, [dispatch, location.search, hotels.length, searchParams.toString(), priceRange.min, priceRange.max,localStorage.getItem("state")]);

 

const HotelProperties = () => {
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function ArrowSlick(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  const dispatch = useDispatch();
  const location = useLocation();
  const hotels = useSelector((store) => store.hotel);
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
    // Always set the state parameter in the URL
    setSearchParams(new URLSearchParams({ state: localStorage.getItem("state") }));

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
        state: localStorage.getItem("state")
      };
      dispatch(gethotel(queryParams));
    }
  }, [dispatch, location.search, hotels.length, searchParams.toString(), priceRange.min, priceRange.max, localStorage.getItem("state")]);

  // Render only if there are query parameters present
  if (!searchParams.toString()) {
    return null;
  }

    return (
      <>
        {hotels.hotels && hotels.hotels.length > 0 ? (
          hotels.hotels.slice(0, 9).map((item) => (
            <div
              className="col-lg-4 col-sm-6"
              key={item?.id}
              data-aos="fade"
              data-aos-delay={item.delayAnimation}
            >
              
               
             <Link
              to={`/hotel-single-v2/${item._id}`}
              className="hotelsCard -type-1 hover-inside-slider"
            >
              <div className="hotelsCard__image">
                <div className="cardImage inside-slider">
                  <Slider
                    {...itemSettings}
                    arrows={true}
                    nextArrow={<ArrowSlick type="next" />}
                    prevArrow={<ArrowSlick type="prev" />}
                  >
                    {item?.images?.map((slide, i) => (
                      <div className="cardImage ratio ratio-1:1" key={i}>
                        <div className="cardImage__content ">
                          <img
                            className="rounded-4 col-12 js-lazy"
                            src={slide.url}
                            alt="image"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>
  
                  <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div>
  
                  <div className="cardImage__leftBadge">
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                        isTextMatched(item?.tag, "breakfast included")
                          ? "bg-dark-1 text-white"
                          : ""
                      } ${
                        isTextMatched(item?.tag, "best seller")
                          ? "bg-blue-1 text-white"
                          : ""
                      } ${
                        isTextMatched(item?.tag, "-25% today")
                          ? "bg-brown-1 text-white"
                          : ""
                      } ${
                        isTextMatched(item?.tag, "top rated")
                          ? "bg-yellow-1 text-dark-1"
                          : ""
                      }`}
                    >
                      {item?.tag}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hotelsCard__content mt-10">
                <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                  <span>{item?.name}</span>
                </h4>
                <p className="text-light-1 lh-14 text-14 mt-5">
                  {item?.location}
                </p>
                <div className="d-flex items-center mt-20">
                  <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                    {item?.rating}
                  </div>
                  <div className="text-14 text-dark-1 fw-500 ml-10">
                    Exceptional
                  </div>
                  <div className="text-14 text-light-1 ml-10">
                    {item?.numberOfReviews} reviews
                  </div>
                </div>
                {item?.room?.map((slide, i) =>
                  slide.is_primary ? (
                    <div className="mt-5" key={i}>
                      <div className="fw-500">
                        Starting from{" "}
                        <span className="text-blue-1">
                          Rs. {slide?.one_night_price}
                        </span>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            </Link> 


  
  
              
            </div>
          ))
        ) : (
          <div>..loading</div>
        )}
      </>
    );
        }
     
      






export default HotelProperties;
