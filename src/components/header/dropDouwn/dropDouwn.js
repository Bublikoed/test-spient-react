import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const DropDown = ({children, triggerButton}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <div 
             id="basic-button"
             aria-controls="basic-menu"
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
        >
            {triggerButton}
        </div>
      
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {children}
      </Menu>
    </div>
  );
}