import { StateCreator } from 'zustand';
import { BookingSliceType, BookingRequestPayload } from '../../types/sliceTypes/SliceTypes';
import {BookingDTO} from "../../types/BookingTypes"

export const createBookingSlice: StateCreator<BookingSliceType> = (set, get,store) => ({
  bookings: [],
  loading: false,
  error: undefined,

  // Fetch bookings
  fetchBookinngs: async () => {
    
  },

  // Create booking
  createBooking: async (payload: BookingRequestPayload) => {
    set({ loading: true, error: undefined });
 
  },
});
