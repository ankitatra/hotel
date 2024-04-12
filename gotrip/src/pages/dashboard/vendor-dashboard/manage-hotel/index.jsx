import BookingTable from "@/components/dashboard/dashboard/db-booking/components/BookingTable";
import FilterBox from "@/components/dashboard/vendor-dashboard/booking/components/filter-box";
import Footer from "@/components/dashboard/vendor-dashboard/common/Footer";
import Sidebar from "@/components/dashboard/vendor-dashboard/common/Sidebar";

import { IoEyeSharp } from "react-icons/io5";
import Mangehotel from "@/components/dashboard/vendor-dashboard/mange-hotel";
import Header1 from "@/components/header/default-header";


const index = () => {
  return (
    <>
      {/*  */}
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header1 />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-auto">
                <h1 className="text-30 lh-14 fw-600">Booking History</h1>
                <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div>
             
            </div>
            {/* End .row */}

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <Mangehotel />
              {/* End tabs */}
            </div>

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default index;
