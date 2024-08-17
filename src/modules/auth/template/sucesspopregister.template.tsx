import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, IconButton, Button, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

interface SuccessPopupProps {
    open: boolean;
    onClose: () => void;
}

const SuccessPopupRegister: React.FC<SuccessPopupProps> = ({ open, onClose }) => {
    const navigate = useNavigate();

    const handleGoToLogin = () => {
        navigate('/');
        onClose(); // Close the dialog after navigating
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="success-dialog-title"
            maxWidth="md" // Keep the dialog larger
            fullWidth
            PaperProps={{
                style: {
                    borderRadius: 16, // Rounded corners
                    padding: 16,
                    backgroundColor: 'white', // Soft background color to match image tones
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)', // Soft shadow
                },
            }}
        >
            <DialogTitle id="success-dialog-title" sx={{ textAlign: 'center', padding: 0 }}>
                <Typography variant="h5" sx={{ fontWeight: 600, color: '#333', marginBottom: 2 }}>
                    Welcome to Hogwarts!
                </Typography>
              
            </DialogTitle>
            <DialogContent dividers sx={{ padding: '24px 32px', textAlign: 'center' }}>
                <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                    <img
                        src="https://i.pinimg.com/736x/dd/aa/bb/ddaabba83fa4ad32f9b30872b3209c92.jpg"
                        alt="Welcome to Hogwarts"
                        style={{ width: '100%', maxWidth: '240px', marginBottom: '24px' }} // Keep image size larger
                    />
                    <Typography align="center" sx={{ fontSize: '18px', color: '#444' }}>
                        Your account has been successfully created!
                    </Typography>
                    <Typography align="center" sx={{ mt: 2, fontSize: '18px', color: '#444' }}>
                        Welcome to the magical world of Hogwarts! We are delighted to have you join our enchanted community. Here at Hogwarts, you'll embark on an extraordinary journey filled with wonder, learning, and endless possibilities.
                    </Typography>
                </Box>
            </DialogContent>
            <DialogActions sx={{ flexDirection: 'column', justifyContent: 'center', padding: '16px 32px' }}>
                <Button onClick={handleGoToLogin} color="primary" variant="contained" fullWidth sx={{
                    backgroundColor: '#6200ea', // Original vibrant purple color
                    color: '#ffffff',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderRadius: 8,
                    padding: '12px 0',
                    marginBottom: '12px',
                    '&:hover': {
                        backgroundColor: '#3700b3', // Original darker purple on hover
                    },
                }}>
                   Close
                </Button>
                
            </DialogActions>
        </Dialog>
    );
};

export default SuccessPopupRegister;
