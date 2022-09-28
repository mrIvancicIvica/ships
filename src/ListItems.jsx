import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import location from './assets/location.svg';


const ListItems = () => {

  const [items, setItems] = useState([])
  return (
    <Box>
      <List component={'nav'}>
        {[1, 2, 3, 4, 5].map((item) => {
          return (
            <Box key={item}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img
                      src={location}
                      alt='location'
                      style={{ width: 30, height: 30 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary='Location' />
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
