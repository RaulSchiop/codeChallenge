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
} from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { AdSpaceDTO } from "../types/AdSpaceTypes";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

interface BookingRequestFormType {
   open: boolean;
   handleClose: () => void;
   adSpace: AdSpaceDTO;
}

export interface BookingFormDataType {
   advertiserName: string;
   advertiserEmail: string;
   startDate: string;
   endDate: string;
   totalCost: number;
}

export default function BookingRequestForm({
   open,
   handleClose,
}: BookingRequestFormType) {
   const [startDate, setStartDate] = useState<Dayjs | null>(null);
   const [endDate, setEndDate] = useState<Dayjs | null>(null);

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {};

   const handleSubmit = () => {
      handleClose();
   };

   return (
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
         <DialogTitle>Create Booking Request</DialogTitle>
         <form onSubmit={handleSubmit}>
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
                        onChange={handleChange}
                     />

                     <TextField
                        label="Advertiser Email"
                        name="advertiserEmail"
                        fullWidth
                        type="email"
                        onChange={handleChange}
                     />

                     <DatePicker
                        label="Start Date"
                        value={startDate}
                        onChange={(value) => setStartDate(value)}
                     />

                     <DatePicker
                        label="End Date"
                        value={endDate}
                        onChange={(value) => setEndDate(value)}
                     />

                     <TextField
                        label="Total Cost"
                        name="totalCost"
                        disabled
                        fullWidth
                     />
                  </Stack>
               </LocalizationProvider>
            </DialogContent>

            <DialogActions>
               <Button onClick={handleClose}>Cancel</Button>
               <Button variant="contained" type="submit">
                  Submit
               </Button>
            </DialogActions>
         </form>
      </Dialog>
   );
}
