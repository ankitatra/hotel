// import * as types from "./actiontype";

// const initialState = {
//   hotels : [],
//   isLoading:false,
//   isError:false,
//   combinedData: {
//     contentData: null,
//     roomData: null,
//     faqData: null,
//     attributesData: null,
//   },
// }
// export const hotelreducer = (oldState = initialState, action ) => {
//   const {type , payload } = action
//   switch( type){
//       case types.GET_HOTELS_REQUEST:
//           return {
//               ...oldState,
//               isLoading:true,
//           };
//           case  types.GET_HOTELS_SUCCESS :
//               return {
//                   ...oldState,
//                   isLoading:false,
//                   hotels:payload,
//               };
//               case  types.GET_HOTELS_ERROR :
//                 return {
//                     ...oldState,
//                     isLoading:false,
//                     isError:true
//                 };
//               default :
//               return oldState;
//   }
// };


import * as types from "./actiontype";

const initialState = {
  hotels: [],
  isLoading: false,
  isError: false,
  combinedData: {
    contentData: null,
    room: null,
    faq: null,
    attributesData: null,
  },
};

export const hotelreducer = (oldState = initialState, action) => {
  const { type, payload } = action;
console.log("pay",action)
  switch (type) {
    case types.GET_HOTELS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.GET_HOTELS_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        hotels: action.payload,
      };

    case types.GET_HOTELS_ERROR:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    // Handle setting data for each component
    case types.SET_CONTENT_DATA:
      return {
        ...oldState,
        combinedData: {
          ...oldState.combinedData,
          contentData: payload,
        },
      };

    case types.SET_ROOM_DATA:
      return {
        ...oldState,
        combinedData: {
          ...oldState.combinedData,
          room: payload,
        },
      };

    case types.SET_FAQ_DATA:
      return {
        ...oldState,
        combinedData: {
          ...oldState.combinedData,
          faq: payload,
        },
      };

    case types.SET_ATTRIBUTES_DATA:
      return {
        ...oldState,
        combinedData: {
          ...oldState.combinedData,
          attributesData: payload,
        },
      };

    default:
      return oldState;
  }
};
