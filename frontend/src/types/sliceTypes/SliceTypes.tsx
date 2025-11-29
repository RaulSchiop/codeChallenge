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
   fetchAdSpaceOnId: (id: number) => void;
}

// Zustand slice type for Booking
export interface BookingSliceType {
   bookings: BookingDTO[];
   loading: boolean;
   errorB?: string;
   setError: (mesage: string) => void;
   fetchBookinngs: () => void;
   createBooking: (payload: BookingRequestPayload) => void;
}

export interface BookingRequestPayload {
   adSpaceId: number;
   advertiserName: string;
   advertiserEmail: string;
   startDate: Date;
   endDate: Date;
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
