
const Faq = ({ hotel }) => {
  // Check if hotel object exists and if it contains FAQ data
  const faqContent = hotel?.faq || [];

  return (
    <>
      {faqContent.map((item, index) => (
        <div className="col-12" key={item._id}>
          <div className="accordion__item px-20 py-20 border-light rounded-4">
            <div
              className="accordion__button d-flex items-center"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
            >
              <div className="accordion__icon size-40 flex-center bg-light-2 rounded-full mr-20">
                <i className="icon-plus" />
                <i className="icon-minus" />
              </div>
              <div className="button text-dark-1 text-start">{item.question}</div>
            </div>
            {/* End accordion button */}

            <div
              className="accordion-collapse collapse"
              id={`collapse-${index}`}
              data-bs-parent="#Faq1"
            >
              <div className="pt-15 pl-60">
                <p className="text-15">{item.answer}</p>
              </div>
            </div>
            {/* End accordion content */}
          </div>
        </div>
      ))}
    </>
  );
};

export default Faq;



