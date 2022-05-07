import * as React from 'react';
import { ListItem } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TodoItem () {
  return (
    <ListItem
        secondaryAction={
            <IconButton edge="end" aria-label="comments">
                <DeleteIcon/>
            </IconButton>
        }
            disablePadding
        >
        <ListItemButton role={undefined} dense>
            <ListItemIcon>
                <Checkbox edge="start" tabIndex={-1} disableRipple/>
            </ListItemIcon>
            <ListItemText primary={`Line Item`}/>
        </ListItemButton>
    </ListItem>
  );
}
