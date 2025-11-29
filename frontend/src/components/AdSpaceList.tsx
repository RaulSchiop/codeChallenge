import { useStore } from "../store/useStores";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { useEffect } from "react";

export default function AdSpaceList() {
  const adSpaces = useStore((state) => state.adSpaces || []); 
  const getSpaces = useStore((state) => state.fetchAdSpaces);

  useEffect(() => {
    getSpaces();
  }, [getSpaces]);

  console.log(adSpaces)

  return (

    <List>
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
            </Box>
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
}
