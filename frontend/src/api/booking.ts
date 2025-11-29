import { BookingRequestPayloadFetch } from "../types/sliceTypes/SliceTypes";

const API_BASE = "http://localhost:8080/api/v1/booking-requests";

export async function addBooking(bookingData: BookingRequestPayloadFetch) {
   try {
      const res = await fetch(`${API_BASE}`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(bookingData),
      });

      if (!res.ok) throw new Error("failed add bookings");

      return await res.json();
   } catch (err: any) {
      console.log(err);
      throw err;
   }
}

export async function getBookings() {
   try {
      const res = await fetch(`${API_BASE}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
      });

      if (!res.ok) throw new Error("failed add bookings");

      return await res.json();
   } catch (err: any) {
      console.log(err);
      throw err;
   }
}
