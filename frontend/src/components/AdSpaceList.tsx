import { useStore } from "../store/useStores";
import { Box, Button, Divider, List, ListItem, Typography } from "@mui/material";
import { useEffect } from "react";

export default function AdSpaceList() {
   const adSpaces = useStore((state) => state.adSpaces || []);
   const getSpaces = useStore((state) => state.fetchAdSpaces);

   useEffect(() => {
      getSpaces();
   }, [adSpaces]);

   console.log(adSpaces);

   return (
      <List>
         <Typography>Ad Space List</Typography>
         {adSpaces.map((space) => (
            <Box key={space.id}>
               <ListItem>
                  <Box
                     display="flex"
                     justifyContent="space-between"
                     width="100%"
                  >
                     <Typography>{space.name}</Typography>
                     <Typography>{space.location}</Typography>
                     <Typography>{space.pricePerDay}</Typography>
                     <Typography>{space.type}</Typography>
                     <Button>Book Now</Button>
                  </Box>
               </ListItem>
               <Divider />
            </Box>
         ))}
      </List>
   );
}
