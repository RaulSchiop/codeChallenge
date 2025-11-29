import { useStore } from "../store/useStores";
import {
   Box,
   Button,
   List,
   ListItem,
   Typography,
   CircularProgress,
   Paper,
   Alert
} from "@mui/material";
import { useEffect } from "react";

export default function AdSpaceList() {
   const adSpaces = useStore((state) => state.adSpaces || []);
   const getSpaces = useStore((state) => state.fetchAdSpaces);
   const loading = useStore((state) => state.loading);
   const error=useStore((state)=>state.error)

   useEffect(() => {
      getSpaces();
   }, []);

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

         {loading && (
            <Box display="flex" justifyContent="center" mt={6}>
               <CircularProgress size={50} />
            </Box>
         )}
         {error&&(

            <Box display="flex" justifyContent="center" mt={6}>
               <Alert severity="error">{error}</Alert>
            </Box>

         )}
         

         <List sx={{ mt: 2 }}>
            {adSpaces.map((space) => (
               <Paper
                  key={space.id}
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
                              {space.name}
                           </Typography>
                           <Typography color="text.secondary">
                              {space.location}
                           </Typography>
                        </Box>

                        <Typography variant="body1" fontWeight={500}>
                           ${space.pricePerDay}/day
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
                           {space.type}
                        </Typography>

                        <Button
                           variant="contained"
                           size="small"
                           sx={{
                              ml: 2,
                              textTransform: "none",
                              borderRadius: "10px",
                              fontWeight: 300,
                           }}
                        >
                           Book Now
                        </Button>
                     </Box>
                  </ListItem>
               </Paper>
            ))}
         </List>
      </Box>
   );
}
