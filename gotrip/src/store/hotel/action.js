import axios from "axios";
import * as types from "./actiontype";
import { toast } from 'react-toastify';

export const getHotelsRequest = () => {
  return {
    type: types.GET_HOTELS_REQUEST,
  };
};

export const getHotelssuccess = (payload) => {
  return {
    type: types.GET_HOTELS_SUCCESS,
    payload,
  };
};

export const getHotelsError = () => {
  return {
    type: types.GET_HOTELS_ERROR,
  };
};


export const gethotel = (params) => (dispatch) => {
  console.log("para",params)
  dispatch(getHotelsRequest());
  return axios
    .get("https://good-jade-chinchilla-hem.cyclic.app/hotels", { params: params }) // Pass params directly to the params object
    .then((r) => {
      dispatch(getHotelssuccess(r.data));
      console.log("hi", r.data);
    })
    .catch((e) => {
      dispatch(getHotelsError());
    });
};
export const managehotel = (params) => (dispatch) => {
  console.log("para",params)
  dispatch(getHotelsRequest());
  return axios
    .get("https://good-jade-chinchilla-hem.cyclic.app/hotelslist",) // Pass params directly to the params object
    .then((r) => {
      dispatch(getHotelssuccess(r.data));
      console.log("hi", r.data);
    })
    .catch((e) => {
      dispatch(getHotelsError());
    });
};



export const setContentData = (data) => {
  return {
    type: types.SET_CONTENT_DATA,
    payload: data,
  };
};

export const setRoomData = (data) => {
  return {
    type: types.SET_ROOM_DATA,
    payload: data,
  };
};

export const setFAQData = (data) => {
  return {
    type: types.SET_FAQ_DATA,
    payload: data,
  };
};

export const setAttributesData = (data) => {
  return {
    type: types.SET_ATTRIBUTES_DATA,
    payload: data,
  };
};



// export const sendCombinedData = (combinedData) => {
 
//   return async (dispatch) => {
//     try {
//       // Make POST request to your API
//       const response = await axios.post('http://localhost:4000/hotels', combinedData);
      
//       // Dispatch success action with response data if request is successful
//       dispatch({
//         type: types.SET_COMBINED_DATA_SUCCESS,
//         payload: response.data,
//       });
//     } catch (error) {
//       // Dispatch error action if request fails
//       dispatch({
//         type: types.SET_COMBINED_DATA_ERROR,
//         payload: error.message, // You can customize the payload as needed
//       });
//     }
//   };
// };

export const sendCombinedData = (combinedData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://good-jade-chinchilla-hem.cyclic.app/hotels', combinedData);
      dispatch({
        type: types.SET_COMBINED_DATA_SUCCESS,
        payload: response.data,
      });
      // Show toast message on success
      return response.data;
    } catch (error) {
      dispatch({
        type: types.SET_COMBINED_DATA_ERROR,
        payload: error.message,
      });
      
    }
  };
};

export const getHotelById = async(hotelId) => {
  return axios
    .get(`https://good-jade-chinchilla-hem.cyclic.app/hotels/${hotelId}`)
    .then((response) => {
      console.log("Hotel data retrieved successfully:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching hotel by ID:", error);
      throw error; // Propagate the error to the caller
    });
};

// export const updateHotelStatus = async (hotelId, newStatus) => {
//   const data = { is_publish: newStatus }; // New status to update
//   console.log("data",data)
//   return axios
//     .patch(`http://localhost:4000/hotels/${hotelId}`, data)
//     .then((response) => {
//       console.log("Hotel status updated successfully:", response.data);
//       return response.data;
//     })
//     .catch((error) => {
//       console.error("Error updating hotel status:", error);
//       throw error; // Propagate the error to the caller
//     });
// };



export const updateHotelStatus = (hotelId, newStatus) => async (dispatch) => {
  try {
    const response = await axios.patch(`https://good-jade-chinchilla-hem.cyclic.app/hotels/${hotelId}`, {is_publish: newStatus });
    console.log('Hotel status updated successfully:', response.data);
    // Dispatch any success action here if needed
  } catch (error) {
    console.error('Error updating hotel status:', error);
    // Dispatch any error action here if needed
  }
};