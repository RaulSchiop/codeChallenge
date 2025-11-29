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
      startDate: "",
      endDate: "",
      totalCost: 0,
   });
   const error = useStore((state) => state.errorB);
   const setError = useStore((state) => state.setError);

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
      setFormData((prev) => ({
         ...prev,
         startDate: date?.toString() || "",
      }));
   };

   const handleEndDateChange = (date: Dayjs | null) => {
      setFormData((prev) => ({ ...prev, endDate: date?.toString() || "" }));
   };

   const handleSubmit = () => {
      try {
         const zodValidation = bookingRequestSchema.parse(formData);

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
