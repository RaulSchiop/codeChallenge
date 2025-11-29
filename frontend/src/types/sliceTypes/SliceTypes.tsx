import { BookingDTO } from "../BookingTypes";
import { AdSpaceDTO } from "../AdSpaceTypes";

// Zustand store type Main
export interface StoreState extends AdSpaceSliceType, BookingSliceType {}

// Zustand slice type for AdSpaceSlice
export interface AdSpaceSliceType {
   adSpaces: AdSpaceDTO[];
   loading: boolean;
   error?: string;

   fetchAdSpaces: () => void;
}

// Zustand slice type for Booking
export interface BookingSliceType {
   bookings: BookingDTO[];
   loading: boolean;
   errorB?: string;
   setError: (mesage: string) => void;
   fetchBookinngs: () => void;
   createBooking: (payload: BookingRequestPayloadFetch) => void;
   getBookings: () => void;
   approveBooking: (id: number) => void;
   rejectBooking: (id: number) => void;
}

export interface BookingRequestPayload {
   adSpaceId: number;
   advertiserName: string;
   advertiserEmail: string;
   startDate: Date;
   endDate: Date;
   totalCost: number;
}

export interface BookingRequestPayloadFetch {
   adSpaceId: number;
   advertiserName: string;
   advertiserEmail: string;
   startDate: string;
   endDate: string;
   totalCost: number;
}
// {
//   "adSpaceId": 1,
//   "advertiserName": "Acme Corp",
//   "advertiserEmail": "contact@acme.com",
//   "startDate": "2025-12-01",
//   "endDate": "2025-12-10",
//   "status": "Pending",
//   "totalCost": 5000
// }
