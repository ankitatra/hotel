import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import {hotelreducer} from "./hotel/reducer"
export const store = configureStore({
  reducer: {
    hotel: hotelreducer,
    hero: findPlaceSlice,
  },
});


export default store;