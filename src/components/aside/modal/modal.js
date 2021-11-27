import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '10px',
  p: 4,
};

export default function BasicModal({modalOpen, setModalOpen}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false)
    setModalOpen({show: false, content: ''})
  };

  React.useEffect(() => {
      if(modalOpen.show) {
        setOpen(true)
      }
  }, [modalOpen])

  React.useEffect(() => {
    if(open) {
        setTimeout(() => {
            setOpen(false)  
        }, 2000)
    }
}, [open])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography style={{textAlign: 'center'}} id="modal-modal-title" variant="h6" component="h2">
            {modalOpen.content}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}