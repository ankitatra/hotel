import ReviewGallery from "./ReviewGallery";

const DetailsReview2 = ({ hotel }) => {
  console.log("hotel review", hotel.review);
  return (
    <div className="row y-gap-40">
      {hotel?.review.map((item, i) => (
        <div className="col-lg-12" key={i}>
          <div className="row x-gap-20 y-gap-20 items-center">
            <div className="col-auto">
              {/* <img src={item.profile} alt="image" /> */}
              <img 
              src={item.profile} 
              alt="Profile Image" 
              style={{
                width: '50px',  // Adjust the width as needed
                height: '50px', // Adjust the height as needed
                borderRadius: '50%' // To make it round
              }} 
              />
            </div>
            <div className="col-auto">
              <div className="fw-500 lh-15">{item.username}</div>
              <div className="text-14 text-light-1 lh-15">March 2022</div>
            </div>
          </div>

          {/* <h5 className="fw-500 text-blue-1 mt-20">9.2 Superb</h5> */}
          <p className="text-15 text-dark-1 mt-10">{item.review}</p>

          <div className="d-flex x-gap-30 items-center pt-20">
            <button className="d-flex items-center text-blue-1">
              <i className="icon-like text-16 mr-10" />
              Helpful
            </button>
            <button className="d-flex items-center text-light-1">
              <i className="icon-dislike text-16 mr-10" />
              Not helpful
            </button>
          </div>
        </div>
      ))}

      {/* <div className="col-auto">
        <a href="#" className="button -md -outline-blue-1 text-blue-1">
          Show all 116 reviews <div className="icon-arrow-top-right ml-15"></div>
        </a>
      </div> */}
    </div>
  );
};

export default DetailsReview2;
