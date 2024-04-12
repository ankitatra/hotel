import { useState, useEffect } from "react";
import Pagination from "../../common/Pagination";
import ActionsButton from "../components/ActionsButton";

const BookingTable = () => {
  const vendorId=localStorage.getItem("vendorID")
 const [tours,setTours] =useState()
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };


  const tabItems = [
    "All Tours",
    "Completed",
    "Processing",
    "Confirmed",
    "Cancelled",
    "Paid",
    "Unpaid",
    "Partial Payment",
  ];
  useEffect(() => {
    const fetchTours = async () => {
      try {
       
        const response = await fetch(`https://good-jade-chinchilla-hem.cyclic.app/api/tours/${vendorId}`);
        const data = await response.json();
        setTours(data)
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <div className="tabs -underline-2 js-tabs">
        <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
          {tabItems.map((item, index) => (
            <div className="col-auto" key={index}>
              <button
                className={`tabs__button text-18 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button ${
                  activeTab === index ? "is-tab-el-active" : ""
                }`}
                onClick={() => handleTabClick(index)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
        {/* End tabs */}

        <div className="tabs__content pt-30 js-tabs-content">
          <div className="tabs__pane -tab-item-1 is-tab-el-active">
            <div className="overflow-scroll scroll-bar-1">
              <table className="table-4 -border-bottom col-12">
                <thead className="bg-light-2">
                  <tr>
                    <th>
                      <div className="d-flex items-center">
                        <div className="form-checkbox ">
                          <input type="checkbox" name="name" />
                          <div className="form-checkbox__mark">
                            <div className="form-checkbox__icon icon-check" />
                          </div>
                        </div>
                      </div>
                    </th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Author</th>
                    <th>Status</th>
                    <th>Reviews</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
               
                <tbody>
                {
  tours && tours.map((item) => (
    <tr key={item._id}>
      <td>
        <div className="d-flex items-center">
          <div className="form-checkbox ">
            <input type="checkbox" name="name" />
            <div className="form-checkbox__mark">
              <div className="form-checkbox__icon icon-check" />
            </div>
          </div>
        </div>
      </td>
      <td className="text-blue-1 fw-500">{item.name}</td>
      <td>{item.location}</td>
      <td>Ali Tufan</td>
      <td>
        <span className="rounded-100 py-4 px-10 text-center text-14 fw-500 bg-blue-1-05 text-blue-1">
          Confirmed
        </span>
      </td>
      <td>
        <div className="rounded-4 size-35 bg-blue-1 text-white flex-center text-12 fw-600">
          4.8
        </div>
      </td>
      <td>04/04/2022</td>
      <td>
        <div className="row x-gap-10 y-gap-10 items-center">
          <div className="col-auto">
            <button className="flex-center bg-light-2 rounded-4 size-35">
              <i className="icon-eye text-16 text-light-1" />
            </button>
          </div>
          <div className="col-auto">
            <button className="flex-center bg-light-2 rounded-4 size-35">
              <i className="icon-edit text-16 text-light-1" />
            </button>
          </div>
          <div className="col-auto">
            <button className="flex-center bg-light-2 rounded-4 size-35">
              <i className="icon-trash-2 text-16 text-light-1" />
            </button>
          </div>
        </div>
      </td>
    </tr>
  ))
}


                
                </tbody>
                {/* End tbody */}
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default BookingTable;
