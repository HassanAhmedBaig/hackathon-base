import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function FloatingActionButtons(props) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      {/* <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab> */}
      <Fab variant="extended" color="secondary">
        <NavigationIcon sx={{ mr: 1 }} />
        {props.value}
      </Fab>
      {/* <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab> */}
    </Box>
  );
}
