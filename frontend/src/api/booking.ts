import { BookingRequestPayloadFetch } from "../types/sliceTypes/SliceTypes";

export async function addBooking(bookingData: BookingRequestPayloadFetch) {
   try {
      const res = await fetch("/api/v1/booking-requests", {
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
