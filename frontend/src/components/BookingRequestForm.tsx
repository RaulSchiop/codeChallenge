import {
   Box,
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   TextField,
   Stack,
   Typography,
   Alert,
} from "@mui/material";
import { useState, useEffect } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdSpaceDTO } from "../types/AdSpaceTypes";
import { bookingRequestSchema } from "../schemas/schemas";
import { BookingRequestPayload } from "../types/sliceTypes/SliceTypes";
import { useStore } from "../store/useStores";
import { addBooking } from "../api/booking";

interface BookingRequestFormProps {
   open: boolean;
   handleClose: () => void;
   adSpace: AdSpaceDTO;
}

export default function BookingRequestForm({
   open,
   handleClose,
   adSpace,
}: BookingRequestFormProps) {
   const [formData, setFormData] = useState<BookingRequestPayload>({
      adSpaceId: adSpace.id,
      advertiserName: "",
      advertiserEmail: "",
      startDate: new Date(),
      endDate: new Date(),
      totalCost: 0,
   });
   const error = useStore((state) => state.errorB);
   const setError = useStore((state) => state.setError);
   const createBooking = useStore((state) => state.createBooking);

   console.log(formData);
   useEffect(() => {
      if (formData.startDate && formData.endDate) {
         const start = dayjs(formData.startDate);
         const end = dayjs(formData.endDate);
         if (end.isAfter(start) || end.isSame(start)) {
            const days = end.diff(start, "day") + 1;
            setFormData((prev) => ({
               ...prev,
               totalCost: days * adSpace.pricePerDay,
            }));
         }
      }
   }, [formData.startDate, formData.endDate, adSpace.pricePerDay]);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleStartDateChange = (date: Dayjs | null) => {
      if (!date) return;
      const start = date.toDate();
      setFormData((prev) => ({
         ...prev,
         startDate: start,
         totalCost:
            prev.endDate >= start
               ? ((prev.endDate.getTime() - start.getTime()) /
                    (1000 * 60 * 60 * 24) +
                    1) *
                 adSpace.pricePerDay
               : prev.totalCost,
      }));
   };

   const handleEndDateChange = (date: Dayjs | null) => {
      if (!date) return;
      const end = date.toDate();
      setFormData((prev) => ({
         ...prev,
         endDate: end,
         totalCost:
            end >= prev.startDate
               ? ((end.getTime() - prev.startDate.getTime()) /
                    (1000 * 60 * 60 * 24) +
                    1) *
                 adSpace.pricePerDay
               : prev.totalCost,
      }));
   };
   const handleSubmit = async () => {
      try {
         const formattedData = {
            ...formData,
            startDate: dayjs(formData.startDate).format("YYYY-MM-DD"),
            endDate: dayjs(formData.endDate).format("YYYY-MM-DD"),
         };
         console.log(formattedData);

         bookingRequestSchema.parse(formData);

         const res = await createBooking(formattedData);

         handleClose();
         setError("");
      } catch (err: any) {
         console.log(err);
         setError("Errors on inputs");
      }
   };

   return (
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
         {error && <Alert severity="error">{error}</Alert>}

         <DialogTitle>Create Booking Request</DialogTitle>
         <DialogContent>
            <DialogContentText mb={2}>
               Fill out the form below to request a booking.
            </DialogContentText>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <Stack spacing={2}>
                  <TextField
                     label="Advertiser Name"
                     name="advertiserName"
                     fullWidth
                     value={formData.advertiserName}
                     onChange={handleChange}
                  />
                  <TextField
                     label="Advertiser Email"
                     name="advertiserEmail"
                     type="email"
                     fullWidth
                     value={formData.advertiserEmail}
                     onChange={handleChange}
                  />
                  <DatePicker
                     label="Start Date"
                     value={
                        formData.startDate ? dayjs(formData.startDate) : null
                     }
                     onChange={handleStartDateChange}
                  />
                  <DatePicker
                     label="End Date"
                     value={formData.endDate ? dayjs(formData.endDate) : null}
                     onChange={handleEndDateChange}
                  />
                  <Typography
                     sx={{
                        px: 2,

                        borderRadius: "20px",
                        bgcolor: "white",
                        color: "gray",
                        fontWeight: 600,
                     }}
                  >
                     End date Sould be after start Date
                  </Typography>
                  <Typography
                     sx={{
                        px: 2,
                        py: 0.5,
                        borderRadius: "20px",
                        bgcolor: "white",
                        color: "blue",
                        fontWeight: 600,
                     }}
                  >
                     Total Price: ${formData.totalCost}
                  </Typography>
               </Stack>
            </LocalizationProvider>
         </DialogContent>
         <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmit}>
               Submit
            </Button>
         </DialogActions>
      </Dialog>
   );
}
