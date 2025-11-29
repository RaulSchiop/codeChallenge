import { z } from "zod";
import dayjs from "dayjs";

export const bookingRequestSchema = z
   .object({
      advertiserName: z.string().min(1, "Advertiser Name is required"),
      advertiserEmail: z.string().email("Invalid email address"),
      startDate: z
         .date()
         .refine(
            (date) => dayjs(date).isAfter(dayjs()),
            "Start data > end Date"
         ),
      endDate: z.date(),
   })
   .refine((data) => dayjs(data.endDate).isAfter(dayjs(data.startDate)), {
      message: "End date > start date",
      path: ["endDate"],
   })
   .refine(
      (data) => dayjs(data.endDate).diff(dayjs(data.startDate), "day") + 1 >= 7,
      { message: "Booking > 7 days", path: ["endDate"] }
   );

export type BookingRequestFormData = z.infer<typeof bookingRequestSchema>;
