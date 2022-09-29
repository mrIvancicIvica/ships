import { useContext } from 'react';
import LocationContext from './LocationContext';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import location from './assets/location.svg';


const ListItems = () => {

  const {markerPosition} = useContext(LocationContext)

  return (
    <Box>
      <List component={'nav'}>
        {markerPosition?.map((item, i) => {
          return (
            <Box key={i}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      src={location}
                      alt='location'
                      style={{ width: 30, height: 30 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item.properties.naziv_objekta} />
                </ListItemButton>
              </ListItem>
            </Box>
          );
        })}
      </List>
    </Box>
  );
};

export default ListItems;
