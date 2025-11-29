import {BookingStatus} from "../enums/BookingEnums"

export interface BookingDTO {
  adSpaceName: string;
  advertiserName: string;
  startDate: string; 
  endDate: string;   
  status: BookingStatus;
  totalCost: number;
}