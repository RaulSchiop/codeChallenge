import { create } from 'zustand';
import { createAdSpaceSlice } from './slices/adSpaceSlice';
import { createBookingSlice } from './slices/bookingSlice';
import { AdSpaceSliceType, BookingSliceType,StoreState } from '../types/sliceTypes/SliceTypes';


// store
export const useStore = create<StoreState>((set, get,store) => ({
  ...createAdSpaceSlice(set, get,store),
  ...createBookingSlice(set, get,store)
}));
