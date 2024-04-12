const Surroundings = ({hotel}) => {
  console.log(".................",hotel.nearby)
 

  return (
    <>
      {hotel.nearby.map((item) => (
        <div className="col-lg-4 col-md-6 " key={item._id}>
          {/* {item?.loactions?.map((single) => ( */}
            <div className="mb-40 md:mb-30" key={item._id}>
              <div className="d-flex items-center mb-20">
                <i className="icon-nearby text-20 mr-10"></i>
                <div className="text-16 fw-500">{item.category}</div>
              </div>

              <div className="row y-gap-20 x-gap-0 pt-10">
                {item?.locations?.map((val, i) => (
                  <div className="col-12 border-top-light" key={i}>
                    <div className="row items-center justify-between">
                      <div className="col-auto">
                        <div className="text-15">{val.name}</div>
                      </div>

                      <div className="col-auto">
                        <div className="text-15 text-right">
                          {val.distance} km
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          {/* ))} */}
        </div>
      ))}
    </>
  );
};

export default Surroundings;


