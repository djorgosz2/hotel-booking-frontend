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
    const [success, setSuccess] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = async () => {
        setOpen(false);
        setSuccess(false);
    };

    const handleBook = async () => {
        //replace this with mui component
        if (guestName.length === 0) alert("Name is required!")
        else {
            try {
                await props.handleBooking({...props.data, name: guestName})
                setGuestName("")
                setSuccess(true)
            } catch (err) {
                //replace with mui component
                alert(err)
            }
        }
    };
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Book Now
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Book your room</DialogTitle>
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
                        onChange={e => setGuestName(e.target.value)}
                    />
                    <p>{success ? "Completed!" : ""}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        {success ? "Back" : "Cancel"}</Button>
                    {success ? "" : <Button onClick={handleBook}>Book</Button>}
                </DialogActions>
            </Dialog>
        </div>
    );
}
