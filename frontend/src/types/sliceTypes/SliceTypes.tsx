import { BookingDTO } from "../BookingTypes";
import { AdSpaceDTO } from "../AdSpaceTypes";

// Zustand slice type for AdSpaceSlice
export interface AdSpaceSlice {
   adSpaces: AdSpaceDTO[];
   loading: boolean;
   error?: string;
   fetchAdSpaces: () => void;
   fetchAdSpaceOnId: () => void;
}

// Zustand slice type for Booking
export interface BookingSlice {
   bookings: BookingDTO[];
   loading: boolean;
   error?: string;
   fetchBookinngs: () => void;
   createBooking: (payload: BookingRequestPayload) => void;
}

export interface BookingRequestPayload {
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

