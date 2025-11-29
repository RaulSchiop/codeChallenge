import { StateCreator } from "zustand";
import {
   BookingSliceType,
   BookingRequestPayload,
   BookingRequestPayloadFetch,
} from "../../types/sliceTypes/SliceTypes";
import { BookingDTO } from "../../types/BookingTypes";
import { addBooking, approveBooking, getBookings } from "../../api/booking";

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
   rejectBooking: async (id: number, newStatus: string) => {
      try {
         set({ loading: true, errorB: undefined });

         // Call API to update the booking status
         const updatedBooking = await approveBooking(id); // returns the updated booking with new status

         // Update only the changed fields in state
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
