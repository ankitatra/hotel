import { Link } from "react-router-dom";

const AddBanner = () => {
  const addContent = [
    {
      id: 1,
      img: "https://cdna.artstation.com/p/assets/images/images/040/826/946/large/ana-beltran-hollywood-tower-hotel-beacon-of-magic.jpg?1629984535",
      title: (
        <>
          Things To Do On
          <br /> Your Trip
        </>
      ),
      meta: "",
      routerPath: "/",
      delayAnimation: "0",
    },
    {
      id: 2,
      img: "https://waybird.imgix.net/lodge_images/images/000/094/826/original/capture.png?w=1420&h=946&crop=center%20center&fit=min&dpr=1&q=50&auto=format",
      title: "Up to 70% Discount!",
      meta: "Enjoy Summer Deals",
      routerPath: "/",
      delayAnimation: "100",
    },
  ];

  return (
    <>
      {addContent.map((item) => (
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.delayAnimation}
          key={item.id}
        >
          <div className="ctaCard -type-1 rounded-4 ">
            <div className="ctaCard__image ratio ratio-63:55">
              <img
                className="img-ratio js-lazy loaded"
                src={item.img}
                alt="image"
              />
            </div>
            <div className="ctaCard__content py-70 px-70 lg:py-30 lg:px-30">
              {item.meta ? (
                <>
                  <div className="text-15 fw-500 text-white mb-10">
                    Enjoy Summer Deals
                  </div>
                </>
              ) : (
                ""
              )}

              <h4 className="text-40 lg:text-26 text-white">{item.title}</h4>
              <div className="d-inline-block mt-30">
                <Link
                  to={item.routerPath}
                  className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddBanner;
