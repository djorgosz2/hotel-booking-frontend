import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const FormDialog = (props) => {
    const [open, setOpen] = React.useState(false);
    const [guestName, setGuestName] = React.useState("");
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
    };

    const handleBook = async () => {
        if(guestName.length===0)alert("Name is required!")
        else {
            try {
                await props.handleBooking({...props.data, name: guestName})
                alert("Successful")
                setGuestName("")
            } catch (err) {
                alert(err)
            }
            setOpen(false)
        }
    };
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Book Now
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{props.data.hotelName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter your full name.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={e=>setGuestName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleBook}>Book</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
