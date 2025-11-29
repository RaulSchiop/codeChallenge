import { AdSpaceAvailability, AdSpaceType } from "../enums/AdSpceEnums";

export interface AdSpaceDTO {
   id: number;
   name: string;
   type: AdSpaceType;
   location: string;
   pricePerDay: number;
   availability: AdSpaceAvailability;
}
