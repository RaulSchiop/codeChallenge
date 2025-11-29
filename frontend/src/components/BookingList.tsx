import { useStore } from "../store/useStores";
import {
   Box,
   Button,
   List,
   ListItem,
   Typography,
   CircularProgress,
   Paper,
   Alert,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   SelectChangeEvent,
   TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

export default function BookingRequestList() {
   const bookings = useStore((state) => state.bookings || []);
   const getBookings = useStore((state) => state.getBookings);
   const rejectBooking = useStore((state) => state.rejectBooking);
   const approveBooking = useStore((state) => state.approveBooking);

   const loading = useStore((state) => state.loading);

   const [status, setStatus] = useState("");

   const handleChange = (event: SelectChangeEvent) => {
      setStatus(event.target.value);
   };

   useEffect(() => {
      getBookings();
   }, [getBookings]);

   return (
      <Box p={4}>
         <Typography
            variant="h5"
            fontWeight={700}
            mb={3}
            sx={{
               borderBottom: "3px solid ",
               display: "inline-block",
               pb: 1,
            }}
         >
            Ad Space List
         </Typography>
         <Box mb={3}>
            <FormControl fullWidth sx={{ marginBottom: 3 }}>
               <InputLabel id="type-label">Status</InputLabel>
               <Select
                  labelId="type-label"
                  value={status}
                  label="Type"
                  onChange={handleChange}
               >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Approved">Approved</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
               </Select>
            </FormControl>
         </Box>

         {loading && (
            <Box display="flex" justifyContent="center" mt={6}>
               <CircularProgress size={50} />
            </Box>
         )}

         <List sx={{ mt: 2 }}>
            {bookings
               .filter((space) => {
                  const matchesStatus = status
                     ? space.status.toLowerCase() === status.toLowerCase()
                     : true;

                  return matchesStatus;
               })
               .map((booking, index) => (
                  <Box key={index}>
                     <Paper
                        key={index}
                        elevation={3}
                        sx={{
                           mb: 5,

                           borderRadius: 2,
                           transition: "0.2s",
                           "&:hover": {
                              boxShadow: 6,
                              transform: "scale(1.01)",
                           },
                        }}
                     >
                        <ListItem>
                           <Box
                              display="flex"
                              justifyContent="space-between"
                              width="100%"
                              alignItems="center"
                              color="black"
                           >
                              <Box>
                                 <Typography variant="h6" fontWeight={600}>
                                    {booking.adSpaceName}
                                 </Typography>
                                 <Typography color="text.secondary">
                                    {booking.advertiserName}
                                 </Typography>
                              </Box>

                              <Typography variant="body1" fontWeight={500}>
                                 start: {booking.startDate}
                              </Typography>
                              <Typography variant="body1" fontWeight={500}>
                                 end: {booking.endDate}
                              </Typography>

                              <Typography
                                 sx={{
                                    px: 2,
                                    py: 0.5,
                                    borderRadius: "20px",
                                    bgcolor: "white",

                                    fontWeight: 600,
                                 }}
                                 color={`${
                                    booking.status === "Pending"
                                       ? "black"
                                       : booking.status === "Approved"
                                       ? "green"
                                       : booking.status === "Rejected" && "red"
                                 }`}
                              >
                                 {booking.status}
                              </Typography>
                              <Box>
                                 {booking.status === "Pending" && (
                                    <Button
                                       onClick={() =>
                                          approveBooking(booking.id)
                                       }
                                       variant="contained"
                                       size="small"
                                       sx={{
                                          ml: 2,
                                          textTransform: "none",
                                          borderRadius: "10px",
                                          fontWeight: 300,
                                          background: "green",
                                       }}
                                    >
                                       Approve
                                    </Button>
                                 )}
                                 {booking.status === "Pending" && (
                                    <Button
                                       onClick={() => rejectBooking(booking.id)}
                                       variant="contained"
                                       size="small"
                                       sx={{
                                          ml: 2,
                                          textTransform: "none",
                                          borderRadius: "10px",
                                          fontWeight: 300,
                                          background: "red",
                                       }}
                                    >
                                       Reject
                                    </Button>
                                 )}
                              </Box>
                           </Box>
                        </ListItem>
                     </Paper>
                  </Box>
               ))}
         </List>
      </Box>
   );
}
