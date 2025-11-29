import { BookingStatus } from "../enums/BookingEnums";

export interface BookingDTO {
   id: number;
   adSpaceName: string;
   advertiserName: string;
   startDate: string;
   endDate: string;
   status: BookingStatus;
   totalCost: number;
}
