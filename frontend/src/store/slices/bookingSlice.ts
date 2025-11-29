import { StateCreator } from "zustand";
import {
   BookingSliceType,
   BookingRequestPayload,
   BookingRequestPayloadFetch,
} from "../../types/sliceTypes/SliceTypes";
import { BookingDTO } from "../../types/BookingTypes";
import {
   addBooking,
   approveBooking,
   getBookings,
   rejectBooking,
} from "../../api/booking";

export const createBookingSlice: StateCreator<BookingSliceType> = (
   set,
   get,
   store
) => ({
   bookings: [],
   loading: false,
   errorB: undefined,
   setError: (error: string) => {
      set({ errorB: error });
   },
   // Fetch bookings
   fetchBookinngs: async () => {},

   // Create booking
   createBooking: async (payload: BookingRequestPayloadFetch) => {
      try {
         set({ loading: true, errorB: undefined });
         const data = await addBooking(payload);

         set({ bookings: data, loading: false });
      } catch (err: any) {
         set({
            errorB: err.message || "Failed to get ad spaces",
            loading: false,
         });
      }
   },

   // Get bookings
   getBookings: async () => {
      try {
         set({ loading: true, errorB: undefined });
         const data = await getBookings();

         set({ bookings: data, loading: false });
      } catch (err: any) {
         set({
            errorB: err.message || "Failed to get ad spaces",
            loading: false,
         });
      }
   },

   //reject booking
   approveBooking: async (id: number) => {
      try {
         set({ loading: true, errorB: undefined });

         const updatedBooking = await approveBooking(id);

         set((state) => ({
            bookings: state.bookings.map((booking) =>
               booking.id === id ? { ...booking, ...updatedBooking } : booking
            ),
            loading: false,
         }));
      } catch (err: any) {
         set({
            errorB: err.message || "Failed to update booking",
            loading: false,
         });
      }
   },

   rejectBooking: async (id: number) => {
      try {
         set({ loading: true, errorB: undefined });

         const updatedBooking = await rejectBooking(id);

         set((state) => ({
            bookings: state.bookings.map((booking) =>
               booking.id === id ? { ...booking, ...updatedBooking } : booking
            ),
            loading: false,
         }));
      } catch (err: any) {
         set({
            errorB: err.message || "Failed to update booking",
            loading: false,
         });
      }
   },
});
