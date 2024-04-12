import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/add-hotel";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: " || GoTrip - Travel & Tour ReactJs Template",
  description: "GoTrip - Travel & Tour ReactJs Template",
};

export default function VendorAddHotel() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
