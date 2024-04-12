import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gethotel, managehotel, updateHotelStatus } from "@/store/hotel/action"; // Assuming you have an action to update the hotel status
import { IoEyeSharp } from "react-icons/io5";

const Mangehotel = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotel.hotels);
  const [updateTrigger, setUpdateTrigger] = useState(false); // State to trigger component re-render

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Adjust the format as needed
  };

  useEffect(() => {
    dispatch(managehotel());
  }, [dispatch, updateTrigger]); // Add updateTrigger to the dependency array

  const handleEyeClick = async (hotelId, is_publish) => {
    await dispatch(updateHotelStatus(hotelId, !is_publish)); // Update the status in the database
    setUpdateTrigger((prev) => !prev); // Toggle updateTrigger to trigger re-render
  };

  return (
    <>
      <div className="overflow-scroll scroll-bar-1 py-50 px-160">
        <table className="table-3 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Name</th>
              <th>Date of Application</th>
              <th>Status</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {hotels.length > 0 &&
              hotels.map((hotel, index) => (
                <tr key={index}>
                  <td>{hotel.name}</td>
                  <td>{formatDate(hotel.created_at)}</td>
                  <td>
                    <span className="rounded-100 py-4 px-10 text-center text-14 fw-500" style={{ backgroundColor: hotel.is_publish ? 'green' : 'yellow' }}>
                      {hotel.is_publish ? "Published" : "Not Published"}
                    </span>
                  </td>
                  <td>{hotel.hoteladdress[0].city}</td>
                  <td>
                    <IoEyeSharp
                      style={{
                        color:hotel.is_publish ? 'green' : 'yellow',
                        fontSize: "1.5em"
                      }}
                      onClick={() => handleEyeClick(hotel._id, hotel.is_publish)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Mangehotel;
